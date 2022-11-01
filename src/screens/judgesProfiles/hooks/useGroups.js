import { useState, useEffect, useRef } from "react";
import { firebase } from "../../../services/firebase";

export const useGroups = () => {
  const [groups, setGroups] = useState([]);
  const filterGroups = useRef([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.getGroups(
      (querySnapshot) => {
        querySnapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            setGroups((prev) => {
              const newAdded = [...prev, change.doc.data()];
              filterGroups.current = newAdded;
              return newAdded;
            });
          }
        });
      },
      (error) => setError("Failed to fetch: " + error.message)
    );

    setLoading(false);
    return unsubscribe;
  }, []);

  return [groups, setGroups, loading, error, filterGroups];
};

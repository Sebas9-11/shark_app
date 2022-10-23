import { useState, useEffect } from "react";
import { firebase } from "../../../services/firebase";

export const useGroups = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.getGroups(
      (querySnapshot) => {
        const groups = querySnapshot.docs.map(docSnapshot => docSnapshot.data());
        setGroups(groups);
      },
      (error) => setError('Failed to fetch: ' + error.message)
    );

    setLoading(false);
    return unsubscribe;
  }, [groups,setGroups]);

  return [groups, setGroups, loading, error];
};

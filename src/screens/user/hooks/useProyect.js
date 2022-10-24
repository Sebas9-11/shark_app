import { useState, useEffect } from "react";
import { firebase } from "../../../services/firebase";

export const useProyect = () => {
  const [proyect, setProyect] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.getSnapShotById('groups', firebase.user,
      (querySnapshot) => {
        querySnapshot.docChanges().forEach((change) => {
          if (!proyect.id) {
            if (change.type === "added") {
              setProyect(change.doc.data());
            }
          }
          
          if (change.type === "modified") {
            setProyect(change.doc.data());
          }
        });
      },
      (error) => setError('Failed to fetch: ' + error.message)
    );
    
    setLoading(false);
    return unsubscribe;
  }, [proyect, setProyect]);

  return [proyect, loading, error];
};

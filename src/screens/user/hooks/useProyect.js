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
          if (change.type === "added") {
            console.log('added');
            setProyect(change.doc.data());
          }
          
          if (change.type === "modified") {
            console.log('modified');
            setProyect(change.doc.data());
          }
        });
      },
      (error) => setError('Failed to fetch: ' + error.message)
    );
    
    setLoading(false);
    return unsubscribe;
  }, []);

  return [proyect, loading, error];
};

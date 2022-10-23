import { useState, useEffect } from "react";
import { firebase } from "../../../services/firebase";

export const useProyect = () => {
  const [proyect, setProyect] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.getSnapShotById('groups', firebase.user,
      (querySnapshot) => {
        const [ proyect ] = querySnapshot.docs.map(docSnapshot => docSnapshot.data());
        setProyect(proyect);
      },
      (error) => setError('Failed to fetch: ' + error.message)
    );
    
    setLoading(false);
    return unsubscribe;
  }, [proyect, setProyect]);

  return [proyect, loading, error];
};

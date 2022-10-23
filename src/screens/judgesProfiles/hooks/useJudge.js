import { useState, useEffect } from "react";
import { firebase } from "../../../services/firebase";

export const useJudge = () => {
  const [jusgeState, setJusgeState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.getSnapShotById('judges', firebase.user,
      (querySnapshot) => {
        const [ judge ] = querySnapshot.docs.map(docSnapshot => docSnapshot.data());
        setJusgeState(judge);
      },
      (error) => setError('Failed to fetch: ' + error.message)
    );
    
    setLoading(false);
    return unsubscribe;
  }, [jusgeState, setJusgeState]);

  return [jusgeState, loading, error];
};

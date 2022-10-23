import { useState, useEffect } from "react";
import { firebase } from "../../../services/firebase";

export const useJudges = () => {
  const [judgesState, setJudgesState] = useState();
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.getSnapShotById('groups', firebase.user,
      (querySnapshot) => {
        const [ proyect ] = querySnapshot.docs.map(docSnapshot => docSnapshot.data());
        const total = proyect.judges.reduce((acc, judge) => acc + judge.money, 0);
        setTotal(total);
        setJudgesState(proyect.judges);
      },
      (error) => setError('Failed to fetch: ' + error.message)
    );
    
    setLoading(false);
    return unsubscribe;
  }, [judgesState, setJudgesState]);

  return [judgesState, total, loading, error];
};

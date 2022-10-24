import { useState, useEffect, useRef } from "react";
import { firebase } from "../../../services/firebase";

export const useJudges = () => {
  const [judgesState, setJudgesState] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const firstLoad = useRef(true);

  useEffect(() => {
    const unsubscribe = firebase.getSnapShotById('groups', firebase.user,
      (querySnapshot) => {
        querySnapshot.docChanges().forEach((change) => {
          if (firstLoad.current) {
            if (change.type === "added") {
              firstLoad.current = false;
              setJudgesState(change.doc.data().judges);
            }
          }

          if (change.type === "modified") {
            setJudgesState(change.doc.data().judges);
          }
        });
        const total = judgesState.reduce((acc, judge) => acc + judge.money, 0);
        setTotal(total);
      },
      (error) => setError('Failed to fetch: ' + error.message)
    );
    
    setLoading(false);
    return unsubscribe;
  }, [judgesState, setJudgesState]);

  return [judgesState, total, loading, error];
};

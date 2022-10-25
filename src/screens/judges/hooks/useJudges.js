import { useState, useEffect, useRef } from "react";
import { firebase } from "../../../services/firebase";

export const useJudges = () => {
  const [judgesState, setJudgesState] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.getSnapShotById('groups', firebase.user,
      (querySnapshot) => {
        querySnapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            const { judges } = change.doc.data();
            setJudgesState(judges);
            const total = judges.reduce((acc, judge) => acc + judge.money, 0);
            setTotal(total);
          }

          if (change.type === "modified") {
            const { judges } = change.doc.data();
            setJudgesState(judges);
            const total = judges.reduce((acc, judge) => acc + judge.money, 0);
            setTotal(total);
          }
        });
      },
      (error) => setError('Failed to fetch: ' + error.message)
    );
    
    setLoading(false);
    return unsubscribe;
  }, []);

  return [judgesState, total, loading, error];
};

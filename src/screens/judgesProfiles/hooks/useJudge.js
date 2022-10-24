import { useState, useEffect } from "react";
import { firebase } from "../../../services/firebase";

export const useJudge = () => {
  const [jusgeState, setJusgeState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.getSnapShotById('judges', firebase.user,
      (querySnapshot) => {
        querySnapshot.docChanges().forEach((change) => {
          if (!jusgeState.id) {
            if (change.type === "added") {
              setJusgeState(change.doc.data());
            }
          }
          
          if (change.type === "modified") {
            setJusgeState(change.doc.data());
          }
        });
      },
      (error) => setError('Failed to fetch: ' + error.message)
    );
    
    setLoading(false);
    return unsubscribe;
  }, [jusgeState, setJusgeState]);

  return [jusgeState, loading, error];
};

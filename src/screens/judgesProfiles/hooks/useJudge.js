import { useState, useEffect } from "react";
import { firebase } from "../../../services/firebase";

export const useJudge = () => {
  const [jusgeState, setJusgeState] = useState({});

  async function getJudges() {
    try {
      const [response] = firebase.userData;
      setJusgeState(response);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getJudges();
  }, []);

  return [jusgeState];
};

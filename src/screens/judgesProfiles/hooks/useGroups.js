import { useState, useEffect } from "react";
import { firebase } from "../../../services/firebase";

export const useGroups = () => {
  const [groups, setGroups] = useState([]);

  function getProyect() {
    try {
      const response = firebase.groups;
      setGroups(response);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getProyect();
  }, []);

  return [groups, setGroups];
};

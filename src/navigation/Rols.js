import GroupStack from "./GroupStack";
import HomeStack from "./HomeStack";
import { firebase } from "../services/firebase";

export default function Rols () {

  function Rol() {
    const [typeUser] = firebase.group
    console.log(typeUser)
    if (typeUser.rol === "user") {
      return (
        <GroupStack />
      );
    } else {
      return (
        <HomeStack />
      );
    }
  }

  return (
    <Rol />
  );
}

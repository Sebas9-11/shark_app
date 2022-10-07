import GroupStack from "./GroupStack";
import HomeStack from "./HomeStack";
import { firebase } from "../services/firebase";

export default function Rols () {
  const [typeUser] = firebase.group
  
  return typeUser.rol === "user" ? <GroupStack /> : <HomeStack />
}

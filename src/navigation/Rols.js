import GroupStack from "./GroupStack";
import { firebase } from "../services/firebase";
import JudgesStack from "./JudgesStack";

export default function Rols() {
  const [typeUser] = firebase.userType;

  return typeUser.rol === "user" ? <GroupStack /> : <JudgesStack />;
}

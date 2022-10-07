import GroupStack from "./GroupStack";
import HomeStack from "./HomeStack";

export default function Rols () {
  const [typeUser] = firebase.group
  
  return typeUser.rol === "user" ? <GroupStack /> : <HomeStack />
}

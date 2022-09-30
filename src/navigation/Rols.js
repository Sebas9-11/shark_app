import GroupStack from "./GroupStack";
import HomeStack from "./HomeStack";

export default function Rols () {

  const rol = '1'
  return (
    rol === '1' ? <GroupStack/> : <HomeStack/>
  )
}

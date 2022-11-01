import Index from "./src/navigation/Index";
import GroupsView from "./src/screens/judgesProfiles/groupsView/GroupsView";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs(true);

export default function App() {
  return <Index />;
}

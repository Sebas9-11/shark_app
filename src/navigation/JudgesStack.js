import { createDrawerNavigator } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../services/firebase";
import { Colors, NewColors } from "../constants";
import { Ionicons } from "@expo/vector-icons";

//screens
import ProfileJudgesScreen from "../screens/judgesProfiles/ProfilejudgesScreen";
import GroupsView from "../screens/judgesProfiles/groupsView/GroupsView";

const Drawer = createDrawerNavigator();

export default function JudgesStack() {
  const navigation = useNavigation();

  const handleSingOut = async () => {
    await firebase.signOut().then(() => {
      navigation.navigate("Login");
    });
  };

  function logout() {
    return (
      <TouchableOpacity
        onPress={handleSingOut}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginRight: 10,
        }}
      >
        <Ionicons name="log-out" size={24} color={Colors.white} />
      </TouchableOpacity>
    );
  }

  return (
    <Drawer.Navigator
      screenOptions={{
        headerRight: () => logout(),
      }}
    >
      <Drawer.Group
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: NewColors.red,
          },
        }}
      >
        <Drawer.Screen name="Me" component={ProfileJudgesScreen} />
        <Drawer.Screen name="Groups" component={GroupsView} />
      </Drawer.Group>
    </Drawer.Navigator>
  );
}

import { createDrawerNavigator } from "@react-navigation/drawer";
import JudgesScreen from "../screens/judges/JudgesScreen";
import ProyectScreen from "../screens/user/ProyectScreen";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../services/firebase";
import { Colors, NewColors } from "../constants";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function GroupStack() {
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
        <Drawer.Screen name="Home" component={ProyectScreen} />
        <Drawer.Screen name="Judges" component={JudgesScreen} />
      </Drawer.Group>
    </Drawer.Navigator>
  );
}

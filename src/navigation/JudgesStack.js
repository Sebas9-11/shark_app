import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProyectJudgesScreen from "../screens/judgesProfiles/ProyectScreen";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../services/firebase";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants";

const Stack = createNativeStackNavigator();

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
    <Stack.Navigator
      screenOptions={{
        headerRight: () => logout(),
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: Colors.danger,
        },
      }}
    >
      <Stack.Screen name="Judges" component={ProyectJudgesScreen} />
    </Stack.Navigator>
  );
}

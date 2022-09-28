import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";

export default function Index() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
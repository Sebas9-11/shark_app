import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Buttons, Inputs } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { Colors, NewColors } from "../../constants/colors";
import { BlurView } from "expo-blur";
import React from "react";
import { firebase } from "../../services/firebase";
import logo from "../../../assets/logo.png";

export default function AuthScreen() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigation = useNavigation();

  const handleSingIn = async () => {
    await firebase
      .signIn(email, password)
      .then((user) => {
        navigation.navigate("Rols");
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Image source={logo} style={[styles.logo]} />
        <BlurView
          intensity={Platform.OS === "ios" ? 10 : 150}
          style={styles.blur}
        >
          <Text style={styles.title}>Login</Text>
          <Inputs
            placeholder="Email"
            type="email-address"
            securety={false}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Inputs
            placeholder="Password"
            type="default"
            securety={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          <Buttons
            title="Login"
            onPress={handleSingIn}
            color={NewColors.blue}
          />
          <Buttons
            title="Register"
            onPress={() => navigation.navigate("Register")}
            color={NewColors.red}
          />
        </BlurView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  blur: {
    width: "90%",
    height: "50%",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
});

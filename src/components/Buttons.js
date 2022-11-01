import { StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../constants/colors";
import { Button } from "react-native-paper";

export const Buttons = ({ title, onPress, color }) => {
  return (
    <Button
      style={[styles.container, { backgroundColor: color }]}
      color={Colors.white}
      mode="text"
      onPress={onPress}
    >
      {title}
    </Button>
  );
};

export const ButtonRegister = ({ title, onPress, color }) => {
  return (
    <Button
      style={[styles.buttonRegister, { backgroundColor: color }]}
      color={Colors.white}
      mode="contained"
      onPress={onPress}
    >
      {title}
    </Button>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 40,
    borderRadius: 6,
    justifyContent: "center",
    marginVertical: 5,
    marginHorizontal: 5,
  },
  buttonRegister: {
    width: "100%",
    height: 40,
    borderRadius: 6,
    justifyContent: "center",
    marginVertical: 5,
  },
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: Colors.black,
  },
});

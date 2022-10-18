import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../constants/colors";

export const Buttons = ({ title, onPress, color }) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export const ButtonRegister = ({ title, onPress, color }) => {
  return (
    <TouchableOpacity
      style={[styles.buttonRegister, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 40,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    borderWidth: 1,
  },
  buttonRegister: {
    width: "35%",
    height: 40,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: Colors.black,
  },
});

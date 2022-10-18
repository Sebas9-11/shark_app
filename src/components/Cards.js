import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Card, Button } from "react-native-paper";

import { Colors } from "../constants";

export default function Cards({ title, content, uri, on }) {
  const ButtonsTrue = ({ button }) => {
    if (button == true) {
      return (
        <Card.Actions>
          <Button
            style={styles.button}
            color={Colors.primary}
            mode="contained"
            onPress={() => console.log("Unirme")}
          >
            Unirme ☝🏼
          </Button>
          <Button
            style={styles.button}
            color={Colors.primary}
            mode="contained"
            onPress={() => console.log("Rechazar")}
          >
            Rechazar 👎🏽
          </Button>
        </Card.Actions>
      );
    } else {
      return null;
    }
  };
  return (
    <Card style={styles.card}>
      <Card.Title title={title} />
      <Card.Content>
        <Text>{content}</Text>
      </Card.Content>
      <Card.Cover style={styles.image} source={{ uri: uri }} />
      <ButtonsTrue button={on} />
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    marginVertical: 10,
  },
  image: {
    width: "50%",
    height: 200,
    marginBottom: 36,
    borderWidth: 4,
    borderColor: "#fff",
    backgroundColor: "#fff",
    resizeMode: "stretch",
  },
  button: {
    marginHorizontal: 10,
    width: "40%",
    marginVertical: 10,
    color: "#fff",
  },
});

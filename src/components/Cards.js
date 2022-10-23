import { Text, StyleSheet } from "react-native";
import React from "react";
import { Card, Button } from "react-native-paper";
import { Colors } from "../constants";
import image from "../../assets/group.png";

export default function Cards({
  title,
  content,
  uri,
  on,
  onPressButton1,
  onpressButton2,
  presupuesto,
}) {

  function showImage() {
    if (uri) {
      return { uri };
    } else {
      return image;
    }
  }


  const ButtonsTrue = ({ button }) => {
    if (button == true) {
      return (
        <Card.Actions>
          <Button
            style={styles.button}
            color={Colors.primary}
            mode="contained"
            onPress={onPressButton1}
          >
            Aportar ☝🏼
          </Button>
          <Button
            style={styles.button}
            color={Colors.primary}
            mode="contained"
            onPress={onpressButton2}
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
        <Text>Presupuesto: ${presupuesto}</Text>
        <Text>{content}</Text>
      </Card.Content>
      <Card.Cover style={styles.image} source={showImage()} />
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

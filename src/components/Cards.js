import { Text, StyleSheet } from "react-native";
import React from "react";
import { Card, Button } from "react-native-paper";
import { Colors, NewColors } from "../constants";
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
        <Card.Actions style={styles.containerButton}>
          <Button
            style={styles.button}
            color={NewColors.blue}
            mode="contained"
            onPress={onPressButton1}
          >
            Aportar ☝🏼
          </Button>
          <Button
            style={styles.button}
            color={NewColors.red}
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
      {/* color del titulo blanco */}
      <Card.Title
        titleStyle={{ color: Colors.white }}
        title={title}
        style={{ backgroundColor: NewColors.red }}
      />
      <Card.Content style={styles.content}>
        <Text>Presupuesto: ${presupuesto}</Text>
        <Text>{content}</Text>
        <Card.Cover style={styles.image} source={showImage()} />
      </Card.Content>
      <ButtonsTrue button={on} />
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    marginVertical: 10,
  },
  title: {
    color: Colors.white,
  },

  content: {
    width: "100%",
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: "80%",
    height: 200,
    borderRadius: 10,
    marginHorizontal: 10,
    borderWidth: 4,
    borderColor: "#fff",
    backgroundColor: "#fff",
    resizeMode: "stretch",
  },
  button: {
    marginHorizontal: 10,
    width: "40%",
    color: "#fff",
  },
  containerButton: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
});

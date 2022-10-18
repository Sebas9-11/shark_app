import { ScrollView, Text, StyleSheet } from "react-native";
import React from "react";
import Cards from "../../../components/Cards";

export default function GroupsView() {
  return (
    <ScrollView style={styles.container}>
      <Cards
        on={true}
        title={"Grupo 1"}
        content={"Descripcion"}
        uri="https://stickerly.pstatic.net/sticker_pack/5ZvXoQflxj8USNp5GQwxXA/6PZIYH/2/04ee48ce-275c-4394-8ac2-986c0fb2ece5.png"
      />
      <Cards
        on={true}
        title={"Grupo 2"}
        content={"Descripcion"}
        uri="https://i.pinimg.com/474x/b4/be/55/b4be552578559dfbe64ca148d87c2f56.jpg"
      />
      <Cards
        on={true}
        title={"Grupo 3"}
        content={"Descripcion"}
        uri="https://i.pinimg.com/originals/44/60/c3/4460c37f543ce2bb08c8e5cd9ab7d67a.png"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    borderRadius: 6,
    marginVertical: 10,
  },
  scroll: {
    width: "100%",
    paddingHorizontal: 10,
  },
  button: {
    width: "100%",
    marginVertical: 10,
    color: "#fff",
  },
  card: {
    width: "100%",
    marginVertical: 10,
  },
});

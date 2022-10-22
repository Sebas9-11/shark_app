import { ScrollView, Alert, StyleSheet } from "react-native";
import React from "react";
import Cards from "../../../components/Cards";
import ModalView from "../../../components/ModalView";
import { SnackAlert } from "../../../components/SnackAlert";

export default function GroupsView() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [nameGroup, setNameGroup] = React.useState("");
  const [content, setContent] = React.useState("");
  const [uri, setUri] = React.useState("");
  const showModal = (name, content, image) => {
    setModalVisible(true);
    setNameGroup(name);
    setContent(content);
    setUri(image);
  };

  const hidenModal = () => {
    setModalVisible(false);
  };

  const [cards, setCards] = React.useState([
    {
      title: "Grupo 1",
      content: "Descripcion del grupo 1",
      uri: "https://picsum.photos/100",
      on: true,
      presupuesto: 1000,
    },
    {
      title: "Grupo 2",
      content: "Descripcion del grupo 2",
      uri: "https://picsum.photos/700",
      on: true,
      presupuesto: 1000,
    },
    {
      title: "Grupo 3",
      content: "Descripcion del grupo 3",
      uri: "https://picsum.photos/300",
      on: true,
      presupuesto: 1000,
    },
  ]);

  const deleteCard = (index) => {
    const newCards = cards.filter((card, i) => i !== index);
    setCards(newCards);
  };

  const sendMoney = () => {
    Alert.alert("Excelente", "aportaste a este grupo");
    hidenModal();
  };

  return (
    <ScrollView style={styles.container}>
      {cards.map((card, index) => (
        <Cards
          key={index}
          title={card.title}
          presupuesto={card.presupuesto}
          content={card.content}
          uri={card.uri}
          on={card.on}
          onPressButton1={() => showModal(card.title, card.content)}
          onpressButton2={() => deleteCard(index)}
        />
      ))}
      <ModalView
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
        hidenModal={hidenModal}
        sendMoney={sendMoney}
        nameGroup={nameGroup}
        description={content}
        uri={uri}
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

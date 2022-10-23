import { ScrollView, Alert, StyleSheet, Text } from "react-native";
import React, { useRef } from "react";
import Cards from "../../../components/Cards";
import ModalView from "../../../components/ModalView";
import { useGroups } from ".././hooks";
import { SnackAlert } from "../../../components/SnackAlert";

export default function GroupsView() {
  const [ modalVisible, setModalVisible] = React.useState(false);
  const [ groups, setGroups, loading, error ] = useGroups();

  const actualGroup = useRef(null);

  const showModal = (group) => {
    actualGroup.current = group;
    setModalVisible(true);
  };

  const hidenModal = () => {
    setModalVisible(false);
  };

  const deleteCard = (index) => {
    const newCards = groups.filter((card, i) => i !== index);
    setGroups(newCards);
  };

  
  if (loading) {
    return <Text> Cargando...</Text>
  } else if (error) {
    return <Text> {error} </Text>
  } 
  

  return (
    <ScrollView style={styles.container}>
      {
        groups.map((card, index) => (
          <Cards
            key={`card-${index+1}`}
            title={card.group}
            presupuesto={card.budget}
            content={card.desc}
            uri={card.image}
            on
            onPressButton1={() => showModal(card)}
            onpressButton2={() => deleteCard(index)}
          />
        ))
      }
      {
        modalVisible && <ModalView
        hidenModal={hidenModal}
        group={actualGroup.current}
        />
      }
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

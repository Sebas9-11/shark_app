import { ScrollView, View, StyleSheet, Text } from "react-native";
import React, { useRef } from "react";
import Cards from "../../../components/Cards";
import ModalView from "../../../components/ModalView";
import { useGroups } from ".././hooks";
import { Searchbar } from "react-native-paper";

export default function GroupsView() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [groups, setGroups, loading, error, filterGroups] = useGroups();

  function searchByName(text) {
    if (text === "") {
      setGroups(filterGroups.current);
    } else {
      const newData = groups.filter(function (item) {
        const itemData = item.group.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setGroups(newData);
    }
  }

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
    return <Text> Cargando...</Text>;
  } else if (error) {
    return <Text> {error} </Text>;
  }

  return (
    <View style={styles.firtContainer}>
      <Searchbar
        placeholder="Buscar por nombre"
        onChangeText={(text) => searchByName(text)}
        style={styles.searchBar}
      />
      <ScrollView style={styles.container}>
        {groups.map((card, index) => (
          <Cards
            key={`card-${index + 1}`}
            title={card.group}
            presupuesto={card.budget}
            content={card.desc}
            uri={card.image}
            on
            onPressButton1={() => showModal(card)}
            onpressButton2={() => deleteCard(index)}
          />
        ))}
        {modalVisible && (
          <ModalView hidenModal={hidenModal} group={actualGroup.current} />
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  firtContainer: {
    paddingBottom: 50,
  },
  container: {
    width: "100%",
    padding: 10,
    borderRadius: 6,
    marginVertical: 10,
  },
  searchBar: {
    margin: 10,
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

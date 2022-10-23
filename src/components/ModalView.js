import * as React from "react";
import { Modal, StyleSheet, Text, View, Alert } from "react-native";
import { SnackAlert } from "../components/SnackAlert";
import { firebase } from "../services/firebase";
import { Buttons } from "./Buttons";
import { Inputs } from "./Inputs";


export default function ModalView({ group, hidenModal }) {
  const [amount, setAmount] = React.useState(0);
  const actualGroup = React.useRef(group);
  
  const sendMoney = async () => {
    try {
      const money = parseFloat(amount) + parseFloat(actualGroup.current.collection);
      await firebase.sendMoney(actualGroup.current.id, money);
      // SnackAlert("Dinero enviado");
      hidenModal();
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  
  const requestClose = () => {
    Alert.alert("Modal has been closed.");
    setModalVisible(!modalVisible);
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        onRequestClose={requestClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{actualGroup.current?.group}</Text>
            <Text style={styles.modalText}>{actualGroup.current?.desc}</Text>
            <Inputs
              placeholder="Cantidad"
              type="numeric"
              onChangeText={(text) => setAmount(text)}
            />
            <View
              style={{
                flexDirection: "row",
                width: "50%",
              }}
            >
              <Buttons title="Enviar" onPress={sendMoney} color={"black"} />
              <Buttons title="Cancelar" onPress={hidenModal} color={"black"} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

import * as React from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { Buttons } from "./Buttons";
import { Inputs } from "./Inputs";

export default function ModalView({
  visible,
  onRequestClose,
  hidenModal,
  sendMoney,
  nameGroup,
  description,
}) {
  const [money, setMoney] = React.useState(0);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onRequestClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{nameGroup}</Text>
            <Text style={styles.modalText}>{description}</Text>
            <Inputs placeholder="Cantidad" type="numeric" />
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

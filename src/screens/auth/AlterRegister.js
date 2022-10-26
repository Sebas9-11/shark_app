import {
  View,
  TextInput,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Inputs, TextArea, Buttons } from "../../components";
import { GlobalStyles, Colors, NewColors } from "../../constants";
import Divider from "react-native-divider";
import { firebase } from "../../services/firebase";
import { useRef, useState } from "react";
import img from "../../../assets/group.png";
import { pickImage, upload } from "./utils/images";
import { useNavigation } from "@react-navigation/native";

export default function AlterRegister() {
  const navigation = useNavigation();
  const [image, setImage] = useState(img);
  const participants = useRef([]);
  const toUpload = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [newGroup, setNewGroup] = useState({
    image: "",
    judges: [],
    group: "",
    desc: "",
    budget: 0,
  });

  const Validation = async () => {
    let group = { ...newGroup, participants: participants.current };
    if (
      email === "" ||
      password === "" ||
      group.group === "" ||
      group.desc === "" ||
      group.budget === ""
    ) {
      Alert.alert("Digita los campos vacios");
    } else {
      try {
        if (toUpload.current) {
          const url = await upload(toUpload.current);
          group = { ...group, image: url };
        }

        const groupId = await firebase.signUp(email, password);
        await firebase.addDocument("users", { id: groupId, rol: "user" });
        group = { ...group, id: groupId };
        await firebase.addDocument("groups", group);
        navigation.navigate("Login");
      } catch (error) {
        Alert.alert(JSON.stringify(error));
      }
    }
  };

  const handlePress = async () => {
    const result = await pickImage();
    if (!result.cancelled) {
      setImage({ uri: result.uri });
      toUpload.current = result.uri;
    }
  };

  const handleParticipants = (number, value) => {
    let array = participants.current;
    // find the index of the element in the array of objects
    const index = array.findIndex(({ id }) => id === number);
    // if the index is not found, add the object to the array
    if (index === -1) {
      participants.current.push({ id: number, name: value });
    } else {
      // if the index is found, replace the object from the array and update the value
      participants.current[index] = { id: number, name: value };
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        enabled
      >
        <ScrollView style={{ width: "100%", paddingHorizontal: 10 }}>
          <Text style={GlobalStyles.titles}> Register </Text>
          <TouchableOpacity style={styles.buttonImage} onPress={handlePress}>
            <Image source={image} style={styles.image} />
          </TouchableOpacity>
          <Divider orientation="left" borderColor="black">
            Email and password
          </Divider>
          <Inputs
            placeholder="Correo"
            type="email-address"
            securety={false}
            onChangeText={(text) => setEmail(text)}
          />
          <Inputs
            placeholder="Contraseña"
            type="default"
            securety={true}
            onChangeText={(text) => setPassword(text)}
          />
          <Divider orientation="left" borderColor="black">
            Info Group
          </Divider>
          <Inputs
            placeholder="Name of group"
            value={newGroup.group}
            onChangeText={(group) => setNewGroup({ ...newGroup, group })}
          />
          <TextArea
            placeholder={"describe the objective of the group"}
            value={newGroup.desc}
            onChangeText={(desc) => setNewGroup({ ...newGroup, desc })}
          />
          <View style={styles.containerP}>
            <Text>Presupuesto: </Text>
            <TextInput
              style={styles.textInput}
              placeholder="$150.0"
              keyboardType="numeric"
              value={newGroup.budget}
              onChangeText={(budget) => setNewGroup({ ...newGroup, budget })}
            />
          </View>
          <Divider orientation="left" borderColor="black">
            Info Participants
          </Divider>
          <Inputs
            placeholder={"Name & Last Name"}
            // value={participants.participant1}
            onChangeText={(participant1) => handleParticipants(1, participant1)}
          />
          <Inputs
            placeholder={"Name & Last Name"}
            // value={participants.participant2}
            onChangeText={(participant2) => handleParticipants(2, participant2)}
          />
          <Inputs
            placeholder={"Name & Last Name"}
            // value={participants.participant3}
            onChangeText={(participant3) => handleParticipants(3, participant3)}
          />
          <Inputs
            placeholder={"Name & Last Name"}
            // value={participants.participant4}
            onChangeText={(participant4) => handleParticipants(4, participant4)}
          />
          <Buttons
            title="Register"
            color={NewColors.red}
            onPress={() => {
              Validation();
            }}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  textInput: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: Colors.dark,
    width: "30%",
    height: 40,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: Colors.light,
  },
  containerP: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
    borderRadius: 50,
  },
  buttonImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 16,
    borderWidth: 4,
    alignSelf: "center",
    borderColor: "#fff",
    backgroundColor: "#fff",
  },
});

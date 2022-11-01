import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Alert,
  BackHandler,
} from "react-native";
import { useJudge } from "./hooks/useJudge";
import shark from "../../../assets/logoShark.jpg";
import Divider from "react-native-divider";
import React from "react";
import { firebase } from "../../services/firebase";
import { useNavigation } from "@react-navigation/native";

export default function ProfileJudgesScreen() {
  const [judgeState, loading, error] = useJudge();
  const navigation = useNavigation();

  function back() {
    BackHandler.exitApp();
    firebase.signOut(navigation.navigate("Login"));
  }

  React.useEffect(() => {
    const backAction = () => {
      Alert.alert("Cuidado", "¿Deseas salir y cerrar sesion?", [
        {
          text: "NO",
          onPress: () => null,
          style: "cancel",
        },
        { text: "SI", onPress: () => back() },
      ]);
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  } else if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={shark} />
        <Text style={styles.name}>{judgeState.name}</Text>
        <Text style={styles.money}>
          <Text style={styles.budget}>Presupuesto: </Text>${judgeState.money}
        </Text>
      </View>
      <Divider borderColor="#000" color="#000" orientation="center">
        <Text style={styles.title}>Grupos Invertidos</Text>
      </Divider>
      <View style={styles.listContainer}>
        <FlatList
          style={styles.list}
          data={judgeState.investments}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.group}>
              <Text style={styles.groupName}>{item.name}</Text>
              <Text style={styles.groupMoney}>
                <Text style={styles.budget}>Invertido:</Text>${item.money}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  money: {
    fontSize: 20,
  },
  budget: {
    fontSize: 15,
    fontWeight: "bold",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  listContainer: {
    flex: 1,
    width: "90%",
    marginHorizontal: 20,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  group: {
    width: "100%",
    borderBottomWidth: 0.5,
    padding: 10,
    marginBottom: 10,
  },
  groupName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  groupDesc: {
    fontSize: 15,
  },
  groupMoney: {
    fontSize: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

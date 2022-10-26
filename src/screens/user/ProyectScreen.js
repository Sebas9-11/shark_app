import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  BackHandler,
  Alert,
} from "react-native";
import {
  ProyectHeader,
  ProyectDescription,
  ProyectParticipants,
} from "./components";
import { useProyect } from "./hooks/useProyect";
import React from "react";
import { firebase } from "../../services/firebase";
import { useNavigation } from "@react-navigation/native";

export default function ProyectScreen() {
  const [proyect, loading, error] = useProyect();
  const navigation = useNavigation();

  function back() {
    BackHandler.exitApp();
    firebase.signOut(navigation.navigate("Login"));
  }

  //comprobacion de que el correo esta verificado
  if (firebase.auth.currentUser.emailVerified === false) {
    Alert.alert(
      "Verifique su correo",
      "Para poder acceder a la aplicación debe verificar su correo",
      [
        {
          text: "OK",
          onPress: () => {
            firebase.signOut(navigation.navigate("Login"));
          },
        },
      ],
      { cancelable: false }
    );
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
    return <Text> Cargando...</Text>;
  } else if (error) {
    return <Text> {error} </Text>;
  }

  return (
    <View style={styles.pageContainer}>
      <ScrollView style={styles.scroll}>
        {proyect && (
          <View style={styles.container}>
            <ProyectHeader
              title={proyect.group}
              img={proyect.image}
              budget={proyect.budget}
            />
            <ProyectDescription description={proyect.desc} />
            <ProyectParticipants participants={proyect.participants} />
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  container: {
    width: "100%",
    padding: 10,
    borderRadius: 6,
    marginVertical: 10,
    alignItems: "center",
  },
  scroll: {
    width: "100%",
    paddingHorizontal: 10,
  },
});

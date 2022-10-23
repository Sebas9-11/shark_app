import { View, ScrollView, StyleSheet,Text } from "react-native";
import {
  ProyectHeader,
  ProyectDescription,
  ProyectParticipants,
} from "./components";
import { useProyect } from "./hooks/useProyect";
import React from "react";

export default function ProyectScreen() {
  const [proyect, loading, error] = useProyect();

  if (loading) {
    return <Text> Cargando...</Text>;
  } else if (error) {
    return <Text> {error} </Text>;
  }

  return (
    <View>
      <ScrollView style={styles.scroll}>
        {proyect && (
          <View style={styles.container}>
            <ProyectHeader title={proyect.group} img={proyect.image} />
            <ProyectDescription description={proyect.desc} />
            <ProyectParticipants participants={proyect.participants} />
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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

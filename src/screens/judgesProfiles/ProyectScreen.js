import { View, ScrollView, StyleSheet } from "react-native";
import { ProyectJudgeHeader, ProyectJudgeDescription } from "./components";
import { useJudgeProyect } from "./hooks/useProyect";
import React from "react";

export default function ProyectJudgesScreen() {
  const [proyect, image] = useJudgeProyect();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        {proyect && (
          <View style={styles.container}>
            <ProyectJudgeHeader
              title={proyect.nombre}
              img={image}
              money={proyect.money}
            />
            <ProyectJudgeDescription description={proyect.desc} />
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
  button: {
    width: "100%",
    marginVertical: 10,
    color: "#fff",
  },
});

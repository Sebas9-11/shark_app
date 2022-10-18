import { View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function JudgeItem({ aporte, nombre }) {
  return (
    <View style={styles.row}>
      <Ionicons name="person-circle" size={88} />
      <View style={styles.column}>
        <Text style={styles.name}>{nombre}</Text>
        <Text style={styles.money}>{`Aporte: $${aporte}`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  column: {
    flexGrow: 1,
    flexDirection: "column",
    marginLeft: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  money: {
    fontSize: 20,
  },
});

import { View, StyleSheet, FlatList, Text } from "react-native";
import React from "react";
import { JudgeItem } from "./components";
import { useJudges } from "./hooks/useJudges";
import Cards from "../../components/Cards";

export default function JudgesScreen() {
  const [judges] = useJudges();
  const itemBuilder = ({ item }) => {
    return (
      <Cards
        title={item.name}
        content={"Aporte: $" + item.money}
        uri={item.image}
      />
    );
    // return <JudgeItem aporte={item.money} nombre={item.name} />;
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerView}>
        <Text>Total Aportes: {}</Text>
        <FlatList data={judges} renderItem={itemBuilder} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerView: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

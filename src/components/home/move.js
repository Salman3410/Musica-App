import { StyleSheet, Text, View } from "react-native";
import Header from "../common/header";
import MoveCard from "./moveCard";

export default function Move() {
  return (
    <View style={styles.container}>
      <Header title="Move of the Day" />
      <MoveCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});

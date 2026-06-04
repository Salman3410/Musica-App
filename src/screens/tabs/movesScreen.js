import { StyleSheet, Text, View } from "react-native";
import Filters from "../../components/moves/filters";
import MoveList from "../../components/moves/moveList";

export default function MovesScreen() {
  return (
    <View style={styles.container}>
      <Filters />
      <MoveList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
});

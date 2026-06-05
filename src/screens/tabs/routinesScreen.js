import { StyleSheet, Text, View } from "react-native";
import DifficultyFilter from "../../components/moves/difficultyFilter";
import SearchBar from "../../components/common/searchBar";
import ResultCount from "../../components/moves/resultCount";
import RoutineList from "../../components/routine/routineList";

export default function RoutinesScreen() {
  return (
    <View style={styles.container}>
      <SearchBar />
      <DifficultyFilter />
      <ResultCount count={4} title="routines" />
      <RoutineList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    flex: 1,
  },
});

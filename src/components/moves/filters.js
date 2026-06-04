import { StyleSheet, Text, View } from "react-native";
import SearchBar from "./searchBar";
import PostitionFilter from "./postitionFilter";
import DifficultyFilter from "./difficultyFilter";
import ResultCount from "./resultCount";

export default function Filters() {
  return (
    <View>
      <SearchBar />
      <PostitionFilter />
      <DifficultyFilter />
      <ResultCount />
    </View>
  );
}

const styles = StyleSheet.create({});

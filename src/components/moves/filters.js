import { StyleSheet, Text, View } from "react-native";
import PostitionFilter from "./postitionFilter";
import DifficultyFilter from "./difficultyFilter";
import ResultCount from "./resultCount";
import SearchBar from "../common/searchBar";

export default function Filters() {
  return (
    <View>
      <SearchBar />
      <PostitionFilter />
      <DifficultyFilter />
      <ResultCount count={8} title="moves" />
    </View>
  );
}

const styles = StyleSheet.create({});

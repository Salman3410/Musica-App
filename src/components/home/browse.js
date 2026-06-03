import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../common/header";

const OPTIONS = [
  {
    id: 1,
    title: "Open",
    moves: "156",
  },
  {
    id: 2,
    title: "Closed",
    moves: "38",
  },
  {
    id: 3,
    title: "Closed",
    moves: "38",
  },
];

export default function Browse() {
  return (
    <View style={styles.container}>
      <Header title="Browse by position" subTitle="See all" />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {OPTIONS.map((item) => (
          <View style={styles.box} key={item.id}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.movesCount}>{item.moves} moves</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  scrollContainer: {
    paddingHorizontal: 16,
    gap: 12,
  },
  box: {
    backgroundColor: "#eee",
    width: 128,
    height: 88,
    justifyContent: "center",
    borderRadius: 12,
    elevation: 1,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  movesCount: {
    color: "#666",
    marginTop: 6,
  },
});

import { ScrollView, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons/";
import NotFound from "./notFound";
import MoveCard from "../home/moveCard";
import { useState } from "react";

export default function MoveList() {
  const [moves, setMoves] = useState([]);
  return (
    <ScrollView
      style={styles.scrollStyle}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {moves.length > 0 ? (
        moves.map((move, index) => <MoveCard key={index} data={move} />)
      ) : (
        <NotFound
          title="No Moves Found"
          tagline="This move isn't in the library yet."
          buttonText="Create your own move"
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: "100%",
  },
  scrollStyle: {
    flex: 1,
  },
});

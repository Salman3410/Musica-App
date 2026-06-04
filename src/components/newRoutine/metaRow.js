import { StyleSheet, Text, View } from "react-native";
import { Octicons, Ionicons } from "@expo/vector-icons/";

export default function MetaRow() {
  return (
    <View style={styles.container}>
      <View style={styles.moves}>
        <Text style={styles.movesText}>0 moves</Text>
      </View>
      <Octicons name="dot-fill" size={6} color="black" />

      <View style={styles.moves}>
        <Text style={styles.movesText}>0 beats</Text>
      </View>
      <Octicons name="dot-fill" size={6} color="black" />

      <View style={styles.beginner}>
        <Text style={styles.beginnerText}>Beginner</Text>
      </View>
      <Octicons name="dot-fill" size={6} color="black" />

      <View style={styles.song}>
        <Ionicons name="musical-note-sharp" size={12} color="#fff" />
        <Text style={styles.songText}>El Cantante</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
  },
  moves: {},
  movesText: {},
  beginner: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  beginnerText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#fff",
  },
  song: {
    backgroundColor: "#7dbafc",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#007AFF",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  songText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#fff",
  },
});

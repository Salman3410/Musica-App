import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Buttons() {
  return (
    <View style={styles.button}>
      <TouchableOpacity style={styles.newRoutineButton} activeOpacity={0.8}>
        <Ionicons name="add-circle-outline" size={24} color="#fff" />
        <Text style={styles.routineText}>New Routine</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.moveButton} activeOpacity={0.8}>
        <Ionicons name="book-outline" size={24} color="black" />
        <Text style={styles.movesText}>Moves</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  newRoutineButton: {
    width: 160,
    height: 92,
    borderRadius: 14,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    paddingHorizontal: 15,
    elevation: 2,
  },
  routineText: {
    color: "#fff",
    fontWeight: "bold",
  },
  moveButton: {
    width: 160,
    height: 92,
    borderRadius: 14,
    backgroundColor: "#ccc",
    justifyContent: "center",
    paddingHorizontal: 15,
    elevation: 2,
  },
  movesText: {
    fontWeight: "bold",
  },
});

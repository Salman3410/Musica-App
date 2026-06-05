import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";

export default function RoutineCard() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Saturday Night Routine</Text>
        <View style={styles.row}>
          <Text style={styles.moveCount}>8 moves</Text>
          <Text style={styles.beatsCount}>48 beats</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.difficulty}>Intermediate</Text>
          <Text style={styles.edit}>Edited 2h ago</Text>
        </View>
      </View>

      <View style={styles.iconRow}>
        <TouchableOpacity activeOpacity={0.8} style={styles.playButton}>
          <FontAwesome name="play-circle" size={40} color="#007AFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.editIcon} activeOpacity={0.8}>
          <Feather name="edit-2" size={22} color="#7A6558" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginTop: 5,
  },
  moveCount: {
    color: "#7A6558",
  },
  beatsCount: {
    color: "#7A6558",
  },
  difficulty: {
    backgroundColor: "#FEF0DA",
    color: "#854F0B",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    fontSize: 15,
    fontWeight: "600",
  },
  edit: {
    color: "#7A6558",
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  editIcon: {
    width: 35,
    height: 35,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderColor: "#ccc",
  },
  playButton: {
    elevation: 2,
  },
});

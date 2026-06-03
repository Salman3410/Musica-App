import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../common/header";

export default function Routines() {
  return (
    <View>
      <Header title="Recent Routines" subTitle="See all" />

      <View style={styles.routineContainer}>
        <View style={styles.iconMark}>
          <Ionicons name="book-outline" size={24} color="#fff" />
        </View>
        <View style={styles.textBox}>
          <Text style={styles.text}>No routines yet</Text>
          <Text style={styles.routineTagline}>
            Build your first choreography to get started
          </Text>
        </View>
        <TouchableOpacity style={styles.routineButton} activeOpacity={0.8}>
          <Ionicons name="add-circle-outline" size={20} color="#fff" />
          <Text style={styles.btnText}>New Routine</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  seeButton: {
    color: "#007AFF",
    fontWeight: "500",
  },
  routineContainer: {
    alignItems: "center",
    alignSelf: "center",
    width: 328,
    height: 208,
    borderRadius: 14,
    justifyContent: "center",
    backgroundColor: "#eee",
    elevation: 1,
    marginTop: 10,
  },
  iconMark: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ccc",
    borderRadius: 20,
  },
  textBox: {
    marginTop: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
  routineTagline: {
    fontSize: 14,
    color: "#888",
  },
  routineButton: {
    flexDirection: "row",
    marginTop: 10,
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  btnText: {
    marginLeft: 5,
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
  },
});

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons/";

export default function NotFound() {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <AntDesign name="question" size={24} color="#7A6558" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>No Moves Found</Text>
        <Text style={styles.tagline}>This move isn't in library yet.</Text>
      </View>
      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Entypo name="plus" size={18} color="#007AFF" />
        <Text style={styles.buttonText}>Create your own move</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.footerText}>or adjust your filters</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 40,
    justifyContent: "center",
  },
  icon: {
    borderWidth: 1,
    borderRadius: 30,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "dashed",
    borderColor: "#7A6558",
  },
  textContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  tagline: {
    color: "#7A6558",
    fontSize: 15,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#007AFF",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "#007AFF",
    marginLeft: 5,
  },
  footer: {
    marginTop: 10,
  },
  footerText: {
    color: "#7A6558",
    fontSize: 15,
  },
});

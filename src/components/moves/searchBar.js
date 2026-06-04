import { StyleSheet, Text, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Feather name="search" size={20} color="#ccc" />
      <TextInput
        style={styles.input}
        placeholder="Search 1,000+ moves or shortcuts..."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    width: "100%",
    height: 52,
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 30,
    paddingHorizontal: 15,
  },
  input: {
    fontSize: 15,
  },
});

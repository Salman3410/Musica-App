import { StyleSheet, Text, View } from "react-native";

export default function ListHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.letter}>N</Text>
      <View>
        <Text style={styles.title}>None</Text>
        <Text style={styles.subTitle}>No partner connection at all</Text>
      </View>
      <Text style={styles.variants}>3 variants</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 10,
  },
  letter: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#7A6558",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subTitle: {
    color: "#7A6558",
  },
  variants: {
    color: "#C4A899",
  },
});

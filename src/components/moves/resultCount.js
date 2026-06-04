import { StyleSheet, Text, View } from "react-native";

export default function ResultCount() {
  return (
    <View style={styles.container}>
      <Text style={styles.count}>Showing 8 moves</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  count: {
    color: "#7A6558",
  },
});

import { StyleSheet, Text, View } from "react-native";

export default function Heading() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Every hold and every connection. The vocabulary behind every move
        shortcut in Salsivo.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 5,
  },
  heading: {
    fontSize: 15,
    color: "#7A6558",
  },
});

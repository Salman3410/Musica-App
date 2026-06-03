import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Header({ title, subTitle }) {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.seeButton}>{subTitle}</Text>
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
});

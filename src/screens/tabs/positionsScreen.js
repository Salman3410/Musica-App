import { StyleSheet, Text, View } from "react-native";
import Heading from "../../components/position/heading";
import PositionFilter from "../../components/moves/postitionFilter";
import Sections from "../../components/position/sections";

export default function PositionsScreen() {
  return (
    <View style={styles.container}>
      <Heading />
      <PositionFilter />
      <Sections />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    flex: 1,
  },
});

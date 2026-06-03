import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Buttons from "../../components/home/buttons";
import Body from "../../components/home/body";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Buttons />
      <Body />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: "#fff",
  },
});

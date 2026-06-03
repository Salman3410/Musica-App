import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Routines from "./routines";
import Move from "./move";
import Browse from "./browse";

export default function Body() {
  return (
    <View style={styles.container}>
      <Routines />
      <Move />
      <Browse />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
});

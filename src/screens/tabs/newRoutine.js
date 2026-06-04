import { StyleSheet, Text, View } from "react-native";
import Nrheader from "../../components/newRoutine/nrheader";

export default function NewRoutine() {
  return (
    <View style={styles.container}>
      <Nrheader />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
});

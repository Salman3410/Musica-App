import { StyleSheet, Text, View } from "react-native";
import ListHeader from "./listHeader";
import ListOptions from "./listOptions";

export default function NoneList() {
  return (
    <View>
      <ListHeader />
      <ListOptions />
    </View>
  );
}

const styles = StyleSheet.create({});

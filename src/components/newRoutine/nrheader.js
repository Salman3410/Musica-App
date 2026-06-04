import { StyleSheet, Text, View } from "react-native";
import TitleRow from "./titleRow";
import MetaRow from "./metaRow";

export default function Nrheader() {
  return (
    <View>
      <TitleRow />
      <MetaRow />
    </View>
  );
}

const styles = StyleSheet.create({});

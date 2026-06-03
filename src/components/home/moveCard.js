import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

export default function MoveCard() {
  return (
    <View style={styles.container}>
      <View>
        <Entypo name="dot-single" size={24} color="black" />
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>L.LHK CBL OT RST</Text>
        <View style={styles.row}>
          <Text style={styles.tagline} numberOfLines={2}>
            Lead Left Hook Turn Crossbody Lead Right Spot Turn
          </Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Feather name="eye" size={20} color="#888" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: 328,
    height: 110,
    backgroundColor: "#eee",
    paddingHorizontal: 10,
    borderRadius: 14,
    alignSelf: "center",
    marginTop: 10,
    elevation: 1,
  },
  card: {
    justifyContent: "space-between",
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  tagline: {
    color: "#888",
    flex: 1,
    marginRight: 8,
  },
});

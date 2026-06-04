import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const POSITIONS = [
  { id: 1, title: "All" },
  { id: 2, title: "Beginner" },
  { id: 3, title: "Intermediate" },
  { id: 4, title: "Advanced" },
];

export default function DifficultyFilter() {
  const [active, setActive] = useState("All");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Difficulty</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {POSITIONS.map((item) => {
          const isActive = active === item.title;

          return (
            <TouchableOpacity
              style={[
                styles.button,
                isActive ? styles.activeButton : styles.inactiveButton,
              ]}
              key={item.id}
              activeOpacity={0.8}
              onPress={() => setActive(item.title)}
            >
              <Text style={isActive ? styles.activeText : styles.inactiveText}>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  title: {
    color: "#7A6558",
    fontWeight: "500",
  },
  scrollContainer: {
    paddingVertical: 5,
  },
  button: {
    marginTop: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: "center",
    borderRadius: 25,
    marginRight: 10,
  },
  activeButton: {
    backgroundColor: "#007AFF",
  },
  inactiveButton: {
    backgroundColor: "#F2F2F7",
  },
  activeText: {
    color: "#fff",
    fontWeight: "600",
  },
  inactiveText: {
    color: "#7A6558",
  },
});

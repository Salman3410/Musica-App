import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ICON_MAP = {
  Salsivo: { active: "home", inactive: "home-outline" },
  Build: { active: "add-circle", inactive: "add-circle-outline" },
  Moves: { active: "book", inactive: "book-outline" },
  Routines: { active: "layers", inactive: "layers-outline" },
  Positions: { active: "body", inactive: "body-outline" },
};

export default function CustomTabBar({ navigation, state, descriptors }) {
  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          navigation.navigate(route.name);
        };

        const iconConfig = ICON_MAP[route.name] || {
          active: "help-circle",
          inactive: "help-cicrle-outline",
        };
        const iconName = isFocused ? iconConfig.active : iconConfig.inactive;
        const iconColor = isFocused ? "#007aff" : "#888";
        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.tabButton}
            activeOpacity={0.8}
          >
            <Ionicons name={iconName} size={22} color={iconColor} />
            <Text style={[styles.tabLabel, isFocused && styles.tabLabelActive]}>
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: "row",
    height: 60,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabLabel: {
    fontSize: 12,
    color: "#888",
  },
  tabLabelActive: {
    color: "#007aff",
    fontWeight: "bold",
  },
});

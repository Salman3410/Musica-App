import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/tabs/homeScreen";
import BuildsScreen from "../screens/tabs/buildsScreen";
import MovesScreen from "../screens/tabs/movesScreen";
import RoutinesScreen from "../screens/tabs/routinesScreen";
import PositionsScreen from "../screens/tabs/positionsScreen";
import CustomTabBar from "../components/tabBar/customTabBar";
import { TouchableOpacity, Alert, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tabs.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <Tabs.Screen name="Salsivo" component={HomeScreen} />
      <Tabs.Screen name="Build" component={BuildsScreen} />

      <Tabs.Screen
        name="Moves"
        component={MovesScreen}
        options={{
          headerTitle: "Move Browser",
          headerRight: () => (
            <TouchableOpacity
              onPress={() =>
                Alert.alert("Add Move", "Create a new movement profile")
              }
              style={styles.headerButton}
              activeOpacity={0.7}
            >
              <Ionicons name="add" size={24} color="#007aff" />
            </TouchableOpacity>
          ),
        }}
      />

      <Tabs.Screen
        name="Routines"
        component={RoutinesScreen}
        options={{
          headerTitle: "Routines",

          headerRight: () => (
            <TouchableOpacity
              onPress={() =>
                Alert.alert("Settings", "Open routine configurations")
              }
              style={styles.headerButton}
              activeOpacity={0.7}
            >
              <Ionicons name="add-outline" size={24} color="#007aff" />
            </TouchableOpacity>
          ),
        }}
      />

      <Tabs.Screen name="Positions" component={PositionsScreen} />
    </Tabs.Navigator>
  );
}

const styles = StyleSheet.create({
  headerButton: {
    paddingHorizontal: 16,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/onBoard/welcomeScreen";
import TabNavigator from "./tabNavigator";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={TabNavigator} />
      {/* <Stack.Screen name="Welcome" component={WelcomeScreen} /> */}
    </Stack.Navigator>
  );
}

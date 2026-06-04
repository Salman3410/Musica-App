import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./tabNavigator";
import NewRoutine from "../screens/tabs/newRoutine";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={TabNavigator} />
      <Stack.Screen name="NewRoutine" component={NewRoutine} />
    </Stack.Navigator>
  );
}

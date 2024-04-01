import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SavedTimers from "../screens/savedTimers";
import ActiveTimers from "../screens/activeTimers";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CustomTabBar } from "../components/tabBar";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
        <Tab.Screen
          name="Your Timers"
          component={SavedTimers}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="content-save-outline"
                size={40}
                color={color}
              />
            ),
            tabBarLabel: () => null,
          }}
        />
        <Tab.Screen
          name="Active Timers"
          component={ActiveTimers}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="timer-outline"
                size={40}
                color={color}
              />
            ),
            tabBarLabel: () => null,
          }}
        />
        {(props) => <ActiveTimers {...props} navigation={props.navigation} />}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

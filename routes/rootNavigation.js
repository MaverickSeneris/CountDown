import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SavedTimers from '../screens/savedTimers';
import ActiveTimers from '../screens/activeTimers';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="presets" component={SavedTimers} options={{headerShown: false}} />
        <Tab.Screen name="active" component={ActiveTimers} options={{headerShown: false}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
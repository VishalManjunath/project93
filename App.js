import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import DailyRoutine from './screens/DailyRoutine';
import ImportantDays from './screens/ImportantDays';
import DeleteReminders from './screens/DeleteReminders';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  render() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="HomeScreen" component={HomeScreen} />
          <Tab.Screen name="Daily Routine" component={DailyRoutine} />
          <Tab.Screen name="Important Days" component={ImportantDays} />
          <Tab.Screen name="Delete Reminders" component={DeleteReminders} />
        </Tab.Navigator>
      </NavigationContainer>
  );
  }
}

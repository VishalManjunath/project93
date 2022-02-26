import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ToDoScreen from './screens/ToDo'




export default class App extends React.Component {
  render() {
  return (
   
      <ToDoScreen />
  );
  }
}
{/**<NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="HomeScreen" component={HomeScreen} />
          <Tab.Screen name="Daily Routine" component={DailyRoutine} />
          <Tab.Screen name="Important Days" component={ImportantDays} />
        </Tab.Navigator>
      </NavigationContainer> */} 
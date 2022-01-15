import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
  return (
    <View>
      <Image source={require('../assets/logo.png')}></Image>
      <Text>On Time</Text>
      <TouchableOpacity onPress={this.props.navigation.navigate('./DailyRoutine')}>
        <Image source={require('../assets/DailyRoutine.png')}></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.props.navigation.navigate('./ImportantDays')}>
        <Image source={require('../assets/ImportantDays.png')}></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.props.navigation.navigate('./DeleteReminders')}>
        <Image source={require('../assets/DeleteReminders.png')}></Image>
      </TouchableOpacity>
    </View>
  );
  }
}
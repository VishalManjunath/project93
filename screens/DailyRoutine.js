import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import db from './config';

export default class DailyRoutine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      mode: date,
      show: false
    }
  }
   onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    this.setState({
      show: Platform.OS === 'ios',
      date: currentDate
    })
   
  };

   showMode = (currentMode) => {
     this.setState({
       show: true,
       mode: currentMode
     })
  };

   showDatepicker = () => {
     this.setState({
       mode: date
     })
  };

   showTimepicker = () => {
     this.setState({
       mode: time
     })
  };

  addReminder = () => {
    
  }
  
  render() {
  return (
    <View>
      <View>

        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      
      <View>
        <TouchableOpacity onPress={}>
          <Text>Add Reminder</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  }
}

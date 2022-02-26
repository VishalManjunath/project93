import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Task from '../Componenets/Task';

export default function Todo () {
  
  return (
    <View style={styles.container}>
      {/**tasksContainer*/}
      <View style={styles.taskContainer}>
        <Text style={styles.sectionTitle}>Daily To Do's</Text>
      </View>
      <View style = {styles.item}>
        <Task text={'Task 1'}/>
      </View>
    </View>
  );
  
}

const styles= StyleSheet.create( {
  container:{
      flex: 1,
      backgroundColor: '#78ffff',
  },
  taskContainer:{
      paddingTop: 80,
      paddingHorizontal: 20,
  },
  sectionTitle:{
      fontSize: 24,
      fontWeight: 'bold',
  },
  item:{

  }
})
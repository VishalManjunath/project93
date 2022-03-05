import React,{useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';

import Task from '../Componenets/Task';

export default function Todo () {
  
  const [task,setTask] = useState()
  const handleAddTask = () => {

  }

  return (
    <View style={styles.container}>
      {/**tasksContainer*/}
      <View style={styles.taskContainer}>
        <Text style={styles.sectionTitle}>Daily To Do's</Text>
      
      <View style = {styles.item}>
        <Task text={'Task 1'} />
        <Task text={'Task 2'} />
      </View>
    </View>
    <KeyboardAvoidingView 
    behaviour={Platform.OS==='IOS' ? 'padding':'height'} 
    style={styles.writeTaskContainer}
    >
      <TextInput 
      placeholder={'Write a text'}
      style={styles.input}
      value={task}
      onChangeText={text => setTask(text)} 
      />
      <TouchableOpacity
      
      >
        <View style={styles.addContainer}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
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
    marginTop: 30,
  },
  writeTaskContainer:{
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#7524b7',
    borderWidth: 1,
    width: 250,
  },
  addContainer:{
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#7524b7',
    borderWidth: 1,
  },
  addText:{

  },
})
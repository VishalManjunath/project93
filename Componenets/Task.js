import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Task = (props)=>{
    return (
       
          <View style={styles.item}>
              <View style={styles.itemLeft}>
                  <TouchableOpacity styles={styles.square}>
                  
                  </TouchableOpacity>
                  <Text style={styles.itemText}>{props.text}</Text>

              </View>
              <View style={styles.circular}></View>
            
          </View>
        
      );
}

const styles=StyleSheet.create ({
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square:{
        width: 24,
        height: 24,
        backgroundColor: '#ffe100',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    item:{
        backgroundColor: '#4dff00',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    itemText:{
        maxWidth: '80%',
    },
    circular:{
        width: 12,
        height: 12,
        borderColor: '#7524b7',
        borderWidth: 2,
        borderRadius: 5,
    },
});

export default Task;
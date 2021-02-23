import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Switch, TextInput, Button } from 'react-native';

export default function App() {
  // Switch Variables.
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  // Text Inputs Variables.
  const [value, onChangeText] = useState('');

  //Text Array
  const [elements, setElements] = useState([]);

  const addElement = () => {
    setElements(prev => {
      if(prev.length > 8){
        alert('Solo puedes agregar 8 elementos')
        return[...prev]
      }
      else{ return[...prev, value] }
    })
  }

  const removeElement = () => {
    setElements(prev => {
      prev.pop()
      return [...prev]
    });
  }

  const getElements = () => {
    return elements.map(element => {
      return <Text style={isEnabled ? styles.red : styles.blue}>{element}</Text>
    })
  }
  

  return (
    <View style={styles.container}>
      {getElements()}
      <br/>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <br/>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      <br/>
      <Button
        title="Agregar Elemento"  
        onPress = {() => addElement()}
      />
      <br/>
      <Button
        title="Eliminar Elemento"  
        onPress = {() => removeElement()}
      />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  red: {
    color: 'red'
  },
  blue: {
    color: 'blue'
  }
});

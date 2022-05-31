import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const Choices = ({ text, onPress, isSelected}) => {
  
  return (
    <Pressable onPress={onPress} style={[styles.choice, {backgroundColor: isSelected ? 'lightgray' : 'white'}]}>
       <Text style={[styles.text, {color: isSelected ? 'lightgray' : 'black'}]}>{text}</Text>
    </Pressable>
  )
}

export default Choices

const styles = StyleSheet.create({
  choice: {
    borderRadius: 10,
    borderWidth: 1,
    borderBottomWidth: 4,
    borderColor: 'lightgray',
    padding: 10,
    paddingHorizontal: 15,
    marginRight: 5,
  },
  text: {

  }
})
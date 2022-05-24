import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const Choices = ({ text, onSelect}) => {
  
  const onPress = () => {
    onPress(text);
  }
  return (
    <Pressable
      onPress={onSelect}
      style={styles.choice}
    >
      <Text>{text}</Text>
    </Pressable>
  )
}

export default Choices

const styles = StyleSheet.create({
  choice: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 10,
  }
})
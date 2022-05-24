import {  Text, View, Image } from 'react-native'
import React, {useState} from 'react';
import Button from '../Button/Button';
import {styles} from './styles'

const FillBlanks = ({ question, onCorrect, onWrong }) => {
  const [selected, setSelected] = useState(null);
  // place image center of screen
  return (
    <>
      <Text style={styles.title}>Complete the sentence</Text>
      <Image
        style={styles.image}
        source={require('../../../assets/images/learn.png')}
      />
      <Button text='Check' onPress={null} disabled={!selected} />
    </>
  )
}

export default FillBlanks


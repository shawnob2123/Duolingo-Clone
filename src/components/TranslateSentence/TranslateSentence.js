import { StyleSheet, Text, View, Pressable, Image, TextInput } from 'react-native'
import React, { useState} from 'react';
import Button from '../Button/Button';
import { styles } from './styles';
import Choices from './Choices';
import AntDesign from '@expo/vector-icons/AntDesign';

const TranslateSentence = ({ question, onCorrect, onWrong }) => {
  const [input, setInput] = useState('');

  return (
    <>
      <Text style={styles.title}>Translate this sentence</Text>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/mascot.png')}
        />
        <View style={styles.sentenceContainer}>
          <AntDesign name='sound' size={22} color='#2690f2' />
          <Text style={styles.sentence}>{question.text}</Text>
        </View>
      </View>
      <TextInput
        value={input}
        style={styles.input}

      />
      {/* Choices */}
      <Text>Select your answers below</Text>
      <View style={styles.choicesRow}>
        {question.options.map((choice, index) => (
          <Choices
            key={index}
            text={choice}
            onSelect={() => { 
              if (choice === question.answer) {
                onCorrect();
              } else {
                onWrong();
              }
            }}
          />
        ))}
        </View>
      <Button
        text='Check'
        onPress={null}
        disabled={!input}
      />
    </>
  )
}

export default TranslateSentence

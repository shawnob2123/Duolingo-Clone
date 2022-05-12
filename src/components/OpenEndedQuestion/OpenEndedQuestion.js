import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const OpenEndedQuestion = ({ question, onCorrect, onWrong }) => {
  const [input, setInput] = useState('');

  const onButtonPressed = () => {
    if (question.answer.toLowerCase().trim() === input.toLowerCase().trim()) {
      //trim to cut of extra spaces
      onCorrect();
    } else {
      onWrong();
    }
    setInput('');
  };

  return (
    <>
      <Text style={styles.title}>Translate this sentence</Text>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/mascot.png')}
        />
        <View style={styles.sentenceContainer}>
          <Text style={styles.sentence}>{question.text}</Text>
        </View>
      </View>

      <TextInput
        value={input}
        onChangeText={setInput}
        style={styles.input}
        placeholder='Type in English'
        textAlignVertical='top'
        multiline
        onSubmitEditing={Keyboard.dismiss}
        numberOfLines={4}
      />

      <Button text='Check' onPress={onButtonPressed} disabled={input === ''} />
    </>
  );
};
OpenEndedQuestion.PropTypes = {
  question: PropTypes.object,
  onCorrect: PropTypes.func,
  onWrong: PropTypes.func,
};
OpenEndedQuestion.defaultProps = {
  question: {},
  onCorrect: () => {},
  onWrong: () => {},
};

export default OpenEndedQuestion;

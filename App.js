import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { globalStyles } from './styles';
import ImageMCQuestion from './src/components/ImageMCQuestion/ImageMCQuestion';
import questions from './data/imageMultipleChoiceQuestions';

export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex]
  );

  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert('You have finished the quiz');
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
  const onWrong = () => {
    Alert.alert('Incorrecto', 'Inténtalo de nuevo');
  };

  return (
    <View style={globalStyles.root}>
      <ImageMCQuestion
        question={currentQuestion} 
        onCorrect={onCorrect}
        onWrong={onWrong}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { globalStyles } from './styles';
import Header from './src/components/Header/Header';
import ImageMCQuestion from './src/components/ImageMCQuestion/ImageMCQuestion';

import OpenEndedQuestion from './src/components/OpenEndedQuestion/OpenEndedQuestion';
import questions from './data/allQuestions';


export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex]
  );

  const [lives, setLives] = useState(5);
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
    Alert.alert('Wrong answer');
    setLives(lives - 1);
    if (lives <= 1) {
      Alert.alert('You have run out of lives', 'Try Again', [{
        text: 'OK',
        onPress: () => { 
          setLives(5);
          setCurrentQuestionIndex(0);
        }
      }]);
    }
  };

  return (
    <View style={globalStyles.root}>
      <Header
        progress={(currentQuestionIndex) / questions.length}
        lives={lives}


      />
      {currentQuestion.type === 'IMAGE_MULTIPLE_CHOICE' && ( <ImageMCQuestion
        question={currentQuestion}
        onCorrect={onCorrect}
        onWrong={onWrong}
      />
      )}
      {currentQuestion.type === 'OPEN_ENDED' ? ( 
      <OpenEndedQuestion
        question={currentQuestion}
        onCorrect={onCorrect}
        onWrong={onWrong}
        />
        ) : null}
    </View>
  );
}

const styles = StyleSheet.create({});

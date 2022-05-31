import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert, ActivityIndicator } from 'react-native';
import { globalStyles } from './styles';
import Header from './src/components/Header/Header';
import ImageMCQuestion from './src/components/ImageMCQuestion/ImageMCQuestion';

import OpenEndedQuestion from './src/components/OpenEndedQuestion/OpenEndedQuestion';
import FillBlanks from './src/components/FillBlanks/FillBlanks';
import TranslateSentence from './src/components/TranslateSentence/TranslateSentence';
import questions from './data/allQuestions';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex]
  );

  const [hasLoaded, setHasLoaded] = useState(false);

  const [lives, setLives] = useState(5);

  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert('You have finished the quiz');
      setCurrentQuestionIndex(0);
      setLives(5);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (hasLoaded) {
      saveData();
    }
  }, [lives, currentQuestionIndex, hasLoaded]);

  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
  const onWrong = () => {
    Alert.alert('Wrong answer');
    setLives(lives - 1);
    if (lives <= 1) {
      Alert.alert('You have lost the game');
      setLives(5);
      setCurrentQuestionIndex(0);
    }
  };

  const saveData = async () => {
    await AsyncStorage.setItem('lives,', lives.toString());
    await AsyncStorage.setItem(
      'currentQuestionIndex',
      currentQuestionIndex.toString()
    );
  };

  const loadData = async () => {
    const loadedLives = await AsyncStorage.getItem('lives');
    if (loadedLives) {
      setLives(parseInt(loadedLives));
    }
    const currentQuestionIndex = await AsyncStorage.getItem(
      'currentQuestionIndex'
    );
    if (currentQuestionIndex) {
      setCurrentQuestionIndex(parseInt(currentQuestionIndex));
    }
    setHasLoaded(true);
  };

  if (!hasLoaded) {
    return <ActivityIndicator size='large' color='#0000ff' />;
  }

  return (
    <View style={globalStyles.root}>
      <Header
        progress={currentQuestionIndex / questions.length}
        lives={lives}
      />
      {currentQuestion.type === 'FILL_IN_THE_BLANK' ? (
        <FillBlanks
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      ) : null}
      {currentQuestion.type === 'IMAGE_MULTIPLE_CHOICE' && (
        <ImageMCQuestion
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
      {currentQuestion.type === 'TRANSLATE_SENTENCE' ? (
        <TranslateSentence
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      ) : null}
      
    </View>
  ); 
}

const styles = StyleSheet.create({});

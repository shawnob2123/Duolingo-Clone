import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import {globalStyles} from './styles';
import ImageOption from './src/components/ImageOption/ImageOption';
import question from './data/oneQuestionWithOption';

export default function App() {
  const [selected, setSelected] = useState(null);


  return (
    <View style={globalStyles.root}>
      <Text style={globalStyles.text}>{question.question}</Text>
      <View style={globalStyles.optionsContainer}>
        {question.options.map((option) => {
          return (
            <ImageOption
              key={option.id}
              text={option.text}
              image={option.image}
              isSelected={selected?.id === option.id} //compare unique id's
              onPress={() => setSelected(option)}
            />
          );
        }
        )}
     
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});

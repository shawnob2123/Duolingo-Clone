import { Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import Button from '../Button/Button';
import { styles } from './styles';
import Choices from '../TranslateSentence/Choices';

const FillBlanks = ({ question, onCorrect, onWrong }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const onCheckAnswer = () => {
    if (selectedOptions.filter(option => option === true).length === 1) {
      onCorrect();
    } else {
      onWrong();
    }
  };

  const addOption = (option) => {
    setSelectedOptions([...selectedOptions, option]);
  };

  const removeOption = () => {
    setSelectedOptions(selectedOptions.slice(0, selectedOptions.length - 1));
  };

  return (
    <>
      <Text style={styles.title}>Complete the sentence</Text>
      <Image
        style={styles.image}
        source={require('../../../assets/images/boygirl.jpeg')}
      />
      <View style={styles.sentenceContainer}>
        {question.parts.map((part, key) => {
          if (part.isBlank) {
            return (
              <View style={styles.blank}>
                {selectedOptions && (
                  <Choices
                    text={selectedOptions[key]}
                    key={key}
                    onPress={() => removeOption()}
                  />
                )}
              </View>
            );
          } else {
            return <Text style={styles.text}>{part.text}</Text>;
          }
        })}
      </View>
      <View style={styles.options}>
        {question.options.map((option, key) => (
          <Choices
            key={key}
            text={option}
            isSelected={selectedOptions && selectedOptions.includes(option)}
            onPress={() => addOption(option)}
          />
        ))}
      </View>
      <Button
        text='Check'
        onPress={onCheckAnswer}
        disabled={!selectedOptions.length}
      />
    </>
  );
};

export default FillBlanks;

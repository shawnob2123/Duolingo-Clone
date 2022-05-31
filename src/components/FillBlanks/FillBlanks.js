import {  Text, View, Image } from 'react-native'
import React, {useState} from 'react';
import Button from '../Button/Button';
import { styles } from './styles';
import Choices from '../TranslateSentence/Choices';

const FillBlanks = ({ question, onCorrect, onWrong }) => {
  const [selectedOptions, setSelectedOptions] = useState(null);

  const onCheckAnswer = () => {
    if (selected === question.correct) {
      onCorrect();
    } else {
      onWrong();
      setSelected(null);
    }
  };

  const addOption = (option) => { 
    setSelectedOptions([...selectedOptions, option]);
  
  }
  
  return (
    <>
      <Text style={styles.title}>Complete the sentence</Text>
      <Image
        style={styles.image}
        source={require('../../../assets/images/boygirl.jpeg')}
      />
      <View style={styles.sentenceContainer}>
        {
          question.parts.map((part) => {
            if (part.isBlank) {
              return (
                   <View style={styles.blank}>
          {
            selectedOptions && (<Choices
            text={selectedOptions}
            onPress={() => setSelected(null)}
          />
          )}
        </View>
              )
            } else {
              return <Text style={styles.text}>{part.text}</Text>
            }
          })
        }
       
      </View>
      <View style={styles.options}>
        {
          question.options.map((choice, index) => (
            <Choices
              key={index}
              text={choice}
              isSelected={selectedOptions === choice}
              onPress={() => addOption(choice)}
            />
          )
        )}
        
      </View>
      <Button text='Check' onPress={onCheckAnswer} disabled={!selectedOptions} />
    </>
  )
}

export default FillBlanks;


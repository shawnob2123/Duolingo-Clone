import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import ImageOption from '../ImageOption/ImageOption';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { styles } from './styles';

const ImageMCQuestion = ({question, onCorrect, onWrong}) => {
  const [selected, setSelected] = useState(null);
  

   const onButtonPress = () => { 
    if (selected.correct) {
      onCorrect();
      setSelected(null);
      
    } else {
      onWrong();
    }
  }
  return (
    <>
      <Text style={styles.text}>{question.question}</Text>
      <View style={styles.optionsContainer}>
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
        })}
      </View>
      <Button text='Check' onPress={onButtonPress} disabled={!selected} />
    </>
  );
};

ImageMCQuestion.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        correct: PropTypes.bool.isRequired,
      })
    ).isRequired,
  }).isRequired,

}

export default ImageMCQuestion;


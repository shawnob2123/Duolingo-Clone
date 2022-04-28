import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { styles } from './styles';
import PropTypes from 'prop-types';

const ImageOption = ({text, image, isSelected, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.optionContainer, isSelected ? styles.selectedContainer : {}]}>
      <Image
        resizeMode='contain'
        style={styles.optionImage}
        source={{uri: image}}
      />
      <Text style={isSelected ? styles.selectedText : styles.optionText}>{text}</Text>
    </Pressable>
  );
};

ImageOption.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string,
  isSelected: PropTypes.bool,
  onPress: PropTypes.func
};

ImageOption.defaultProps = { //make sure default value is there
  text: 'Default',
  isSelected: false,
  onPress: () => {}
}

export default ImageOption;
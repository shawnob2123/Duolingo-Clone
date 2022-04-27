import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {styles} from './styles';

const ImageOption = ({text, image}) => {
  return (
    <View style={styles.optionContainer}>
      <Image
        resizeMode='contain'
        style={styles.optionImage}
        source={{uri: image}}
      />
      <Text style={styles.optionText}>{text}</Text>
    </View>
  );
};

export default ImageOption;
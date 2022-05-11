import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react';
import { styles } from './styles';
import PropTypes from 'prop-types';

const Button = ({ text, onPress, disabled }) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[styles.container, disabled ? styles.disabledContainer : {}]}> 
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
};

Button.PropTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  onPress: () => { },
  disabled: false
}

export default Button;
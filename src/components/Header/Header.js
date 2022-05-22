import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import ProgressBar from '../ProgressBar/ProgressBar';

const Header = ({progress, lives}) => {
  return (
    <View style={styles.root}>
      <ProgressBar
        progress={progress}
      />
      <Image source={require('../../../assets/images/heart.png')} style={styles.heart} />
      <Text style={styles.lives}>{lives}</Text>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    paddingBottom: 10,

  },
  heart: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
    resizeMode: 'contain',
  },
  lives: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',

  }
})
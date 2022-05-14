import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProgressBar = ({progress}) => {
  return (
    <View style={styles.bg}>
      <View style={[styles.fg, { width: `${progress * 100}%` }]}>
        <View style={styles.highlight}/>
      </View>
    </View>
  )
}

export default ProgressBar

const styles = StyleSheet.create({
  bg: {
    height: 20,
    backgroundColor: '#ccc',
    borderRadius: 15,
    flex: 1
  },
  fg: {
    flex: 1,
    backgroundColor: '#fac800',
    borderRadius: 15,

  },
  highlight: {
    position: 'absolute',
    backgroundColor: '#fad131',
    width: '90%',
    height: 5,
    borderRadius: 5,
    marginTop: 5,
    alignSelf: 'center',
  }
})
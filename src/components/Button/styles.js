import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5acc02',
    height: 60,
    marginVertical:10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderBottomWidth: 5,
    borderColor: '#57a600'
  },
text: {
  fontSize: 20,
  color: '#fff',
  fontWeight: 'bold',
  borderColor: '#fff',
  borderBottomWidth: 1.5
  },
  disabledContainer: {
    backgroundColor: 'lightgray',
    borderColor:'gray'
  }
})
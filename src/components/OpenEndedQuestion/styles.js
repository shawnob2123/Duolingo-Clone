import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    paddingTop:10
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    margin: 10,
    marginBottom :0,
  },
  image: {
    width: '30%',
    aspectRatio: 3/4,
    resizeMode: 'contain',
    marginRight: 10,
  },
  sentenceContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  sentence: {
    fontSize: 16,
    color: 'gray',
  },
  input: {
    borderWidth: 1,
    borderColor: 'lightgray',
    alignSelf: 'stretch',
    backgroundColor: '#ebebeb',
    flex: 1,
    borderRadius: 10,
    padding: 10,
    fontSize: 16
  }
})
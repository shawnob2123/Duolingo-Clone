import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,

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
    flexDirection: 'row',
  },
    sentence: {
    fontSize: 16,
    color: 'gray',
    paddingLeft: 10
  },
  input: {
    borderBottomWidth: 2,
    flex:1 ,
    borderColor: '#ccc',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  choicesRow: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 10,
  }
})
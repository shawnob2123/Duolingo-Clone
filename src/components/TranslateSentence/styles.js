import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'flex-start',
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
   flex:1,
    borderWidth: 1,
    borderColor: 'lightgray',
    alignSelf: 'stretch',
    backgroundColor: '#ebebeb',
    borderRadius: 10,
    padding: 10,


  },
  choicesRow: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 10,
  },
  alert: {
    fontSize: 16,
    color: 'gray',
    paddingTop: 20
  }
})
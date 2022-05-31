import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    
  },
  image: {
    aspectRatio: 3/4,
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  text: {
    alignSelf: 'flex-end',
    fontSize: 18
  },
  blank: {
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    width: 75

  },
  sentenceContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    height: 50,
    justifyContent: 'center',
  },
  options: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  }
})
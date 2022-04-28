import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   optionImage: {
    width: '100%',
    flex: 1,
  },
    optionContainer: {
    borderWidth: 4,
    borderBottomWidth: 4,
    borderColor: 'lightgray',
    borderRadius: 20,
    width: '48%',
    height:'48%',
    alignItems:'center',
    padding:10
  },
  optionText: {
    fontWeight: 'bold',
  },
  selectedContainer: {
    backgroundColor: '#ddf4fe',
    borderColor:'#81d5fe'
  },
  selectedText: {
    color: '#40bef7',
    fontWeight: 'bold',
  }
})
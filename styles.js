import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    paddingTop:50
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Helvetica",
    alignSelf: 'stretch',
  },
  optionsContainer: {
    width: '100%',
    flexDirection: 'row',
    flex:1,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    padding:10,
  },

})
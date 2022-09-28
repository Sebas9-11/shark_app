import { TextInput, StyleSheet } from 'react-native'
import { Colors } from '../constants/colors'

export const Inputs = ({placeholder, type, securety, onchange, value , onChangeText}) => {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      keyboardType= {type}
      secureTextEntry= {securety}
      onChangeText={onChangeText}
      onChange={onchange}
      value={value}
    />
  )
}

export const TextArea = ({placeholder, value, onChangeText}) => {
  return (
    <TextInput
      style={styles.textArea}
      multiline 
      placeholder={placeholder}
      numberOfLines={6}
      onChangeText={onChangeText} 
      value={value}
    />
  )
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    color: Colors.dark,
    width: '95%',
    height: 40,
    borderWidth:2,
    borderColor: Colors.black,
    borderRadius: 6,
    padding: 10,
    marginVertical: 10,
    marginHorizontal:10,
    backgroundColor: Colors.light
  },
  textArea:{
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    color: Colors.dark,
    width: '95%',
    height: 200,
    borderWidth:2,
    borderColor: Colors.black,
    borderRadius: 6,
    padding: 10,
    marginVertical: 0,
    marginHorizontal:10,
    backgroundColor: Colors.light
  },
})
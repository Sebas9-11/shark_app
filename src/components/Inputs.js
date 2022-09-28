import * as rn from 'react-native'
import { Colors } from '../constants/colors'
import React from 'react'
import { ButtonRegister } from './Buttons'

export const Inputs = ({placeholder, type, securety, onchange, value , onChangeText}) => {
  return (
    <rn.TextInput
      style={styles.textInput}
      placeholder={placeholder}
      keyboardType= {type}
      value={value}
      secureTextEntry= {securety}
      onChangeText={onChangeText}
      onChange={onchange}
    />
  )
}

export const TextArea = ({placeholder, onChangeText}) => {
  return (
    <rn.TextInput
      style={styles.textArea}
      placeholder={placeholder}
      multiline={true}
      numberOfLines={6}
      onchangeText={onChangeText}
    />
  )
}

const styles = rn.StyleSheet.create({
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
    marginVertical: 10,
    marginHorizontal:10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: Colors.light
  },
})
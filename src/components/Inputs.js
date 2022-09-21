import * as rn from 'react-native'
import { Colors } from '../constants/colors'
import React from 'react'

export const Inputs = ({placeholder, type, securety}) => {
  return (
    <rn.TextInput
      style={styles.textInput}
      placeholder={placeholder}
      keyboardType= {type}
      secureTextEntry= {securety}
    />
  )
}

const styles = rn.StyleSheet.create({
  textInput: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    color: Colors.dark,
    width: '90%',
    height: 40,
    borderWidth:2,
    borderColor: Colors.medium,
    borderRadius: 6,
    padding: 10,
    marginVertical: 10,
  },
})
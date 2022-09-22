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

export const InputRegister = ({ value , onPress, onChangeText }) => {

  return (
    <rn.View style={styles.register}>
      <rn.TextInput
        style={styles.textInput}
        placeholder = 'Ingresar participante'
        keyboardType = 'ascii-capable'
        value={value}
        securety={false}
        onChangeText={ onChangeText }
      />
      <ButtonRegister
        title="Remove"
        color={Colors.danger}
        onPress={onPress}
      />
    </rn.View>
  )
}

export const TextArea = ({placeholder}) => {
  return (
    <rn.TextInput
      style={styles.textArea}
      placeholder={placeholder}
      multiline={true}
      numberOfLines={6}
    />
  )
}

const styles = rn.StyleSheet.create({
  textInput: {
    fontSize: 18,
    // fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    color: Colors.dark,
    width: '95%',
    height: 40,
    borderWidth:2,
    borderColor: Colors.medium,
    borderRadius: 6,
    padding: 10,
    marginVertical: 10,
    marginHorizontal:10
  },
  textArea:{
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    color: Colors.dark,
    width: '100%',
    height: 200,
    borderWidth:2,
    borderColor: Colors.medium,
    borderRadius: 6,
    padding: 10,
    marginVertical: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  register:{
    width: '90%',
    flexDirection: 'row',
    paddingHorizontal: 50,
    marginHorizontal:20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  }
})
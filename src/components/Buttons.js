import * as rn from 'react-native'
import React from 'react'
import { Colors } from '../constants/colors'

export const Buttons = ({title, onPress, color}) =>{
  return (
    <rn.TouchableOpacity style={[styles.container, {backgroundColor: color}]} onPress={onPress}>
      <rn.Text style={styles.text}>{title}</rn.Text>
    </rn.TouchableOpacity>
  )
}

export const ButtonRegister = ({title, onPress, color}) =>{
  return (
    <rn.TouchableOpacity style={[styles.buttonRegister, {backgroundColor: color}]} onPress={onPress}>
      <rn.Text style={styles.text}>{title}</rn.Text>
    </rn.TouchableOpacity>
  )
}

const styles = rn.StyleSheet.create({
  container:{
    width: '90%',
    height: 40,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    marginVertical:20
  },
  buttonRegister:{
    width: '35%',
    height: 40,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  text:{
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    color: Colors.light,
  }
})
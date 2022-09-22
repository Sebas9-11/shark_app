import * as rn from 'react-native'
import { Inputs } from '../components/Inputs'
import React from 'react'

export default function HomeScreen(){
  return (
    // mi commit
    <rn.View style={styles.container}>
      <rn.Text>Home</rn.Text>
    </rn.View>
  )
}


const styles = rn.StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  }
})
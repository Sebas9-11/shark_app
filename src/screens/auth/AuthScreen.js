import React from 'react'
import * as rn from 'react-native'
import { BlurView } from 'expo-blur'
import { Buttons} from '../../components/Buttons'
import { Inputs } from '../../components/Inputs'
import { Colors } from '../../constants/colors'

export default function AuthScreen(){
  return (
    <rn.View style={styles.container}>
      <BlurView intensity={80} style={styles.blur}>
      <rn.Text style={styles.title}>Login</rn.Text>
      <Inputs
        placeholder="Email"
        type="email-address"
        securety={false}
      />
      <Inputs
        placeholder="Password"
        type="default"
        securety={true}
      />

      <Buttons
        title="Login"
        onPress={() => console.log("Login")}
        color= {Colors.secondary}
      />
      <Buttons
        title="Register"
        onPress={() => console.log("Register")}
        color= {Colors.primary}
      />
      </BlurView>
    </rn.View>
  )
}

const styles = rn.StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  }, 
  blur:{
    width: '90%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  }
})
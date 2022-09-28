import { View, Text, StyleSheet, Alert } from 'react-native'
import { Buttons, Inputs} from '../../components'
import { GlobalStyles } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { Colors } from '../../constants/colors'
import { BlurView } from 'expo-blur'
import React from 'react'
import { firebase } from '../../services/firebase'

export default function AuthScreen(){
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const navigation = useNavigation()

  const handleCreateAcount = async () => {
    await firebase.signUp(email, password)
      .then(user => {
        navigation.navigate('Register')
        console.log(user)
      })
      .catch( error => {
        Alert.alert('Error', error.message)
      })
  }

    const handleSingIn = async () => {
      await firebase.signIn(email, password)
        .then(user => {
          navigation.navigate('Group')
          console.log(user)
        })
        .catch( error => {
          console.log(error.message)
        })
    }

    

  return (
    <View style={GlobalStyles.container}>
      <BlurView intensity={80} style={styles.blur}>
      <Text style={styles.title}>Login</Text>
      <Inputs
        placeholder="Email"
        type="email-address"
        securety={false}
        value={email}
        onChangeText={(text) =>setEmail(text)}
      />
      <Inputs
        placeholder="Password"
        type="default"
        securety={true}
        value={password}
        onChangeText={(text) =>setPassword(text)}
      />

      <Buttons
        title="Login"
        onPress={handleSingIn}
        color= {Colors.secondary}
      />
      <Buttons
        title="Register"
        onPress={handleCreateAcount}
        color= {Colors.primary}
      />
      </BlurView>
    </View>
  )
}

const styles = StyleSheet.create({
  blur:{
    width: '90%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  }
})
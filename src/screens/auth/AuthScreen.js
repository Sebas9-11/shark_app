import { View, Text, StyleSheet } from 'react-native'
import { Buttons, Inputs} from '../../components'
import { GlobalStyles } from '../../constants'
import { BlurView } from 'expo-blur'
import { Colors } from '../../constants/colors'
import React from 'react'
import { db } from '../../firebaseConfig';
import * as Auth from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'

export default function AuthScreen(){
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const navigation = useNavigation()
  const auth = Auth.getAuth()

  const handleCreateAcount = async () => {
    if (email && password) {
      await Auth.createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigation.navigate('Register')
          // ...
          console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
  }

    const handleSingIn = async () => {
      if (email && password) {
        await Auth.signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            navigation.navigate('Group')
            const userActivo = auth.currentUser.uid
            console.log('el usuario esta: ' ,userActivo)
            //console.log(user)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      }
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
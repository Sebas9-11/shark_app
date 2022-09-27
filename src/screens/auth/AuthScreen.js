import React from 'react'
import * as rn from 'react-native'
import { GlobalStyles } from '../../constants/GlobalStyles'
import { BlurView } from 'expo-blur'
import { Buttons} from '../../components/Buttons'
import { Inputs } from '../../components/Inputs'
import { Colors } from '../../constants/colors'
import { db } from '../../firebaseConfig';
import * as Auth from 'firebase/auth'

export default function AuthScreen(){

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const auth = Auth.getAuth()

  const handleCreateAcount = async () => {
    if (email && password) {
      await Auth.createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
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
            // Signed in
            const user = userCredential.user;
            // ...
            console.log(user)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      }
    }

  return (
    <rn.View style={GlobalStyles.container}>
      <BlurView intensity={80} style={styles.blur}>
      <rn.Text style={styles.title}>Login</rn.Text>
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
    </rn.View>
  )
}

const styles = rn.StyleSheet.create({
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
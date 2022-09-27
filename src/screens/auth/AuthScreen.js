import { View, Text, StyleSheet } from 'react-native'
import { Buttons, Inputs} from '../../components'
import { GlobalStyles } from '../../constants'
import { BlurView } from 'expo-blur'

export default function AuthScreen(){
  return (
    <View style={GlobalStyles.container}>
      <BlurView intensity={80} style={styles.blur}>
      <Text style={styles.title}>Login</Text>
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
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  }
})
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AlterRegister from '../screens/auth/AlterRegister'
import AuthScreen from '../screens/auth/AuthScreen'
import GroupStack from './GroupStack'

const Stack = createNativeStackNavigator()

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component={AuthScreen} />
      <Stack.Screen name="Register" component={AlterRegister} />
      <Stack.Screen name="Group" component={GroupStack} />
    </Stack.Navigator>
  )
}
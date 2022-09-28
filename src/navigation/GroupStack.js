import { createDrawerNavigator } from "@react-navigation/drawer";
import Judges from "../screens/user/Judges";
import ProyectScreen from "../screens/user/ProyectScreen";
import { Text } from "react-native";
import { db } from "../firebaseConfig";
import * as Auth from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'

const Drawer = createDrawerNavigator();

function Home(){
  return <ProyectScreen id={1}/>
} 

export default function GroupStack() {

  const navigation = useNavigation()
  const auth = Auth.getAuth()
  const handleSingOut = async () => {
    await auth.signOut()
    .then(() => {
      console.log('saliste')
      navigation.navigate('Login')
    })
    .catch((error) => {
      console.log(error)
    });
  }

  function logout(){
    return (
      <Text 
        style={{color:'black', fontSize:20, fontWeight:'bold', margin:10}}
        onPress={handleSingOut}
      >
      Logout
      </Text>
    )
  }

  return (
    <Drawer.Navigator screenOptions={{
      headerRight: () => (
        logout()
      ),
    }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Judges" component={Judges}/>
    </Drawer.Navigator>
  );
}
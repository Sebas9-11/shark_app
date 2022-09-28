import { createDrawerNavigator } from "@react-navigation/drawer";
import JudgesScreen from "../screens/judges/JudgesScreen";
import ProyectScreen from "../screens/user/ProyectScreen";
import { Text } from "react-native";
import { db } from "../firebaseConfig";
import * as Auth from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'
import { Colors } from './../constants/colors';

const Drawer = createDrawerNavigator();

function Home(){
  return <ProyectScreen id={1}/>
} 

export default function GroupStack() {

  const navigation = useNavigation()
  const auth = Auth.getAuth()
  const handleSingOut = async () => {
    await Auth.signOut(auth).then(() => {
      // Sign-out successful.
      navigation.navigate('Login')
    }).catch((error) => {
      // An error happened.
    });
  }

  function logout(){
    return (
      <Text 
        style={{color:Colors.background, fontSize:20, fontWeight:'bold', margin:10}}
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
      drawerActiveBackgroundColor: Colors.background,
    }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Judges" component={JudgesScreen}/>
    </Drawer.Navigator>
  );
}
import { createDrawerNavigator } from "@react-navigation/drawer";
import JudgesScreen from "../screens/judges/JudgesScreen";
import ProyectScreen from "../screens/user/ProyectScreen";
import { Text } from "react-native";
import { useNavigation } from '@react-navigation/native'
import { firebase } from "../services/firebase";
import { Colors } from "../constants";

const Drawer = createDrawerNavigator();

function Home(){
  return <ProyectScreen id={1}/>
} 

export default function GroupStack() {

  const navigation = useNavigation()

  const handleSingOut = async () => {
<<<<<<< HEAD
    await Auth.signOut(auth).then(() => {
      // Sign-out successful.
      navigation.navigate('Login')
    }).catch((error) => {
      // An error happened.
    });
=======
    await firebase.signOut()
      .then(() => {
        navigation.navigate('Login')
      })
>>>>>>> registro
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
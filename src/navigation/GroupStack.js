import { createDrawerNavigator } from "@react-navigation/drawer";
import Judges from "../screens/user/Judges";
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
    await firebase.signOut()
      .then(() => {
        navigation.navigate('Login')
      })
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
      <Drawer.Screen name="Judges" component={Judges}/>
    </Drawer.Navigator>
  );
}
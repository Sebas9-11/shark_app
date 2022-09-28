import React from 'react'
import * as rn from 'react-native'
import { Inputs , TextArea} from '../../components/Inputs'
import { Buttons } from '../../components/Buttons'
import { GlobalStyles } from '../../constants/GlobalStyles'
import Divider from 'react-native-divider'
import { Colors } from '../../constants/colors'
import { db } from '../../firebaseConfig'
import { collection, addDoc} from 'firebase/firestore';
import * as Auth from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'

export default function AlterRegister(){

  const navigation = useNavigation()
  const auth = Auth.getAuth()
  const uid = auth.currentUser.uid

  const [name1,setName1]=React.useState('');
  const [name2,setName2]=React.useState('');
  const [name3,setName3]=React.useState('');
  const [name4,setName4]=React.useState('');

  const [newGroup, setNewGroup] = React.useState({
    participants:[],
    group:'',
    desc:'',
    budget:0,
    id: uid
  })

  const HandleAdd = async () => {
    setNewGroup({
      ...newGroup,participants:[name1,name2,name3,name4]})
    await addDoc(collection(db, "groups"), newGroup);
    navigation.navigate('Login')
  }


  return(
    <rn.View style={GlobalStyles.simpleContainer}>
      <rn.ScrollView style={{width:'100%' , paddingHorizontal:10}}>
        <rn.Text style={GlobalStyles.titles}> Register </rn.Text>
        
        <Divider orientation="left" borderColor='black'>Info Group</Divider>
        <Inputs 
          placeholder="Name of group"
          onChangeText={(text) => setNewGroup({...newGroup, group:text})}
        />
        <TextArea 
          placeholder={'describe the objective of the group'}
          onChangeText={(text) => setNewGroup({...newGroup, desc:text})}
        />
        <rn.View style={styles.containerP}>
          <rn.Text>Presupuesto: </rn.Text>
          <rn.TextInput 
            style={styles.textInput}
            placeholder='$150.0'
            keyboardType='numeric'
            onChangeText={(number)=> setNewGroup({...newGroup, budget:number})}
          />
        </rn.View>

        <Divider orientation="left" borderColor='black'>Info Participants</Divider>
        <Inputs 
          placeholder={"Name & Last Name"}
          onChangeText={(text) => setName1(text)}
        />
        <Inputs
          placeholder={"Name & Last Name"}
          onChangeText={(text) => setName2(text)}
        />
        <Inputs
          placeholder={"Name & Last Name"}
          onChangeText={(text) => setName3(text)}
        />
        <Inputs
          placeholder={"Name & Last Name"}
          onChangeText={(text) => setName4(text)}
        />

        <Buttons
          title="Save"
          color={Colors.secondary}
          onPress={HandleAdd}
        />
      </rn.ScrollView>
    </rn.View>
  )
}


const styles = rn.StyleSheet.create({
  textInput: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    color: Colors.dark,
    width: '30%',
    height: 40,
    borderWidth:2,
    borderColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginHorizontal:10,
    backgroundColor: Colors.light
  },
  containerP:{
    width:'100%', 
    flexDirection:'row', 
    alignItems:'center',
    marginHorizontal:10,
  }
})

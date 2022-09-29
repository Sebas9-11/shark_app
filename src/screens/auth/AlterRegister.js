import { View, TextInput, Text, ScrollView, StyleSheet, TouchableOpacity,Image } from 'react-native'
import { Inputs , TextArea, Buttons} from '../../components'
import { GlobalStyles, Colors } from '../../constants'
import Divider from 'react-native-divider'
import { firebase } from '../../services/firebase'
import { useRef, useState } from 'react'
import img from '../../../assets/group.png'
import { pickImage, upload } from './utils/images'

export default function AlterRegister(){
  const [image, setImage ] = useState(img)
  const [participants, setParticipants] = useState({})
  const toUpload = useRef(false)

  const [newGroup, setNewGroup] = useState({
    image: '',
    judges: {},
    collection: 0,
    group:'',
    desc:'',
    budget:0,
    id: firebase.user
  })

  const HandleAdd = async () => {
    let group = {...newGroup, participants}
    if (toUpload.current) {
      console.log('uploading')
      const url = await upload(image.uri)

      group = {...group, image: url}
    }

      
    firebase.addDocument("groups", group)
      .then((id) => {
        console.log(id)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handlePress = async () => {
    const result = await pickImage()
    if (!result.cancelled) {
      setImage({uri: result.uri})
      toUpload.current = true
      console.log(result.uri)
    }
  }

  return(
    <View style={GlobalStyles.simpleContainer}>
      <ScrollView style={{width:'100%' , paddingHorizontal:10}}>
        <Text style={GlobalStyles.titles}> Register </Text>
        <TouchableOpacity style={styles.buttonImage} onPress={handlePress}>
          <Image source={image} style={styles.image}/>
        </TouchableOpacity>       
        <Divider orientation="left" borderColor='black'>Info Group</Divider>
        <Inputs 
          placeholder="Name of group"
          value={newGroup.group}
          onChangeText={(group) => setNewGroup({...newGroup, group})}
        />
        <TextArea 
          placeholder={'describe the objective of the group'}
          value={newGroup.desc}
          onChangeText={(desc) => setNewGroup({...newGroup, desc})}
        />
        <View style={styles.containerP}>
          <Text>Presupuesto: </Text>
          <TextInput 
            style={styles.textInput}
            placeholder='$150.0'
            keyboardType='numeric'
            value={newGroup.budget}
            onChangeText={(budget)=> setNewGroup({...newGroup, budget})}
          />
        </View>

        <Divider orientation="left" borderColor='black'>Info Participants</Divider>
        <Inputs 
          placeholder={"Name & Last Name"}
          value={participants.participant1}
          onChangeText={(participant1) => setParticipants({...participants, participant1})}
        />
        <Inputs
          placeholder={"Name & Last Name"}
          value={participants.participant2}
          onChangeText={(participant2) => setParticipants({...participants, participant2})}
        />
        <Inputs
          placeholder={"Name & Last Name"}
          value={participants.participant3}
          onChangeText={(participant3) => setParticipants({...participants, participant3})}
        />
        <Inputs
          placeholder={"Name & Last Name"}
          value={participants.participant4}
          onChangeText={(participant4) => setParticipants({...participants, participant4})}
        />

        <Buttons
          title="Save"
          color={Colors.secondary}
          onPress={HandleAdd}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
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
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
    borderRadius: 50,
  },
  buttonImage:{
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 16,
    borderWidth: 4,
    alignSelf: 'center',
    borderColor: '#fff',
    backgroundColor: '#fff',

  },
})

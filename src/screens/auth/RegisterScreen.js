import { useState, useRef } from 'react'
import { View,Text,ScrollView, StyleSheet,Alert } from 'react-native'
import { Inputs , TextArea, InputRegister, Buttons} from '../../components'
import { GlobalStyles } from '../../constants/GlobalStyles'

export default function RegisterScreen(){

  const [participantes , setParticipantes] = useState([])
  const [presupuesto , setPresupuesto] = useState(150.0)
  const [nombres, setNombres] = useState({})
  const key = useRef(0)


  const HandleAdd = () => {
    if(participantes.length < 4){
      key.current += 1
      setParticipantes([...participantes, `participante-${key.current}` ])
    } else{
      Alert.alert('No se pueden agregar mas participantes')
    }
  }

  const HandleRemove = (key) => {
    if(participantes.length > 0){
      setParticipantes(
        participantes.filter((item) => item !== key)
      )
      console.log(participantes)

    } else{
      Alert.alert('No hay participantes para eliminar')
    }
  }

  const handdleChange = (text,key) => {
    setNombres({...nombres, [key]: text })
  }

  const hanldeSummit = () => {
    console.log(nombres, key)
  }

  
  return(
    <View style={GlobalStyles.simpleContainer}>
      <ScrollView style={{width:'100%' , paddingHorizontal:10}}>
        <View style={styles.container}>
          <Text style={GlobalStyles.titles}>Register</Text>
          <Inputs  
            placeholder="Email" 
          />
          <Inputs 
            placeholder="Password" 
            securety={true}
          />
        </View>
        <View style={styles.container}>
          <Inputs placeholder="Name of group" />
          <TextArea placeholder="Description of group" />
          <Text>Presupuesto: ${presupuesto}</Text>
        </View>
        <View style={styles.container}>
          <Text style={GlobalStyles.titles}>Participantes</Text>
          { participantes && participantes.map((participante) => {
            return(
              <InputRegister
                key={participante}
                value={nombres[participante]}
                onPress={() => HandleRemove(participante)}
                onChangeText={handdleChange}
              />
            )
          })}

          <Buttons
          title={'Agregar Participante'}
          onPress={HandleAdd}
          />
        </View>
        <Buttons
          title={'Crear Grupo'}
          onPress={hanldeSummit}
          />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({ 
  container: {
    width: '100%',
    marginVertical: 10,
    borderWidth:1,
    borderColor: 'black',
    borderRadius: 6,
    padding: 10,
    backgroundColor: '#CED8DE'
  } 
})
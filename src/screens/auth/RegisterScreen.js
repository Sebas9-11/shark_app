import React from 'react'
import * as rn from 'react-native'
import { Inputs , TextArea, InputRegister} from '../../components/Inputs'
import { Buttons } from '../../components/Buttons'
import { GlobalStyles } from '../../constants/GlobalStyles'

export default function RegisterScreen(){

  const [participantes , setParticipantes] = React.useState([])
  const [presupuesto , setPresupuesto] = React.useState(150.0)
  const [nombres, setNombres] = React.useState({})
  const key = React.useRef(0)


  const HandleAdd = () => {
    if(participantes.length < 4){
      key.current += 1
      setParticipantes([...participantes, `participante-${key.current}` ])
    } else{
      rn.Alert.alert('No se pueden agregar mas participantes')
    }
  }

  const HandleRemove = (key) => {
    if(participantes.length > 0){
      setParticipantes(
        participantes.filter((item) => item !== key)
      )
      console.log(participantes)

    } else{
      rn.Alert.alert('No hay participantes para eliminar')
    }
  }

  const handdleChange = (text,key) => {
    setNombres({...nombres, [key]: text })
  }

  const hanldeSummit = () => {
    console.log(nombres, key)
  }

  
  return(
    <rn.View style={GlobalStyles.simpleContainer}>
      <rn.ScrollView style={{width:'100%' , paddingHorizontal:10}}>
        <rn.View style={styles.container}>
          <rn.Text style={GlobalStyles.titles}>Register</rn.Text>
          <Inputs  
            placeholder="Email" 
          />
          <Inputs 
            placeholder="Password" 
            securety={true}
          />
        </rn.View>
        <rn.View style={styles.container}>
          <Inputs placeholder="Name of group" />
          <TextArea placeholder="Description of group" />
          <rn.Text>Presupuesto: ${presupuesto}</rn.Text>
        </rn.View>
        <rn.View style={styles.container}>
          <rn.Text style={GlobalStyles.titles}>Participantes</rn.Text>
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
        </rn.View>
        <Buttons
          title={'Crear Grupo'}
          onPress={hanldeSummit}
          />
      </rn.ScrollView>
    </rn.View>
  )
}

const styles = rn.StyleSheet.create({ 
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
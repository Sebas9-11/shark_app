import React from 'react'
import * as rn from 'react-native'
import { Inputs , TextArea, InputRegister} from '../../components/Inputs'
import { Buttons } from '../../components/Buttons'
import { GlobalStyles } from '../../constants/GlobalStyles'

export default function RegisterScreen(){

  const [participantes , setParticipantes] = React.useState([])
  const [presupuesto , setPresupuesto] = React.useState(150.0)

  const TextField = InputRegister({
    value: '',
    onPress:HandleRemove,
    placeholder:'Nombre & Apellido',
    type:'default',
    securety:false,
  })

  const HandleAdd = () => {
    if(participantes.length < 4){
      setParticipantes([...participantes, TextField ])
    }else{
      rn.Alert.alert('No se pueden agregar mas participantes')
    }
  }

  const HandleRemove = () => {
    return(rn.Alert.alert('hola'))
      
  }

  
  return(
    <rn.View style={GlobalStyles.simpleContainer}>
      <rn.ScrollView style={{width:'100%' , paddingHorizontal:10}}>
        <rn.View style={styles.container}>
          <rn.Text style={GlobalStyles.titles}>Register</rn.Text>
          <Inputs placeholder="Email" />
          <Inputs placeholder="Password" />
        </rn.View>
        <rn.View style={styles.container}>
          <Inputs placeholder="Name of group" />
          <TextArea placeholder="Description of group" />
          <rn.Text>Presupuesto: ${presupuesto}</rn.Text>
        </rn.View>
        <rn.View style={styles.container}>
          <rn.Text style={GlobalStyles.titles}>Participantes</rn.Text>
          {participantes}
          <Buttons
          title={'Agregar Participante'}
          onPress={HandleAdd}
          />
        </rn.View>
        <Buttons
          title={'Crear Grupo'}
          onPress={()=>rn.Alert.alert('Grupo creado')}
          />
      </rn.ScrollView>
    </rn.View>
  )
}

const styles = rn.StyleSheet.create({ 
  container: {
    width: '90%',
    marginVertical: 10,
    borderWidth:1,
    borderColor: 'black',
    borderRadius: 6,
    padding: 10,
    backgroundColor: '#CED8DE'
  } 
})
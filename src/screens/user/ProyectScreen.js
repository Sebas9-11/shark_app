import { View, ScrollView, StyleSheet } from 'react-native'
import { ProyectHeader, ProyectDescription, ProyectParticipants }  from './components'
import { GlobalStyles } from '../../constants'
import * as Auth from 'firebase/auth'
import { db } from '../../firebaseConfig'
import { Text } from 'react-native'

import { useProyect } from './hooks/useProyect'
import React from 'react'

export default function ProyectScreen() {
    const proyect = useProyect()

    const auth = Auth.getAuth()
    const user = auth.currentUser.email

    return (   
        <View style={GlobalStyles.simpleContainer}>
            <ScrollView style={styles.scroll}>
                <View style={styles.container}>
<<<<<<< HEAD
                    <Text>{user}</Text>
                    <ProyectHeader title={proyect.title}/>
=======
                    {/* <ProyectHeader title={proyect.title} img={imgs}/>
>>>>>>> registro
                    <ProyectDescription description={proyect.description}/>
                    <ProyectParticipants participants={proyect.participants}/> */}
                </View>
            </ScrollView >
        </View>
    )
}

const styles = StyleSheet.create(
    {
        
        container: {
            width: '100%',
            padding: 10,
            borderRadius: 6,
            marginVertical: 10,
            alignItems: "center",
        },
        scroll : {
            width: '100%',
            paddingHorizontal: 10,
        }
    }
)
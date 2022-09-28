import { View, ScrollView, StyleSheet } from 'react-native'
import { ProyectHeader, ProyectDescription, ProyectParticipants }  from './components'
import { GlobalStyles } from '../../constants'
import imgs from '../../../assets/favicon.png'

import { useProyect } from './hooks/useProyect'
import React from 'react'

export default function ProyectScreen({ id }) {
    const proyect = useProyect()

    return (   
        <View style={GlobalStyles.simpleContainer}>
            <ScrollView style={styles.scroll}>
                <View style={styles.container}>
                    {/* <ProyectHeader title={proyect.title} img={imgs}/>
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
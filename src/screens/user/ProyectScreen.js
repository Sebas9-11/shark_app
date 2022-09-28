import { View, ScrollView, StyleSheet } from 'react-native'
import { ProyectHeader, ProyectDescription, ProyectParticipants }  from './components'
import { ButtonRegister } from '../../components'
import { GlobalStyles, GlobalLayouts, Colors } from '../../constants'
import { useProyect } from './hooks/useProyect'
import React from 'react'

export default function ProyectScreen({ id }) {

    const { title, img, description, participants } = useProyect(id)

    return (   
        <View style={GlobalStyles.simpleContainer}>
            <ScrollView style={styles.scroll}>
                <View style={styles.container}>
                    <ProyectHeader title={title} img={img}/>
                    <ProyectDescription description={description}/>
                    <ProyectParticipants participants={participants}/>
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
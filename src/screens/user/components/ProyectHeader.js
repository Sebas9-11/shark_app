import { View, Image, Text,StyleSheet } from 'react-native'
import { GlobalLayouts } from '../../../constants'

export default function ProyectHeader({title, img}) {
    return(
        <View style={GlobalLayouts('100%').column}>
            <Image source={img} style={styles.image}/>
            <Text style={styles.header}> {title} </Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        image: {
            width: 100,
            height: 100,
            borderRadius: 50,
            marginBottom: 36
        },
        header: {
            fontSize: 30,
            marginBottom: 36,
            fontWeight: 'bold',
        }
    }
)
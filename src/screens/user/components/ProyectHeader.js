import { View, Image, Text,StyleSheet } from 'react-native'
import { GlobalLayouts } from '../../../constants'
import image from '../../../../assets/group.png'

export default function ProyectHeader({title, img}) {
    return(
        <View style={GlobalLayouts('100%').column}>
            {
                img == "" ? <Image source={image} style={styles.image}/> : 
                <Image source={{uri: img}} style={styles.image}/>
            }
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
            marginBottom: 36,
            borderWidth: 4,
            borderColor: '#fff',
            backgroundColor: '#fff',
        },
        header: {
            fontSize: 30,
            marginBottom: 36,
            fontWeight: 'bold',
        }
    }
)
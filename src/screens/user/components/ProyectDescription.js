import { View, Text, StyleSheet} from 'react-native'
import { GlobalLayouts } from '../../../constants'
import Divider from 'react-native-divider';

export default function ProyectDescription({ description }) {
  return (
    <View style={GlobalLayouts('100%').column}>
        <Divider borderColor="#000" color="#000" orientation="left" style={styles.sep} >
            Description
        </Divider>
        <Text style={styles.descripton}>
           { description }
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    descripton: {
        fontSize: 16,
        marginVertical: 10,
        width: '100%',
        textAlign: 'justify'
    },
    sep : {
        flex: 1,
        width: '100%',
    },
})
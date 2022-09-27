import { View, StyleSheet, Text} from 'react-native'
import  Divider  from 'react-native-divider'
import { GlobalLayouts } from '../../../constants'

export default function ProyectParticipants({ participants }) {
  return (
    <View style={GlobalLayouts({width: '100%'}).column}>
      <Divider borderColor="#000" color="#000" orientation="left" style={styles.sep}>
        participants
      </Divider>
      <View style={GlobalLayouts({width: '100%'}).column}>
        {participants && participants.map((item, index) => (
          <View style={styles.participant} key={index}>
            <Text style={styles.name}>{item.name}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    sep : {
        flex: 1,
        width: '100%',
    },
    participant: {
        width: '100%',
        padding: 10,
        marginVertical: 10,
        // alignItems: "left",
    },
    name: {
        fontSize: 16,
        // marginVertical: 10,
        width: '100%',
        textAlign: 'left'
    },
})
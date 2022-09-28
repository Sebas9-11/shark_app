import { View,StyleSheet, FlatList } from "react-native"
import { JudgeItem } from "./components"
import { GlobalStyles } from "../../constants"

export default function JudgesScreen( { data } ) {

    const itemBuilder = ({ item }) => {
        return <JudgeItem aporte={item.aporte} nombre={item.nombre}/>
    }

    return(
        <View style={GlobalStyles.simpleContainer}>
            <FlatList data={data} renderItem={itemBuilder} />
        </View>
    )
}

const styles = StyleSheet.create(
    {
        
        container: {
            width: '100%',
            // padding: 10,
            borderRadius: 6,
            // marginVertical: 10,
            alignItems: "center",
        }
    }
)
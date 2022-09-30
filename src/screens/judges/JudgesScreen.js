import { View,StyleSheet, FlatList } from "react-native"
import { JudgeItem } from "./components"
import { GlobalStyles } from "../../constants"
import { useJudges } from './hooks/useJudges';

export default function JudgesScreen() {
    const [judges] = useJudges()

    const itemBuilder = ({item}) => {
        return <JudgeItem aporte={item.money} nombre={item.name}/>
    }

    return(
        <View style={GlobalStyles.simpleContainer}>
            <FlatList data={judges} renderItem={itemBuilder} />
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
        }
    }
)
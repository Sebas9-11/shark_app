import { View,Text } from "react-native";
import { useJudge } from "./hooks/useJudge";

export default function JudgesScreen() {

    const [judgeState, loading, error] = useJudge();

    if (loading) {
        return <Text>Loading...</Text>
    } else if (error) {
        return <Text>{error}</Text>
    }

    return (
        <View>
            <Text>Hi {judgeState.name}</Text> 
            <Text>You have: {judgeState.money}</Text>
        </View>
    )  
}


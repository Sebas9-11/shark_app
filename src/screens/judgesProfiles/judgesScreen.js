import { View,Text } from "react-native";
import { useJudge } from "./hooks/useJudge";

export default function JudgesScreen() {

    const [jusgeState] = useJudge();

    return (
        <View>
            <Text>Hi {jusgeState.name}</Text> 
            <Text>You have: {jusgeState.money}</Text>
        </View>
    )  
}


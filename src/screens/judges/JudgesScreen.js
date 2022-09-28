import { View,StyleSheet, ScrollView } from "react-native"
import { JudgeItem } from "./components"
import { GlobalLayouts, GlobalStyles } from "../../constants"

export default function JudgesScreen() {
    return(
        <View style={GlobalStyles.simpleContainer}>
            <ScrollView style={styles.scroll}>
                <View style={GlobalLayouts({width: '90%'}).column}>
                    <JudgeItem aporte={3000} nombre='Duan david castro'/>
                    <JudgeItem aporte={3000} nombre='Juan david castro'/>
                    <JudgeItem aporte={3000} nombre='Juan david castro'/> 
                </View>
            </ScrollView>
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
        },
        scroll : {
            width: '100%',
            paddingHorizontal: 20,
        }
    }
)
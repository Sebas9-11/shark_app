import { Platform, StyleSheet } from "react-native";
import { Colors } from "./colors";

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.background,
  },
  simpleContainer: {  
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.background,
    paddingTop: Platform.OS === "android" ? 40 : 60,
  },
  titles:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign:"center"
  }
});

export const GlobalLayouts = ( {width} ) => StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    width: width ? width : '100%',
  },
  column: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: "center",
      width: width ? width : '100%',
  },
});
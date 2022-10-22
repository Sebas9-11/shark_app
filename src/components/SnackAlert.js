import { Snackbar } from "react-native-paper";
import { StyleSheet } from "react-native";
import { Colors } from "../constants";

export const SnackAlert = ({ visible, onDismiss, message }) => {
  return (
    <Snackbar
      visible={visible}
      style={styles.snack}
      onDismiss={onDismiss}
      duration={2000}
      action={{
        label: "close",
        onPress: () => {
          // Do something
        },
      }}
    >
      {message}
    </Snackbar>
  );
};

const styles = StyleSheet.create({
  snack: {
    backgroundColor: Colors.red,
    color: Colors.white,
    height: 50,
  },
});

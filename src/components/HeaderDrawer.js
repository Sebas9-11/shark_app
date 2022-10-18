import { Ionicons } from "@expo/vector-icons";

export function HeaderDrawer({ icon, onPress }) {
  return (
    <Ionicons
      name={icon}
      size={30}
      color="white"
      onPress={onPress}
      style={{
        marginVertical: "auto",
      }}
    />
  );
}

import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function SettingsIcon() {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.push("/settings")}>
      <Ionicons name="settings-outline" size={24} color="#000000"/>
    </TouchableOpacity>
  )
}
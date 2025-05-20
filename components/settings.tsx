import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../components/themeprovider";

export default function SettingsIcon() {
  const router = useRouter();
  const { darkMode } = useTheme();

  return (
    <TouchableOpacity onPress={() => router.push("/settings")}>
      <Ionicons name="settings-outline" size={24} color={darkMode ? "#ffffff" : "#000000"}/>
    </TouchableOpacity>
  )
}
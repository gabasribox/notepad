import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useNoteStore } from "../stores/notestore";
import { StatusBar } from "expo-status-bar";
import NoteCard from "../components/notecard";
import SearchBar from "../components/searchbar";
import SettingsIcon from "../components/settings";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../components/themeprovider";

export default function Home() {
  const router = useRouter();
  const { notes } = useNoteStore();
  const { darkMode } = useTheme();
  const { themeStyles } = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <SearchBar/>
        <TouchableOpacity onPress={() => router.push("/settings")}>
          <SettingsIcon/>
        </TouchableOpacity>
      </View>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <NoteCard note={item}/>}
        contentContainerStyle={styles.list}
      />

      <TouchableOpacity 
        style={[styles.button, themeStyles.button]} 
        onPress={() => router.push("/note/new")}
      >
        <Ionicons name="create-outline" size={24} color={darkMode ? "#000000" : "#ffffff"}/>
      </TouchableOpacity>

      <StatusBar style={darkMode ? "light" : "dark"} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16},
  header: {flexDirection: "row", justifyContent: "space-between", alignItems: "center"},
  list: {marginTop: 16},
  button: {
    position: "absolute",
    right: 24,
    bottom: 76,
    backgroundColor: "#000000",
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center"
  }
});
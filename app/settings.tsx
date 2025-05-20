import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, Switch, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { useThemeStore } from "../stores/themestore";

export default function Settings() {
  const {darkMode, toggleDarkMode} = useThemeStore();

  return (
    <SafeAreaView style={[styles.container, darkMode && styles.darkContainer]}>
      <Stack.Screen options={{title: "Settings"}}/>

      <View style={styles.settingItem}>
        <Text style={[styles.label, darkMode && styles.darkText]}>Dark Mode</Text>
        <Switch
          onValueChange={toggleDarkMode}
          value={darkMode}
          trackColor={{ false: "#A3A3A3", true: "#404040" }}
          thumbColor={darkMode ? "#ffffff" : "#000000"}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffffff",
  },
  darkContainer: {
    backgroundColor: "#121212",
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
  label: {
    fontSize: 18,
    color: "#000000",
  },
  darkText: {
    color: "#ffffff",
  },
});
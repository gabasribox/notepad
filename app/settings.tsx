import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Switch, StyleSheet } from "react-native";

export default function Settings() {
  const [ darkMode, setDarkMode ] = useState(false);

  const toggleSwitch = () => setDarkMode((previous_state) => !previous_state);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>
        Dark Mode
      </Text>
      <Switch onValueChange={toggleSwitch} value={darkMode}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16},
  label: {fontSize: 18, marginBottom: 8}
})
import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../components/themeprovider";

export default function SearchBar() {
  const [ query, setQuery ] = useState("");
  const { darkMode } = useTheme();
  const { themeStyles } = useTheme();

  return (
    <View style={themeStyles.searchInput}>
      <Ionicons name="search" size={20} color={darkMode ? "#ffffff" : "#000000"} style={styles.icon}/>
      <TextInput
        style={styles.input}
        placeholder="Search Note"
        placeholderTextColor={darkMode ? "#cccccc" : "#666666"}
        value={query}
        onChangeText={setQuery}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row", 
    alignItems: "center", 
    backgroundColor: "#eeeeee", 
    borderRadius: 12, 
    paddingHorizontal: 8, 
    paddingVertical: 8,  
    marginRight: 16
  },
  icon: {marginRight: 8},
  input: {flex: 1, fontSize: 16},
})
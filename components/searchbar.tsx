import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar() {
  const [ query, setQuery ] = useState("");

  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="#999999" style={styles.icon}/>
      <TextInput
        style={styles.input}
        placeholder="Search Note"
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
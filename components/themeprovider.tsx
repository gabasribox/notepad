import { useThemeStore } from "../stores/themestore";
import { StyleSheet } from "react-native";

export const useTheme = () => {
  const { darkMode } = useThemeStore();

  const themeStyles = StyleSheet.create({
    container: {
      backgroundColor: darkMode ? "#121212" : "#ffffff",
    },
    title: {
      color: darkMode ? "#ffffff" : "#000000",
      fontWeight: "600"
    },
    text: {
      color: darkMode ? "#ffffff" : "#000000",
    },
    input: {
      backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
    },
    titleInput: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
      paddingBottom: 8,
    },
    contentInput: {
    flex: 1,
    fontSize: 18,
    textAlignVertical: "top",
    paddingTop: 0,
  },
    searchInput: {
      flex: 1,
      backgroundColor: darkMode ? "#262626" : "#f5f5f5",
      flexDirection: "row", 
      alignItems: "center", 
      borderRadius: 12, 
      paddingHorizontal: 8, 
      paddingVertical: 8,  
      marginRight: 16
    },
    header: {
      backgroundColor: darkMode ? "#1f1f1f" : "#ffffff",
    },
    placeholderColor: {
      color: darkMode ? "#666" : "#999"
    },
    button: {
      backgroundColor: darkMode ? "#ffffff" : "#000000",
    },
    card: {
      backgroundColor: darkMode ? "#262626" : "#f5f5f5",
      padding: 16,
      borderRadius: 12,
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    }
  });

  return { darkMode, themeStyles };
};
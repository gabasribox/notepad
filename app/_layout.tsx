import { Stack } from "expo-router";
import { useTheme } from "../components/themeprovider";

export default function Layout() {
  const { darkMode, themeStyles } = useTheme();

  return (
    <Stack
      screenOptions={{
        navigationBarColor: darkMode ? "#000000" : "#ffffff",
        headerStyle: {
          backgroundColor: themeStyles.header.backgroundColor,
        },
        headerTintColor: themeStyles.text.color,
        contentStyle: {
          backgroundColor: themeStyles.container.backgroundColor,
        },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false}}/>
      <Stack.Screen name="new" options={ {title: "New Note"}}/>
      <Stack.Screen name="[id]" options={ {title: "Note"}}/>
    </Stack>
  );
}
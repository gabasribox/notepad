import { Stack } from "expo-router";
import { useTheme } from "../components/themeprovider";

export default function Layout() {
  const { themeStyles } = useTheme();

  return (
    <Stack
      screenOptions={{
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
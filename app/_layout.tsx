import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false}}/>
      <Stack.Screen name="new" options={ {title: "New Note"}}/>
      <Stack.Screen name="[id]" options={ {title: "Note"}}/>
    </Stack>
  );
}
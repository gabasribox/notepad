import { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useNoteStore } from "../../stores/notestore";
import { useRouter } from "expo-router";
import { Stack } from "expo-router";
import { useTheme } from "../../components/themeprovider";

export default function NewNote() {
  const { themeStyles } = useTheme();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addNote } = useNoteStore();
  const router = useRouter();

  const handleSave = () => {
    if (title.trim() || content.trim()) {
      addNote({
        id: Date.now(),
        title: title.trim(),
        content: content.trim(),
      });
      router.back();
    }
  };

  return (
    <View style={[themeStyles.container, styles.container]}>
      <Stack.Screen
        options={{
          title: "",
          headerRight: () => (
            <Text style={styles.saveButton} onPress={handleSave}>
              Save
            </Text>
          ),
        }}
      />

      <TextInput
        style={[
          themeStyles.titleInput, 
          { color: themeStyles.text.color }
        ]}
        placeholder="Note Title"
        value={title}
        onChangeText={setTitle}
        placeholderTextColor="#999"
      />

      <TextInput
        style={[
          themeStyles.contentInput, 
          { color: themeStyles.text.color }
        ]}
        placeholder="Start writing..."
        value={content}
        onChangeText={setContent}
        multiline
        placeholderTextColor="#999"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  saveButton: {
    color: "#007AFF",
    fontWeight: "500",
    fontSize: 20,
    marginRight: 12,
  },
  titleInput: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#ffffff",
  },
  contentInput: {
    flex: 1,
    fontSize: 18,
    textAlignVertical: "top",
    color: "#000000",
  },
});
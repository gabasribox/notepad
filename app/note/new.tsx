import { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useNoteStore } from "../../stores/notestore";
import { useRouter } from "expo-router";
import { Stack } from "expo-router";

export default function NewNote() {
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
    <View style={styles.container}>
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
        style={styles.titleInput}
        placeholder="Note Title"
        value={title}
        onChangeText={setTitle}
        placeholderTextColor="#999"
      />

      <TextInput
        style={styles.contentInput}
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
    backgroundColor: "#ffffff",
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
    color: "#000000",
  },
  contentInput: {
    flex: 1,
    fontSize: 18,
    textAlignVertical: "top",
    color: "#000000",
  },
});
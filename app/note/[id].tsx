import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { useNoteStore } from "../../stores/notestore";

export default function NoteDetail() {
  const { id } = useLocalSearchParams();
  const { notes, updateNote } = useNoteStore();

  const note = notes.find(n => n.id.toString() === id);
  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note?.title || "");
  const [editedContent, setEditedContent] = useState(note?.content || "");

  if (!note) {
    return (
      <View style={styles.container}>
        <Text>Note not found.</Text>
      </View>
    );
  }

  const handleSave = () => {
    updateNote({
      ...note,
      title: editedTitle,
      content: editedContent,
    });
    setEditing(false);
  }

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: editing ? "Editing Note" : "",
          headerRight: () => (
            editing ? (
              <TouchableOpacity 
                onPress={handleSave}
                style={styles.headerButtonContainer}
              >
                <Text style={styles.headerButtonText}>Save</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity 
                onPress={() => setEditing(true)}
                style={styles.headerButtonContainer}
              >
                <Text style={styles.headerButtonText}>Edit</Text>
              </TouchableOpacity>
            )
          ),
        }}
      />

      {editing ? (
        <>
          <TextInput
            style={styles.titleInput}
            value={editedTitle}
            onChangeText={setEditedTitle}
            placeholder="Note Title"
            placeholderTextColor="#999"
            autoFocus
          />
          <TextInput
            style={styles.contentInput}
            value={editedContent}
            onChangeText={setEditedContent}
            multiline
            placeholder="Note Content"
            placeholderTextColor="#999"
          />
        </>
      ) : (
        <>
          <Text style={styles.title}>{note.title || "Untitled Note"}</Text>
          <Text style={styles.content}>{note.content}</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffffff"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000000"
  },
  content: {
    fontSize: 18,
    lineHeight: 24,
    color: "#000000"
  },
  titleInput: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000000",
    paddingBottom: 8,
  },
  contentInput: {
    flex: 1,
    fontSize: 18,
    lineHeight: 24,
    color: "#000000",
    textAlignVertical: "top",
    paddingTop: 0,
  },
  headerButtonContainer: {
    marginRight: 16,
    minWidth: 60,
    alignItems: 'flex-end',
  },
  headerButtonText: {
    color: "#007AFF",
    fontSize: 18,
    fontWeight: "500",
  },
});
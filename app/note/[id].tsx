import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { useNoteStore } from "../../stores/notestore";
import { useTheme } from "../../components/themeprovider";

export default function NoteDetail() {
  const { id } = useLocalSearchParams();
  const { notes, updateNote } = useNoteStore();
  const { themeStyles } = useTheme();
  const { darkMode } = useTheme();

  const note = notes.find(n => n.id.toString() === id);
  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note?.title || "");
  const [editedContent, setEditedContent] = useState(note?.content || "");

  if (!note) {
    return (
      <View style={[styles.container, themeStyles.container]}>
        <Text style={themeStyles.text}>Note not found.</Text>
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
    <View style={[styles.container, themeStyles.container]}>
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
          headerStyle: {
            backgroundColor: themeStyles.header.backgroundColor,
          },
          headerTintColor: themeStyles.text.color,
        }}
      />

      {editing ? (
        <>
          <TextInput
            style={[
              themeStyles.titleInput, 
              { color: themeStyles.text.color }
            ]}
            value={editedTitle}
            onChangeText={setEditedTitle}
            placeholder="Note Title"
            placeholderTextColor={darkMode ? "#cccccc" : "#666666"}
            autoFocus
          />
          <TextInput
            style={[
              themeStyles.contentInput,
              { color: themeStyles.text.color }
            ]}
            value={editedContent}
            onChangeText={setEditedContent}
            multiline
            placeholder="Note Content"
            placeholderTextColor={darkMode ? "#cccccc" : "#666666"}
          />
        </>
      ) : (
        <>
          <Text style={[styles.title, themeStyles.text]}>
            {note.title || "Untitled Note"}
          </Text>
          <Text style={[styles.content, themeStyles.text]}>
            {note.content}
          </Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  content: {
    fontSize: 18,
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
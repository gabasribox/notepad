import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import { useNoteStore } from "../stores/notestore";
import { Ionicons } from "@expo/vector-icons";

interface NoteCardProps {
  note: {
    id: number;
    title: string;
  };
}

export default function NoteCard({ note }: NoteCardProps) {
  const router = useRouter();
  const { deleteNote } = useNoteStore();

  const handleDelete = () => {
    Alert.alert(
      "Delete Note",
      "Are you sure you want to delete this note?",
      [
        {text: "Cancel", style: "cancel"},
        {text: "Delete", onPress: () => deleteNote(note.id), style: "destructive"}
      ]
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={() => router.push(`/note/${note.id}`)}
        style={styles.card}
      >
        <Text style={styles.title} numberOfLines={1}>
          {note.title || "Untitled Note"}
        </Text>
        
        <TouchableOpacity 
          onPress={handleDelete}
          style={styles.deleteButton}
        >
          <Ionicons name="trash-bin-outline" size={20} color="#000000" />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 12,
  },
  card: {
    backgroundColor: "#e5e5e5",
    padding: 16,
    borderRadius: 12,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
    marginRight: 10,
  },
  deleteButton: {
    padding: 4,
  },
});
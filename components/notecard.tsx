import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

interface NoteCardProps {
  note: {
    id: number;
    title: string;
  };
}

export default function NoteCard({ note }: NoteCardProps) {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.push(`/note/${note.id}`)}>
      <View style={styles.card}>
        <Text style={styles.title}>
          {note.title || "Untitled Note"}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {backgroundColor: "#f0f0f0", padding: 16, borderRadius: 12, marginBottom: 12, width: "100%"},
  title: { fontSize: 16, fontWeight: "600"},
});
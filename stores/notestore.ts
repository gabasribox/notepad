import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Note = {
  id: number;
  title: string;
  content: string;
};

type NoteStore = {
  notes: Note[];
  addNote: (note: Note) => void;
  deleteNote: (id: number) => void;
  updateNote: (updatedNote: Note) => void;
};

export const useNoteStore = create<NoteStore>()(
  persist(
    (set) => ({
      notes: [],
      addNote: (note) => set((state) => ({
        notes: [...state.notes, { ...note, id: Date.now() }]
      })),
      deleteNote: (id) => set((state) => ({
        notes: state.notes.filter((note) => note.id !== id)
      })),
      updateNote: (updatedNote) => set((state) => ({
        notes: state.notes.map((note) => 
          note.id === updatedNote.id ? updatedNote : note
        )
      })),
    }),
    {
      name: 'note-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
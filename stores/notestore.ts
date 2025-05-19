import { create } from "zustand";

type Note = {
  id: number;
  title: string;
  content: string;
};

type NoteStore = {
  notes: Note[];
  addNote: (note: Note) => void;
  deleteNote: (id: number) => void;
};

export const useNoteStore = create<NoteStore>((set) => ({
  notes: [],
  addNote: (note) => set((state) => ({
    notes: [...state.notes, note]
  })),
  deleteNote: (id) => set((state) => ({
    notes: state.notes.filter((note) => note.id !== id)
  })),
}));
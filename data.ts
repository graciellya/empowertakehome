const LOCAL_STORAGE_KEY = "notes";

export function getNotes() {
  if (typeof window === "undefined") {
    return []; 
  }
  const storedNotes = localStorage.getItem(LOCAL_STORAGE_KEY);
  return storedNotes ? JSON.parse(storedNotes) : [];
}


export function addNote(name: string, note: string) {
  const newNote = { id: Date.now(), name, note };
  const notes = getNotes();
  notes.push(newNote);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
  return newNote;
}

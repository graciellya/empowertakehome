import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { getNotes } from "../data"; 

export function SavedNotes() {
    const [savedNotes, setSavedNotes] = useState<{ id: number; name: string; note: string }[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        setSavedNotes(getNotes());
    }, []);

    return (
        <main className="max-w-3xl mx-auto p-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Saved Notes</h1>

            <div className="bg-white border p-4 rounded-lg shadow">
                {savedNotes.length > 0 ? (
                    savedNotes.map((note, index) => (
                        <div key={note.id || index} className="mb-6 pb-2 border-b last:border-none">
                            <h2 className="text-lg font-semibold text-gray-800">{note.name}</h2>
                            <p className="text-gray-700 whitespace-pre-wrap">{note.note}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No notes saved yet.</p>
                )}
            </div>

            <button
                onClick={() => navigate("/")}
                className="mt-6 bg-gray-600 text-white p-2 rounded-lg hover:bg-blue-700"
            >
                Back to Canvassing Page
            </button>
        </main>
    );
}

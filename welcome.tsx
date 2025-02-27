import empowerlogo from "app/welcome/EmpowerProject_Logo_Primary_White.png";
import { useState} from "react";
import { useNavigate } from "react-router"

export function Welcome() {
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const navigate = useNavigate();


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const existingNotes = JSON.parse(localStorage.getItem("savedNotes") || "[]");

    if (!Array.isArray(existingNotes)) {
      console.error("Invalid localStorage format:", existingNotes);
      localStorage.setItem("savedNotes", JSON.stringify([]));
    }
  
    const newNote = { name, notes };
  
    localStorage.setItem("savedNotes", JSON.stringify([...existingNotes, newNote]));
      
    setName("");
    setNotes("");
  };
  

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
    <div className="flex-1 flex flex-col items-center gap-8 min-h-0 max-w-lg w-full">
      
      
      <header className="flex flex-col items-center gap-6">
        <div className="w-[200px] max-w-[100vw] p-4">
          <img
            src={empowerlogo}
            alt="Empower Project Logo"
            className="w-full"
          />
        </div>
      </header>

      
      <h1 className="text-2xl font-bold text-white-800">Canvassing Notes</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full space-y-4 p-6 border border-gray-300 rounded-3xl shadow-lg"
      >
        <label className="block text-white-700">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter person's name"
            className="mt-1 w-full p-2 border rounded-lg"
            required
          />
        </label>

        <label className="block text-white-700">
          Notes:
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Enter your notes here..."
            className="mt-1 w-full p-2 h-32 border rounded-lg"
            required
          ></textarea>
        </label>

        <button
          type="submit"
          className="w-full bg-gray-600 text-white p-2 rounded-lg hover:bg-blue-700"
        >
          Save Notes
        </button>
      </form>
      <button
          onClick={() => navigate("/saved_notes")}
          className="w-full bg-black-600 text-white p-2 rounded-lg hover:bg-blue-700 mt-4"
        >
          View all notes
        </button>
    </div>
  </main>
);
}


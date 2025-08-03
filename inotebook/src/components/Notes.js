import React, { useEffect, useContext, useState } from "react";
import NoteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./Loading";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, getNotes, editNote } = context;
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchNotes = async () => {
      if (localStorage.getItem("token")) {
        setLoading(true);
        await getNotes();
        setLoading(false);
      } else {
        navigate("/login");
      }
    };
    fetchNotes();
    // eslint-disable-next-line
  }, []);

  const updateNote = (currentNote) => {
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
    setIsModalOpen(true);
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    editNote(note.id, note.etitle, note.edescription, note.etag);
    setNote({ id: "", etitle: "", edescription: "", etag: "" });
    toast.success("Updated Successfully");
    setIsModalOpen(false);
  };

  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 -z-10"
        options={{
          fullScreen: false,
          background: { color: { value: "#073b4c" } },
          particles: {
            number: { value: 80, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.2 },
            size: { value: 2, random: true },
            links: {
              enable: true,
              color: "#ffffff",
              distance: 130,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              outModes: { default: "bounce" },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              grab: { distance: 140, links: { opacity: 0.3 } },
              push: { quantity: 3 },
            },
          },
          detectRetina: true,
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 py-8">
        <AddNote />

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0  bg-opacity-70 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="bg-edit_note text-gray-950 rounded-lg shadow-lg w-full max-w-md p-6">
              <h2 className="text-xl text-center font-semibold mb-4">EDIT NOTE</h2>
              <form>
                <div className="mb-4">
                  <label className="block font-medium">TITLE</label>
                  <input
                    type="text"
                    name="etitle"
                    value={note.etitle}
                    onChange={onChange}
                    className="w-full mt-1 p-2 border rounded"
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-medium">DESCRIPTION</label>
                  <input
                    type="text"
                    name="edescription"
                    value={note.edescription}
                    onChange={onChange}
                    className="w-full mt-1 p-2 border rounded"
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-medium">TAG</label>
                  <input
                    type="text"
                    name="etag"
                    value={note.etag}
                    onChange={onChange}
                    className="w-full mt-1 p-2 border rounded"
                  />
                </div>
              </form>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-brand-dark text-white rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleClick}
                  disabled={note.etitle.length < 5 || note.edescription.length < 5}
                  className="px-4 py-2 bg-brand-dark text-white rounded disabled:opacity-50"
                >
                  Update Note
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="my-6 ">
          <h2 className=" text-2xl text-brand-light font-semibold mb-3 mx-3 text-center ">Your Notes</h2>
          {loading ? (
            <Loading />
          ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
  {notes.length === 0 && <p>No notes to display</p>}
  {notes.map((note) => (
    <Noteitem key={note._id} updateNote={updateNote} note={note} />
  ))}
</div>

          )}
        </div>
      </div>
    </div>
  );
};

export default Notes;

import React, { useEffect, useContext } from "react";
import NoteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes,getNotes } = context;
 useEffect(() => {
  getNotes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  return (
    <>
    <AddNote/>
    <div className="row my-3">
      <h2>Your notes</h2>
    {notes.map((note) => (
  <Noteitem key={note._id} note={note} />
      ))}
    </div>
    </>
  );
};

export default Notes;

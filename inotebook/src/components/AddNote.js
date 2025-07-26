import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/noteContext";

const AddNote = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", desc: "", tag: "default" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.desc, note.tag);

    setNote({ title: "", desc: "", tag: "default" });
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-3">
      <h2>Add a Note</h2>
      <form className="my-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={note.title}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            name="desc"
            value={note.desc}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag (optional)
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            value={note.tag}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;

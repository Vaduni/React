import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const context = useContext(NoteContext);
  const { note, updateNote } = props;
  const { deleteNote } = context;

  return (
    <div className="w-full">
      <div className="card my-1 shadow-md bg-stone-400">
        <div className="card-body">
          <div className="d-flex align-items-start justify-content-between">
            <h5 className="card-title font-bold">{note.title}</h5>
            <div>
              <i
                className="fa-solid fa-pen-to-square text-emerald-700 mx-2 cursor-pointer"
                onClick={() => updateNote(note)}
              ></i>
              <i
                className="fa-solid fa-trash text-danger mx-2 cursor-pointer"
                onClick={() => deleteNote(note._id)}
              ></i>
            </div>
          </div>
          <p className="card-text mt-2">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
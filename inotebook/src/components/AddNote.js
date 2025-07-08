import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/noteContext";
const AddNote = () => {
     const context = useContext(NoteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", desc: "", tag: "default" }); 
  const handleClick = (e) => { 
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
  }
  const onChange=(e)=>{
setNote({ ...note, [e.target.name]: e.target.value });
  }
  return (

 <div className="container my-3">
      <h2>Add a note</h2>
      <form className="my-3">
        <div class="mb -3">
          <label for="title" class="form-label">
           Title
          </label>
          <input
            type="text"
            class="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp" onChange={onChange}
          />
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">
        Description
          </label>
          <input
            type="text "
            class="form-control"
            name="desc"
            id="description" onChange={onChange}/>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary" onClick={handleClick}>
        Add Note
        </button>
      </form>
      </div>
  )
}

export default AddNote
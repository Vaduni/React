import React, {useContext, useState} from 'react'
import noteContext from "../context/notes/noteContext"
import { toast } from 'react-toastify';

const AddNote = (props) => {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title: "", description: "", tag: ""})

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""});
toast.success("Note added successfully");
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <div className="container my-3">
            <h2 className="font-extrabold text-center text-emerald-600 text-2xl mb-6" >Add a Note</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label font-extrabold text-emerald-600">Title</label>
                    <input type="text" className="form-control bg-stone-400" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label  font-extrabold text-emerald-600">Description</label>
                    <input type="text" className="form-control bg-stone-400" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label font-extrabold   text-emerald-600">Tag</label>
                    <input type="text" className="form-control bg-stone-400" id="tag" name="tag" value={note.tag} onChange={onChange} minLength={5} required />
                </div>
               
               <button
  disabled={note.title.length < 5 || note.description.length < 5}
  type="submit"
  onClick={handleClick}
  className={`px-4 py-2 rounded-md font-semibold text-white transition duration-200 ${
    note.title.length < 5 || note.description.length < 5
      ? "bg-emerald-600 opacity-50 cursor-not-allowed"
      : "bg-emerald-600 hover:bg-stone-600"
  }`}
>
  Add Note
</button>
            </form>
        </div>
    )
}

export default AddNote
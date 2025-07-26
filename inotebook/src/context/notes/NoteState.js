import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const host = "http://localhost:8000";
  const [notes, setNotes] = useState([]); 

const getNotes = async () => {
  try {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg0NThkMDg0YWUyNDg1NzljODQ4ZTg3In0sImlhdCI6MTc0OTM4ODU1Mn0.0aThnnexQfNoD49n1HpTUeEdoLt1pZf-ZOjGeViKiTU",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      console.error("Error fetching notes:", json.error);
      setNotes([]);
      return;
    }

    console.log("Fetched notes:", json);
    setNotes(json);
  } catch (err) {
    console.error("Fetch failed:", err);
    setNotes([]);
  }
};


  // Add a note
  const addNote = async (title, description, tag) => {
    //API call to add a note
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
       "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg0NThkMDg0YWUyNDg1NzljODQ4ZTg3In0sImlhdCI6MTc0OTM4ODU1Mn0.0aThnnexQfNoD49n1HpTUeEdoLt1pZf-ZOjGeViKiTU",
      },
      body: JSON.stringify({ title, description, tag }),
    });
   const newNote = await response.json();
  setNotes(notes.concat(newNote));
  };
  //Delete a note
  const deleteNote = async(id) => {
    //API call to delete a note
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
       "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg0NThkMDg0YWUyNDg1NzljODQ4ZTg3In0sImlhdCI6MTc0OTM4ODU1Mn0.0aThnnexQfNoD49n1HpTUeEdoLt1pZf-ZOjGeViKiTU",
      },
    });
    const json=response.json();
    console.log( json);

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  //Edit a note
  const editNote = async (id, title, description, tag) => {
    //API call to edit a note
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
       "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg0NThkMDg0YWUyNDg1NzljODQ4ZTg3In0sImlhdCI6MTc0OTM4ODU1Mn0.0aThnnexQfNoD49n1HpTUeEdoLt1pZf-ZOjGeViKiTU",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    await response.json();
    let newNotes = JSON.parse(JSON.stringify(notes));
    //logic to edit a note
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;

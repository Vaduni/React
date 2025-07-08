
import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const initialNotes = [
     {
    "_id": "6845bc98b72e7dc75f2ac490",
    "user": "68458d084ae248579c848e87",
    "title": "Dream Big with open eyes",
    "description": "Work smarter and harder to turn your dream into reality",
    "tag": "motivation",
    "date": "2025-06-08T16:38:48.094Z",
    "__v": 0
  },{
    "_id": "6845bc98b72e7dc75f2ac490",
    "user": "68458d084ae248579c848e87",
    "title": "Dream Big with open eyes",
    "description": "Work smarter and harder to turn your dream into reality",
    "tag": "motivation",
    "date": "2025-06-08T16:38:48.094Z",
    "__v": 0
  },{
    "_id": "6845bc98b72e7dc75f2ac490",
    "user": "68458d084ae248579c848e87",
    "title": "Dream Big with open eyes",
    "description": "Work smarter and harder to turn your dream into reality",
    "tag": "motivation",
    "date": "2025-06-08T16:38:48.094Z",
    "__v": 0
  },{
    "_id": "6845bc98b72e7dc75f2ac490",
    "user": "68458d084ae248579c848e87",
    "title": "Dream Big with open eyes",
    "description": "Work smarter and harder to turn your dream into reality",
    "tag": "motivation",
    "date": "2025-06-08T16:38:48.094Z",
    "__v": 0
  },{
    "_id": "6845bc98b72e7dc75f2ac490",
    "user": "68458d084ae248579c848e87",
    "title": "Dream Big with open eyes",
    "description": "Work smarter and harder to turn your dream into reality",
    "tag": "motivation",
    "date": "2025-06-08T16:38:48.094Z",
    "__v": 0
  }
  ];
  const [notes, setNotes] = useState(initialNotes);

  // Add a note
  const addNote = (title, description, tag) => {
    const note = {
      title,
      description,
      tag,
    };
    setNotes(notes.concat(note));
  };
  //Delete a note 
const deleteNote = (id) => {
  const newNotes = notes.filter((note) => {return note._id !== id});
  setNotes(newNotes);
}
 //Edit a note
const editNote=async(id,title,description,tag)=>{
   //API call to edit a note

   //logic to edit a note
  for(let index=0;index<notes.length;index++){
    const element=notes[index];
    if(element._id===id){
      element.title=title;
      element.description=description;
      element.tag=tag;
    }
  }

}
  return (
    <NoteContext.Provider value={{ notes, addNote ,deleteNote,editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};


export default NoteState;

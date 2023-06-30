import React,{useState} from 'react';
import './App.css';
import CreateArea from './components/CreateArea';
import Header from './components/Header';
import Note from './components/Note'

function App() {
  const [notes,setNotes] = useState([]);

  //get argument from CreateArea component 
  function addNote(newNote){
    //add new note into the array "notes" after it's previous values
      setNotes((prevNotes)=>{
        return[
          ...prevNotes,
          newNote
        ]
      });
  }

  console.log(notes);

  function deleteNote(id){
    setNotes((prevNotes)=>{
      return prevNotes.filter((noteItem,index)=>{
        return index!==id;
      });
    });
  }

  return (
    <div className="App">
      <Header/>
      <CreateArea onAdd={addNote}/>
      {
        notes.map((noteItem,index)=>{
          console.log(noteItem);
          return <Note key={index} 
                       title={noteItem.title} 
                       content={noteItem.content}
                       id={index}
                       onDelete={deleteNote} 
                       />;
        })
      }
    </div>
  );
}

export default App;

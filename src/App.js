import './App.css';
import NoteView from './NoteView';
import SearchBar from './Searchbar';
import { useState, useEffect } from 'react';
import { addNote,deleteNote } from './NoteReducer';
import store from './store';

function App() {

//Input note title
  const [note,setNote] = useState('');

//Input note content
  const [noteContent,setNoteContent] = useState('');
// ID counter
  const [arrId,setArrId] = useState(1);

//Array state
const [arr,setArr] = useState([]);

//note array  using redux getState function
const notes = store.getState().notes;

//Every statechange log the array
useEffect(()=>{
  console.log(arr)
},[arr])

//Notitie toevoegen
  function add_note(){
    setArrId(arrId + 1);
    setArr([...arr,{id:arrId,text:note, content:noteContent}]);
    setNote('');
    setNoteContent('');
    store.dispatch(addNote({id:arrId,text:note,content:noteContent}))
    console.log(store.getState().notes)
  }

//Bijhouden wanneer het input veld wijzigt
  function change_note(e){
    e.preventDefault();
    setNote(e.target.value);
  }

  function change_note_content(e){
    e.preventDefault();
    setNoteContent(e.target.value);
  }

//Notitie verwijderen
function del_note(e){
  setArr(arr.filter(item => item.id !== e.target.parentElement.id))
  console.log(e.target.id)
  store.dispatch(deleteNote(e.target.id))
}


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Note taker
        </p>
        <SearchBar add={add_note} change_note={change_note} current_note={note} current_note_content={noteContent} change_note_content={change_note_content}/>
        <NoteView arr={notes} del_butt={del_note}/>
      </header>
    </div>
  );
}

export default App;

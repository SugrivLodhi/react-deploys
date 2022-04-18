import './App.css';
import {useEffect, useState} from 'react';
import { nanoid } from 'nanoid'
import NoteList from './component/NoteList'; 
import Search from './component/Search';
import Header from './component/Header';


function App() {
  const [notes,setNotes] =useState([
    {
    id:nanoid(),
    text:"This is my first Note",
    newDate: new Date().toLocaleDateString()
   },
   {
    id: nanoid(),
    text:"This is my second Note",
    newDate: new Date().toLocaleDateString()
   },
   {
    id: nanoid(),
    text:"This is my third Note",
    newDate: new Date().toLocaleDateString()
   },
   {
    id: nanoid(),
    text:"This is my forth  Note",
    newDate: new Date().toLocaleDateString()
   },
   {
    id: nanoid(),
    text:"This is my NewNote  Note",
    newDate: new Date().toLocaleDateString()
   }
])
//search The particular notes in all note and strategy is 
//filter the text contains in note befre passto note list
  const [searchText,setSerchNotes] = useState('')

  const [darkMode,setDarkMode] = useState(false);
     
  useEffect(()=>{
           const saveNotes =JSON.parse(
             localStorage.getItem('all-react-notes'))
           if(saveNotes){
              setNotes(saveNotes)
           } 
         },[])

  useEffect(() =>{
     localStorage.setItem('all-react-notes',JSON.stringify(notes))
  },[notes])

  //Edit The Note
  // const EditNote= (id) =>{
  //   const edit_notes= notes.find((data) =>{
  //    return data.id==id
  //   })
  //   hanldeEdit(edit_notes.text)
  // }

//Add Notes 
  const AddNewNote = (text) =>{
     const newNote={
       id : nanoid(),
       text : text,
       newDate : new Date().toLocaleDateString()
     }
     const allNode = [...notes,newNote];
     setNotes(allNode)
  }

  
  //Delete the Notes 
  const deleteNote =(id) =>{
     const updatedNotes = notes.filter((note) => note.id !== id )
     setNotes(updatedNotes);
  }

    return (
      <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
      <Header handleDarkMode = {setDarkMode} />
       <Search handleSearchNotes={setSerchNotes}/>
      <NoteList notes={notes.filter((note) =>note.text.toLowerCase().includes(searchText))} 
      handleAddNotes={AddNewNote}
      handleDeleteNote={deleteNote}  
      alldata={notes}
      />
    </div>  
    </div>
  );
}
export default App;

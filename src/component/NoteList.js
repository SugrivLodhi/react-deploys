import Notes from "./Notes"
import AddNotes from "./AddNotes"
const NoteList = ({notes,handleAddNotes,handleDeleteNote,hanldeEdit,alldata}) =>{
   return(
    <div className="note-list">
    {
      notes.map((note) =>{
        return(
          <Notes id = {note.id}
              text = {note.text}
              date = {note.newDate}
              handleDeleteNote ={handleDeleteNote}
              hanldeEdit={hanldeEdit}
                alldata={alldata} 
              />
        )
       })
    }
    <AddNotes handleAddNotes={handleAddNotes}/>
  </div>
   )
}
export default NoteList
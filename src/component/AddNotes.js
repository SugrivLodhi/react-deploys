import { useState } from "react"
const AddNotes = ({handleAddNotes}) =>{

    const [textNote,setTextNote] = useState('');
    const charLimit = 200;
    const onChangeHandler = (e) =>{
        if(charLimit-textNote.length>0){
          setTextNote(e.target.value)
        }
     }
           
    
    const onclickHandler = () =>{
          if(textNote.trim().length>0){
            handleAddNotes(textNote);
            setTextNote("")       
             }
    }

    return(
        <div className = 'notes-container newNotes'>
         <div className ='text-area'>
           <textarea  cols="25" rows="8" 
            placeholder="Type To Add Notes..."
            value={textNote}
            onChange ={onChangeHandler}
           >
            </textarea> 
           </div>
           <div className ='footer-area'>
             <span>{charLimit-textNote.length}</span>
             <button className="save" onClick={onclickHandler}>Save</button>
             </div>
       </div>  
    )
}

export default AddNotes
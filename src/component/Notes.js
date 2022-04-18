const Notes = ({id,text,date,handleDeleteNote})=>{

     
    
   return (
       <div className = 'notes-container'>
             <div className="text-area">
             <span>{text}</span>
             </div>
             <div className ='footer-area'>
             <span>{date}</span>
             {/* <button onClick={() =>EditNote(id)}>Edit</button> */}
             <button onClick={() =>handleDeleteNote(id)}>Delete</button>
             </div>
       </div>  
   )
} 
export default Notes
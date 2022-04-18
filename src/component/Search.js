const Search = ({handleSearchNotes}) =>{
    return(
        <div className="search-box">
        <input type="text"  placeholder="Type  to search notes... "
         onChange={(event) =>handleSearchNotes(event.target.value)}/>
        </div>
    )
} 
export default Search
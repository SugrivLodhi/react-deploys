const Header = ({handleDarkMode}) =>{
    return(
        <div className="header">
         <h1>Notes</h1>
         <button className="toogle"
          onClick={ () => handleDarkMode((prevMode) => !prevMode)}>Toogle</button>
        </div>
    )
}
export default Header
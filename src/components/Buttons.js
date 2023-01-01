import {useTheme} from '../context/ThemeContext'

function Buttons() {
    const {theme,setTheme} = useTheme();
  return (
    <div>
        <p>Buttons components</p>
        Aktive Theme : {theme}
        <br></br>
        <button onClick={()=> setTheme(theme === "light" ? "dark" : "light")}>Change Theme</button>
        </div>
  )
}

export default Buttons

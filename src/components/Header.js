import {useTheme} from '../context/ThemeContext'

function Header() {
    const {theme,setTheme} = useTheme();
  return (
    <div>
        <p>Header components</p>
        Aktive Theme : {theme}
        <br></br>
        <button onClick={()=> setTheme(theme === "light" ? "dark" : "light")}>Change Theme</button>
        </div>
  )
}

export default Header

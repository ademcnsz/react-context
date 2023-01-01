import {useState } from "react"
import {useUser} from "../context/UserContext"

function Profile() {
    
   const [loading,setLoading] = useState(false)
    
    const {user,setUser} = useUser();
    const handleLogin = ()=>{
        setLoading(true);
        setTimeout(()=>{
            setUser(({
                id:"1",
                username:"2",
                bio:"very handsome",
            }))
        setLoading(false);
        },1500)
    }
    
    const hanldeLogout = ()=>{
        setUser(null)
    }

    return (
    <div>
        <div>
            {
                !user &&  <button onClick={handleLogin}>{loading ? "loading..." : "login"}</button>
            }
        </div>
        <br></br>     
      <code>{JSON.stringify(user)}</code>
      <br></br>
      <div>
        {
            user && <button onClick={hanldeLogout}>logout</button>
        }
      </div>
    </div>
  )
}

export default Profile

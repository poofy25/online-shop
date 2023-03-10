import Navbar from "../components/navbar/navbar"
import { auth, user } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect , useState } from "react";

function HomePage() {
let [homePageWelcome , setHomePageWelcome] = useState("Please Log In !")
let [logedUser , setLogedUser] = useState(null)

useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
        if(user){
            
            setLogedUser(user)
            console.log(logedUser)
            setHomePageWelcome(`Loged in as ${user.email}. Welcome back, ${user.displayName}`)
        } else {
            console.log("no user")
        }
    })
}, [])

  

return (
    <>
    <Navbar/>
    <div className="websiteContent">
    <h1 onClick={()=>{console.log(logedUser)}}>{homePageWelcome}</h1>
    </div>
    </>
)

}

export default HomePage
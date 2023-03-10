import Navbar from "../components/navbar/navbar"
import { auth } from "../firebase/firebase";

function HomePage() {

let homePageWelcome;

    console.log(auth.currentUser)
    if(!auth.currentUser){
        homePageWelcome = "Please Log In !"
     } else {
         homePageWelcome = `Loged in as ${auth.currentUser.email}. Welcome back, ${auth.currentUser.displayName}`
     }


    return (
        <>
        <Navbar/>
        <div className="websiteContent">
        <h1 onClick={()=>{console.log(auth.currentUser)}}>{homePageWelcome}</h1>
        </div>
        </>
    )
}

export default HomePage
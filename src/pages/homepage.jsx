import Navbar from "../components/navbar/navbar"
import { auth } from "../firebase/firebase";

function HomePage() {

let homePageWelcome;

if(auth.currentUser === null){
   homePageWelcome = "Please Log In !"
} else {
    homePageWelcome = `Loged in as ${auth.currentUser.email}. Welcome back, ${auth.currentUser.displayName}`
}

    return (
        <>
        <Navbar/>
        <h1>{homePageWelcome}</h1>
        </>
    )
}

export default HomePage
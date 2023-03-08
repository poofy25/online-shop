import Navbar from "../components/navbar/navbar"


function HomePage() {

let homePageWelcome;

if(localStorage.getItem("userName") === ""){
   homePageWelcome = "Please Log In !"
} else {
    homePageWelcome = `Welcome back , ${localStorage.getItem("userName")}`
}

    return (
        <>
        <Navbar/>
        <h1>{homePageWelcome}</h1>
        </>
    )
}

export default HomePage
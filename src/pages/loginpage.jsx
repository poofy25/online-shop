

import { auth } from "../firebase/firebase"
import LoginMenu from "../components/PageComponents/loginPAGE/loginMenu";
import Navbar from "../components/navbar/navbar"

function LoginPage() {

    
    return (
        <>
            <Navbar/>
            <div className="websiteContent">
            <LoginMenu/>
            </div>
        </>
    )
}

export default LoginPage
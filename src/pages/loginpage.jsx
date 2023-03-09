

import { auth } from "../firebase/firebase"
import LoginMenu from "../components/loginPAGE/loginMenu";
import Navbar from "../components/navbar/navbar"

function LoginPage() {

    
    return (
        <>
            <Navbar/>
            <div className="websiteContent">
            <h1>Login page</h1>
            <LoginMenu/>
            </div>
        </>
    )
}

export default LoginPage
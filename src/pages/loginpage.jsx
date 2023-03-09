

import { SignInMethod } from "firebase/auth"
import SignIn from "../components/loginPAGE/signIn"
import SignUp from "../components/loginPAGE/signUp"
import SignOut from "../components/loginPAGE/signOut"
import Navbar from "../components/navbar/navbar"

function LoginPage() {
    return (
        <div>
            <Navbar/>
            <h1>Login page</h1>
            <SignIn/>
            <SignUp/>
            <SignOut/>
        </div>
    )
}

export default LoginPage
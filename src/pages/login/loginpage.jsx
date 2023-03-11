

import { auth } from "../../firebase/firebase"
import LoginMenu from "./components/loginMenu"

function LoginPage() {

    
    return (
        <>
            <div className="websiteContent">
            <LoginMenu/>
            </div>
        </>
    )
}

export default LoginPage
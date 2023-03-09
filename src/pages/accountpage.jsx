

import { auth } from "../firebase/firebase"
import SignOut from "../components/accountPAGE/signOut"
import Navbar from "../components/navbar/navbar"

function AccountPage() {

    return (
        <div>
            <Navbar/>
            <h1>Account</h1>
            <SignOut/>
           
        </div>
    )
}

export default AccountPage
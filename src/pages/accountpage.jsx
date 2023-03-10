

import { auth } from "../firebase/firebase"
import Navbar from "../components/navbar/navbar"
import AccountMenu from "../components/accountPAGE/accountMenu"

function AccountPage() {
 
  


    return (
        <div>
            <Navbar/>
            <div className="websiteContent">
            <AccountMenu/>
            </div>
        </div>
    )
}

export default AccountPage
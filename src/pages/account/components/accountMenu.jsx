

import { auth } from "../../../firebase/firebase"
import SignOut from "./signOut"
import "../stylesheets/accountPage.css"

function AccountMenu() {
    
    return (
        <div className="accountMenu">
            <div className="accountHeader">
              <div className="backgroundPfp">
                <img src={auth.currentUser.photoURL}/>
              </div>  

              <div className="pfp">
                <img src={auth.currentUser.photoURL}/>
              </div>

              <div className="pfpName">
                <p>Hi , <br/><span>{auth.currentUser.displayName}</span></p>
              </div>
            </div>
            <div className="signOutOption">
            <SignOut/>
            </div>

            
        </div>
    )
}

export default AccountMenu
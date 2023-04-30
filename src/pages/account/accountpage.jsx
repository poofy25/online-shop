

import { auth } from "../../firebase/firebase"
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router-dom"
import AccountMenu from "./components/accountMenu";

function AccountPage() {
 
  const navigate = useNavigate()
  const [user] = useAuthState(auth);
if(user === null)  navigate("/signin")
else{

            return(
            <div>
                <div className="websiteContent">

                  <AccountMenu/>
                </div>
            </div>
            )
}
      
   
}

export default AccountPage
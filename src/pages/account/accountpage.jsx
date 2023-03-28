

import { auth } from "../../firebase/firebase"
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router-dom"
import AccountMenu from "./components/accountMenu";

function AccountPage() {
 
  const navigate = useNavigate()
  const [user, loading, error] = useAuthState(auth);


        if (user){
            return(
            <div>
                <div className="websiteContent">

                  <AccountMenu/>
                </div>
            </div>
            )
        } else {
          navigate("/login")
        }


   
}

export default AccountPage
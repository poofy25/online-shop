

import { auth } from "../firebase/firebase"
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect , useState} from "react"
import { useNavigate } from "react-router-dom"

import Navbar from "../components/navbar/navbar";
import AccountMenu from "../components/PageComponents/accountPAGE/accountMenu";

function AccountPage() {
 
  const navigate = useNavigate()
  const [user, loading, error] = useAuthState(auth);


        if (user){
            return(
            <div>
                <Navbar/>
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
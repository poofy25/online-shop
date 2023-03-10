

import { auth } from "../firebase/firebase"
import { onAuthStateChanged } from "firebase/auth"
import { useEffect , useState} from "react"
import { useNavigate } from "react-router-dom"

import Navbar from "../components/navbar/navbar"
import AccountMenu from "../components/accountPAGE/accountMenu"

function AccountPage() {
 
  const [reload , setReload] = useState()
  const navigate = useNavigate()

    useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
        if (user){
            setReload((




                <div>
                <Navbar/>
                <div className="websiteContent">
                <AccountMenu/>
                </div>
            </div>




            ))
        } else {
          navigate("/login")
        }
    })
} , [])

    return(
        <>
        {reload}
        </>
    )
}

export default AccountPage
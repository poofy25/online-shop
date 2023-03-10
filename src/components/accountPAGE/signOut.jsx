import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import signOutIcon from "/src/assets/Icons/signOutIcon.png"

function SignOut() {
 const navigate = useNavigate()
const onSignOut = ()=>{
    auth.signOut()
	
    .then(function() {
       console.log('Signout Succesfull')
       
       localStorage.setItem("userName", "")
       navigate('/login')
    }, function(error) {
       console.log('Signout Failed')  
    });
}


    return (
      <button onClick={onSignOut} className="signOutBtn">
         <img src={signOutIcon}/>
         <p>Sign out</p>
         </button>
    )
  }
  
  export default SignOut
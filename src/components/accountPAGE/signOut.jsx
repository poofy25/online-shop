import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

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
      <div className="signOut-container">
      <button onClick={onSignOut}>Sign Out</button>
      </div>
    )
  }
  
  export default SignOut
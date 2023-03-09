
import { auth } from "../../firebase/firebase"

function SignUp() {

    return (
      <div className="signUp-container">
      <button onClick={()=>{console.log(auth.currentUser)}}>Sign Up with Google</button>
      </div>
    )
  }
  
  export default SignUp
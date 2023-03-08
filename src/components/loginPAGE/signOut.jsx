import { signOutOfGoogle } from "../../firebase/firebase";

function SignOut() {




    return (
      <div className="signOut-container">
      <button onClick={()=>{signOutOfGoogle()}}>Sign Out</button>
      </div>
    )
  }
  
  export default SignOut
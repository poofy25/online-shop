import Navbar from "../../components/navbar/navbar"
import { auth } from "../../firebase/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';



function HomePage() {
const [user, loading, error] = useAuthState(auth);

 if (user){
    return (
        <>
            <Navbar/>
              <div className="websiteContent">
                 <h1 onClick={()=>{console.log(logedUser)}}>
                     {`Loged in as ${user.email}. Welcome back, ${user.displayName}`}
                 </h1>
             </div>
        </>
    )
 } else {

    return (
        <>
          <Navbar/>
              <div className="websiteContent">
                  <h1 onClick={()=>{console.log(logedUser)}}>
                     {'Please log in !'}
                </h1>
         </div>
       </>
    )
 }
 
}

export default HomePage
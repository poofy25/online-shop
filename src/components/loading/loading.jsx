import LoadingSpinner from "./LoadingSpinner"
import "./loading.css"
import { useEffect , useRef } from "react"

const Loading = ()=>{
const loadingTextRef = useRef(document.querySelector('.loadingContainer p'))
/*useEffect(()=>{
   
  const timeInterval = setInterval(()=>{
    let loadingText = loadingTextRef.current
   console.log(loadingTextRef.current)
  if(loadingText.textContent ==='Loading')loadingText.textContent = 'Loading.'
  if(loadingText.textContent ==='Loading.')loadingText.textContent = 'Loading..'
  if(loadingText.textContent ==='Loading..')loadingText.textContent = 'Loading...'
  if(loadingText.textContent ==='Loading...')loadingText.textContent = 'Loading'
  },2500)
return()=>{

}

},[])
*/

return(
    <div className="loadingContainer">

      <div class="loadingText">Loading</div>
     <LoadingSpinner/>

    </div>
)

}
export default Loading
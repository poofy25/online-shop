
import "/src/pages/catalog/styles/FilterStyles/catalogFilterColor.css"
import { useEffect } from "react"
function CatalogFilterSize(props) {
  useEffect(()=>{
    const element = document.querySelector('.filterOptionContaianer')
    setTimeout(()=>{
      console.log('mounted')
      element.classList.add('active')
    },10)
  
    return(()=>{
      console.log('unmounted')
      element.classList.remove('active')
    })
  },[])
  
    return (
         <div className="filterOptionContaianer">
           Size
         </div>
    )
 
}

export default CatalogFilterSize
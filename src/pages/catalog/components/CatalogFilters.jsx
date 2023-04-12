
import "../styles/catalogFilters.css"
import { useState , useEffect , useRef } from "react"

import CatalogFilterColorOption from "./CatalogFilterColorOption"

function CatalogFilters(props) {
 
     const FilterBtn = props.filtersBtn.current
     const catalogFilterElement = useRef(null)
     const [filterSwich , setFilterSwich] = useState(false)
     FilterBtn && (FilterBtn.onclick = () =>{
     setFilterSwich(!filterSwich)
     })



     useEffect(()=>{
    if(filterSwich){
         catalogFilterElement.current.classList.add('active')
         document.body.style.overflow = "hidden"
    }else{
        catalogFilterElement.current.classList.remove('active')
        document.body.style.overflow = "auto"
    }
     },[filterSwich])


    return (
         <div className="catalogFilters" ref={catalogFilterElement}>
           <div className="catalogFiltersShadow" onClick={()=>{setFilterSwich(false)}} ></div>
           <div className="catalogFilterHeader">
            <p>Filter</p>
            <button onClick={()=>{setFilterSwich(false)}}>
                <div></div>
                <div></div>
            </button>
           </div>
         
           <div className="catalogFilterOptions">
             <CatalogFilterColorOption/>
             <CatalogFilterColorOption/>
             <CatalogFilterColorOption/>
             <CatalogFilterColorOption/>
             <CatalogFilterColorOption/>
           </div>
         </div>
    )
 
}

export default CatalogFilters
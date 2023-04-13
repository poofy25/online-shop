
import "/src/pages/catalog/styles/FilterStyles/catalogFilter.css"
import { useState , useEffect , useRef } from "react"

import CatalogFilterOption from "./CatalogFilterBtn"
import CatalogFilterViewItemsBtn from "./CatalogFilterViewItemsBtn"

function CatalogFilter(props) {
 
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
            <p>FILTER</p>
           </div>
         
           <div className="catalogFilterOptions">
             <CatalogFilterOption name='Brand'/>
             <CatalogFilterOption name='Category'/>
             <CatalogFilterOption name='Color'/>
             <CatalogFilterOption name='Size'/>
             <CatalogFilterOption name='Price'/>
           </div>
           <CatalogFilterViewItemsBtn closeFilterMenu={setFilterSwich}/>
         </div>
    )
 
}

export default CatalogFilter
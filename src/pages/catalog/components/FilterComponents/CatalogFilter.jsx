
import "/src/pages/catalog/styles/FilterStyles/catalogFilter.css"
import { useState , useEffect , useRef } from "react"

import CatalogFilterOption from "./CatalogFilterBtn"
import CatalogFilterViewItemsBtn from "./CatalogFilterViewItemsBtn"


import CatalogFilterColor from "./CatalogFilterColor"
import CatalogFilterBrand from "./CatalogFilterBrand"
import CatalogFilterCategory from "./CatalogFilterCategory"
import CatalogFilterPrice from "./CatalogFilterPrice"
import CatalogFilterSize from "./CatalogFilterSize"

const FilterOptions = [
  {name:'Brand', element:<CatalogFilterBrand/>},
  {name:'Category', element:<CatalogFilterCategory/>},
  {name:'Color', element:<CatalogFilterColor/>},
  {name:'Size', element:<CatalogFilterSize/>},
  {name:'Price', element:<CatalogFilterPrice/>}
]

function CatalogFilter(props) {
 
     const FilterBtn = props.filtersBtn.current
     const catalogFilterElement = useRef(null)
     const [filterSwich , setFilterSwich] = useState(false)
     const [optionSelected , setOptionSelected] = useState(null)

     FilterBtn && (FilterBtn.onclick = () =>{
     setFilterSwich(!filterSwich)
     })

     useEffect(()=>{
       if(filterSwich){
         catalogFilterElement.current.classList.add('active')
         document.body.style.overflow = "hidden"
         setOptionSelected(null)
       }else{
        catalogFilterElement.current.classList.remove('active')
        document.body.style.overflow = "auto"
       }
     },[filterSwich])
     useEffect(()=>{
      console.log(optionSelected)
     },[optionSelected])

    return (
         <div className="catalogFilters" ref={catalogFilterElement}>
           <div className="catalogFiltersShadow" onClick={()=>{setFilterSwich(false)}} ></div>
           <div className="catalogFilterHeader">
           {optionSelected !== null ? 
           <>
             <button onClick={()=>setOptionSelected(null)}>
               <div></div>
               <div></div>
             </button>
             <p onClick={()=>setOptionSelected(null)}>{(optionSelected.name).toUpperCase()}</p>
           </>
           :
            <p>FILTER</p>}
           </div>
         
          {optionSelected !== null ? 
          <div className="catalogFilterOptions">
            {optionSelected.element}
          </div>
          : 
          <div className="catalogFilterOptions">
            {FilterOptions.map((option , index)=>{
              return(
                <CatalogFilterOption key={index} name={option.name} element={option.element} setOptionSelected={setOptionSelected}/>
              )
            })}
           </div>
          }
           <CatalogFilterViewItemsBtn closeFilterMenu={setFilterSwich}/>
         </div>
    )
 
}

export default CatalogFilter
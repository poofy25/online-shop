
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
         catalogFilterElement.current.classList.add('on')
         document.body.style.overflow = "hidden"
         setOptionSelected(null)
       }else{
        catalogFilterElement.current.classList.remove('on')
        document.body.style.overflow = "auto"
       }
     },[filterSwich])
     useEffect(()=>{
      if(optionSelected !== null){
        document.querySelector('.catalogFiltersSecond').classList.add('Active')
        document.querySelector('.catalogFiltersFirst').classList.remove('Active')
      }

      if(optionSelected === null){
        document.querySelector('.catalogFiltersSecond').classList.remove('Active')
        document.querySelector('.catalogFiltersFirst').classList.add('Active')
      }

     },[optionSelected])





    return (
      <div className="catalogFilterMenu"  ref={catalogFilterElement}>
        <div className="catalogFiltersContainer">
         <div className="catalogFiltersFirst">
           <div className="catalogFilterHeader">
            <p>FILTER</p>
           </div>
         
  
          <div className="catalogFilterOptions">
            {FilterOptions.map((option , index)=>{
              return(
                <CatalogFilterOption key={index} name={option.name} element={option.element} setOptionSelected={setOptionSelected}/>
              )
            })}
           </div>
    
           <CatalogFilterViewItemsBtn closeFilterMenu={setFilterSwich}/>
         </div>
          <div className="catalogFiltersSecond">
            <div className="catalogFilterHeader">
              <button onClick={()=>{
                 document.querySelector('.catalogFiltersSecond').classList.remove('Active')
                 document.querySelector('.catalogFiltersFirst').classList.add('Active')
               setTimeout(()=>{setOptionSelected(null)},500)
                 
                }}>
                <div></div>
                <div></div>
              </button>
              <p onClick={()=>{
                 document.querySelector('.catalogFiltersSecond').classList.remove('Active')
                 document.querySelector('.catalogFiltersFirst').classList.add('Active')
               setTimeout(()=>{setOptionSelected(null)},500)
                 
                }}>{(optionSelected?.name)?.toUpperCase()}</p>
            </div>

            <div className="catalogFilterOptions">
              {optionSelected?.element}
            </div>

        
            <CatalogFilterViewItemsBtn closeFilterMenu={setFilterSwich}/>
          </div>
        </div>
        <div className="catalogFiltersShadow" onClick={()=>{setFilterSwich(false)}} ></div>
        </div>
    )
 
}

export default CatalogFilter


/*
    <div className="catalogFiltersFirst">
           <div className="catalogFilterHeader">
            <p>FILTER</p>
           </div>
         
  
          <div className="catalogFilterOptions">
            {FilterOptions.map((option , index)=>{
              return(
                <CatalogFilterOption key={index} name={option.name} element={option.element} setOptionSelected={setOptionSelected}/>
              )
            })}
           </div>
    
           <CatalogFilterViewItemsBtn closeFilterMenu={setFilterSwich}/>
         </div>

          <div className="catalogFiltersSecond">
              <div className="catalogFilterHeader">

            <button onClick={()=>setOptionSelected(null)}>
              <div></div>
              <div></div>
            </button>
              <p onClick={()=>setOptionSelected(null)}>{(optionSelected?.name)?.toUpperCase()}</p>
              </div>
              <div className="catalogFilterOptions">
              {optionSelected?.element}
              </div>

        
          <CatalogFilterViewItemsBtn closeFilterMenu={setFilterSwich}/>
        </div>*/
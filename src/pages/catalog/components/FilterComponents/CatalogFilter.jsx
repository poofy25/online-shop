
import "/src/pages/catalog/styles/FilterStyles/catalogFilter.css"
import { useState , useEffect , useRef , cloneElement} from "react"

import CatalogFilterOption from "./CatalogFilterBtn"
import CatalogFilterViewItemsBtn from "./CatalogFilterViewItemsBtn"


import CatalogFilterColor from "./CatalogFilterColor"
import CatalogFilterBrand from "./CatalogFilterBrand"
import CatalogFilterCategory from "./CatalogFilterCategory"
import CatalogFilterPrice from "./CatalogFilterPrice"
import CatalogFilterSize from "./CatalogFilterSize"

import { availableColors } from "../../filterData"

let FilterOptions = [

    {name:'Brand', element:<CatalogFilterBrand/>},
    {name:'Category', element:<CatalogFilterCategory/>},
    {name:'Color', element:<CatalogFilterColor/> , data:availableColors},
    {name:'Size', element:<CatalogFilterSize/>},
    {name:'Price', element:<CatalogFilterPrice/>}
    
]

function CatalogFilter(props) {
 
     const FilterBtn = props.filtersBtn.current
     const catalogFilterElement = useRef(null)
     const [filterSwich , setFilterSwich] = useState(false)
     const [optionSelected , setOptionSelected] = useState(null)
     const [selectedFilters , setSelectedFilters] = useState({})

     FilterBtn && (FilterBtn.onclick = () =>{
     setFilterSwich(!filterSwich)
     })


useEffect(()=>{
  console.log(selectedFilters)
},[selectedFilters])

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
                <CatalogFilterOption key={index} option={{...option}} setOptionSelected={setOptionSelected}/>
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

               {optionSelected?.name !== 'Price' && <button className="selectionBtn" onClick={()=>{
                                     
                  if(selectedFilters[(optionSelected?.name)?.toLowerCase()]) {
                    console.log('damn')
                      const newFilters = {...selectedFilters}
                      delete newFilters[(optionSelected?.name)?.toLowerCase()]
                      setSelectedFilters(newFilters)
                    }
                    else{
                      const filtersCopy = {...selectedFilters}
                      const filterName = (data)=>{
                        const nameArray = []
                           data.forEach(item=>{
                            nameArray.push(item.name)
                           })
                           return nameArray
                      }
                      filtersCopy[(optionSelected?.name)?.toLowerCase()] = filterName(optionSelected?.data)
                      console.log(filtersCopy)
                      setSelectedFilters(filtersCopy)
                    }


                }}>
                  {selectedFilters[(optionSelected?.name)?.toLowerCase()]? (<p>CLEAR</p>): (<><p>ALL</p>  <div class="selectionBtnCheck"></div></>)}
                </button>}
            </div>

            <div className="catalogFilterOptions">
              {optionSelected?.element && cloneElement(
                optionSelected?.element,
                {setFilters:setSelectedFilters , filters:selectedFilters , data:optionSelected?.data}
              )
}
            </div>

        
            <CatalogFilterViewItemsBtn closeFilterMenu={setFilterSwich}/>
          </div>
        </div>
        <div className="catalogFiltersShadow" onClick={()=>{setFilterSwich(false)}} ></div>
        </div>
    )
 
}

export default CatalogFilter



import "/src/pages/catalog/styles/FilterStyles/catalogFilter.css"
import { useState , useEffect , useRef , cloneElement} from "react"
import { useLocation } from "react-router-dom"
import useParamsNavigate from "../../../../hooks/useParamsNavigate"
import getObjFromUrl from "../../../../functions/getObjFromUrl"
import CatalogFilterOption from "./CatalogFilterBtn"
import CatalogFilterViewItemsBtn from "./CatalogFilterViewItemsBtn"


import CatalogFilterColor from "./CatalogFilterColor"
import CatalogFilterBrand from "./CatalogFilterBrand"
import CatalogFilterCategory from "./CatalogFilterCategory"
import CatalogFilterPrice from "./CatalogFilterPrice"
import CatalogFilterSize from "./CatalogFilterSize"

import { availableColors , availableCategories , availableSizes } from "../../filterData"
import { useSearchParams } from "react-router-dom"

let FilterOptions = [

   // {name:'Brand', element:<CatalogFilterBrand/>},
    {name:'Category', element:<CatalogFilterCategory/> , data:availableCategories},
    {name:'Color', element:<CatalogFilterColor/> , data:availableColors},
    {name:'Size', element:<CatalogFilterSize/> , data:availableSizes},
    {name:'Price', element:<CatalogFilterPrice/>}
    
]

function CatalogFilter(props) {
     const MobileUser = window.innerWidth <= 767
     const FilterBtn = props.filtersBtn.current
     const useNavParams = useParamsNavigate();
     const catalogFilterElement = useRef(null)
     const location = useLocation()
     const firstRender = useRef(false)
     const urlParams = getObjFromUrl(location)
     const [filterSwich , setFilterSwich] = useState(false)
     const [optionSelected , setOptionSelected] = useState(null)
     const [selectedFilters , setSelectedFilters] = useState({...urlParams})
     FilterBtn && (FilterBtn.onclick = () =>{
     setFilterSwich(!filterSwich)
     })

     useEffect(()=>{
      if(selectedFilters !== props.urlParams ){
        setSelectedFilters({...props.urlParams})
      }
     },[props.urlParams]) 

     useEffect(()=>{
      if(firstRender.current){
        if(filterSwich){
          catalogFilterElement.current.classList.add('on')
          document.body.style.overflow = "hidden"
          setOptionSelected(null)
        }else{
         catalogFilterElement.current.classList.remove('on')
         document.body.style.overflow = "auto"
         if(selectedFilters) useNavParams(selectedFilters)
        
        }
      
      }else{
        firstRender.current = true
      }
     },[filterSwich])

     useEffect(()=>{
      console.log(optionSelected)
      if(optionSelected !== null){
        document.querySelector('.catalogFiltersSecond').classList.add('Active')
        document.querySelector('.catalogFiltersFirst').classList.remove('Active')
        document.body.style.overflow = "hidden"
      }

      if(optionSelected === null){
        document.querySelector('.catalogFiltersSecond').classList.remove('Active')
        document.querySelector('.catalogFiltersFirst').classList.add('Active')
        document.body.style.overflow = "auto"
        if(!MobileUser)  useNavParams(selectedFilters)
      }
      
     },[optionSelected])

    

    return (
      <div className="catalogFilterMenu"  ref={catalogFilterElement}>
        <div className="catalogFiltersContainer">
         <div className="catalogFiltersFirst">
          {MobileUser && <div className="catalogFilterHeader">
            <p>FILTER</p>
           </div>
          }
  
          <div className="catalogFilterOptions">
            {FilterOptions.map((option , index)=>{
              return(
                <CatalogFilterOption key={index} option={{...option}} setOptionSelected={setOptionSelected} optionSelected={optionSelected} filters={selectedFilters}/>
              )
            })}
           </div>
    
           <CatalogFilterViewItemsBtn closeFilterMenu={setFilterSwich} setOptionSelected={setOptionSelected}/>
         </div>
          <div className="catalogFiltersSecond" onClick={(e)=>{if(!MobileUser)
            {if(e.target === document.querySelector('.catalogFiltersSecond'))setOptionSelected(null)
            }}}>
             {MobileUser ?
             <> 
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

               {optionSelected?.name !== 'Price'  ? <button className="selectionBtn" onClick={()=>{
                                     
                  if(selectedFilters[(optionSelected?.name)?.toLowerCase()]) {
                      const newFilters = {...selectedFilters}
                      delete newFilters[(optionSelected?.name)?.toLowerCase()]
                      setSelectedFilters(newFilters)
                    }


                }}>
                  {selectedFilters[(optionSelected?.name)?.toLowerCase()] && (<p>CLEAR</p>)}
                </button>
                :
                <button className="selectionBtn" onClick={()=>{
                                     
                  if(selectedFilters.sale || selectedFilters.range) {
                      const newFilters = {...selectedFilters}
                      delete newFilters['range']
                      delete newFilters['sale']
                      setSelectedFilters(newFilters)
                    }
          
                }}>
                  {selectedFilters.sale && (<p>CLEAR</p>) || selectedFilters.range && (<p>CLEAR</p>)}
                </button>
                     }
            </div>

            <div className="catalogFilterOptions">
              {optionSelected?.element && cloneElement(
                optionSelected?.element,
                {setFilters:setSelectedFilters , filters:selectedFilters , data:optionSelected?.data}
              )
}
            </div>
            </>
            :
            
            <div className="catalogDesktopFilterOptions">
             <div className="catalogFilterHeader">

              <p>{(optionSelected?.name)?.toUpperCase()}</p>

               {optionSelected?.name !== 'Price' ? <button className="selectionBtn" onClick={()=>{
                                     
                  if(selectedFilters[(optionSelected?.name)?.toLowerCase()]) {
                      const newFilters = {...selectedFilters}
                      delete newFilters[(optionSelected?.name)?.toLowerCase()]
                      setSelectedFilters(newFilters)
                    }


                }}>
                  {selectedFilters[(optionSelected?.name)?.toLowerCase()] && (<p>CLEAR</p>)}
                </button>
                :
                <button className="selectionBtn" onClick={()=>{
                                     
                  if(selectedFilters.sale || selectedFilters.range) {
                      const newFilters = {...selectedFilters}
                      delete newFilters['range']
                      delete newFilters['sale']
                      setSelectedFilters(newFilters)
                    }
          
                }}>
                  {selectedFilters.sale && (<p>CLEAR</p>) || selectedFilters.range && (<p>CLEAR</p>)}
                </button>
                     }
            </div>
            {optionSelected?.element && cloneElement(
              optionSelected?.element,
              {setFilters:setSelectedFilters , filters:selectedFilters , data:optionSelected?.data}
            )
            }
          </div>
            }

        
            {MobileUser &&<CatalogFilterViewItemsBtn closeFilterMenu={setFilterSwich}/>}
          </div>
        </div>
        <div className="catalogFiltersShadow" onClick={()=>{setFilterSwich(false)}} ></div>
        </div>
    )
}
export default CatalogFilter
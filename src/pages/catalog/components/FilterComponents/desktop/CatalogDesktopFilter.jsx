import "/src/pages/catalog/styles/FilterStyles/desktop/catalogDesktopFilter.css"
import CatalogDesktopFilterMenu from "./CatalogDesktopFilterMenu"

import { useState } from "react"

const CatalogDesktopFilter = ()=>{

    const [selectedFilter , setSelectedFilter] = useState(null)

    const filterBtnClick = (e)=>{
        const filterMenu = document.querySelector('.catalogDesktopFilterMenuShadow')
        if(document.querySelector('button.open') === e.currentTarget){
            document.querySelector('button.open')?.classList?.remove('open')
            filterMenu.classList.remove('open')
            document.body.style.overflow = "auto"
            setSelectedFilter(null)
        }else {
         document.querySelector('button.open')?.classList?.remove('open')
         e.currentTarget.classList.add('open')
         filterMenu.classList.add('open')
         document.body.style.overflow = "hidden"
         setSelectedFilter(e.currentTarget.textContent)
        }
    }



    return(
        <>
          <div className="catalogDesktopFiltersContainer">
             <p>FILTERS</p>
             <button onClick={filterBtnClick}>CATEGORIES 
                <div className="filterDesktopArrowBtn">
                    <div></div>
                    <div></div>
                </div>
             </button>
             <button onClick={filterBtnClick}>COLORS
             <div className="filterDesktopArrowBtn">
                    <div></div>
                    <div></div>
                </div>
             </button>
             <button onClick={filterBtnClick}>SIZES
             <div className="filterDesktopArrowBtn">
                    <div></div>
                    <div></div>
                </div>
             </button>
             <button onClick={filterBtnClick}>PRICE
             <div className="filterDesktopArrowBtn">
                    <div></div>
                    <div></div>
                </div>
             </button>
          </div>
          <CatalogDesktopFilterMenu selectedFilter={selectedFilter}/>
        </>
    )
}
export default CatalogDesktopFilter
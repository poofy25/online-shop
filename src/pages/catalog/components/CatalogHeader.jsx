

import filterIcon from '/src/assets/Icons/filterIcon.png'
import "../styles/catalogHeader.css"
import JsonData from "/data/clothing-data/clothing-data.json"
import searchFilter from '../../../functions/filter'

const categories = [
    'Shirts',
    'Dresses',
    'Jeans',
    'Sportswear',
    "Coats",
    "Tops",
    'Hoodies',
    "Leggings",
    "Trousers"
]
let prevClickedCategoryBtn = null;

function CatalogHeader(props) {

    const searchValue = props.searchValue
    const rawSearchData = props.rawSearchData

    
    const categorySelector = (e)=>{
        if(prevClickedCategoryBtn !== e.target){
        prevClickedCategoryBtn !== null ? prevClickedCategoryBtn.classList.remove('selectedCategoryBtn') : null
        e.target.classList.add('selectedCategoryBtn')
        prevClickedCategoryBtn = e.target
        props.setFilters(prevFilters => ({...prevFilters , category:e.target.textContent }))
        }
    }
   
    return (
         <div className="catalogHeader">
            <div className="catalogCategoryName"><p>Women {props.filters.category}</p></div>
            <div className="catalogCategories">
               {categories.map((category , index)=>{
               return <button key={index} onClick={categorySelector}>{category}</button>
               })}
            </div>
            <div className="catalogFilterAndAmountContainer">
                <div className="catalogProductAmount">
                    <p>{rawSearchData.length} Products</p></div>
                <button className="catalogFilter">
                    <img src={filterIcon} />
                    Filter
                    </button>
            </div>

         </div>
    )
 
}

export default CatalogHeader
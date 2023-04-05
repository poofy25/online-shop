

import filterIcon from '/src/assets/Icons/filterIcon.png'
import "../styles/catalogHeader.css"
import { useEffect } from 'react';

const categories = [
    'All Categories',
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
let prevClickedCategoryBtn = null

function CatalogHeader(props) {
    const rawSearchData = props.rawSearchData
    
    const categorySelector = (e)=>{
        let categorySelected = e.target.textContent === 'All Categories'? '*' : e.target.textContent
        if(prevClickedCategoryBtn !== e.target){
        prevClickedCategoryBtn !== null ? prevClickedCategoryBtn.classList.remove('selectedCategoryBtn') : null
            e.target.classList.add('selectedCategoryBtn')
            prevClickedCategoryBtn = e.target
            props.setFilters(prevFilters => ({...prevFilters , category:categorySelected }))
        } else if (prevClickedCategoryBtn === e.target && !e.target.classList.contains('selectedCategoryBtn')){
            e.target.classList.add('selectedCategoryBtn')
            prevClickedCategoryBtn = e.target
            props.setFilters(prevFilters => ({...prevFilters , category:categorySelected }))
        }
    }
   

    useEffect(()=>{
        prevClickedCategoryBtn = document.querySelector('.selectedCategoryBtn');
    },[])


    return (
         <div className="catalogHeader">
            <div className="catalogCategoryName">
                <p>Women {props.filters.category === '*'? 'Clothing' : props.filters.category}</p>
                {!props.filters.name ? console.log(props.filters) : <p className='catalogHeaderSearchValue'>Search result for: {props.filters.name}</p>}
            </div>
            <div className="catalogCategories">
               {categories.map((category , index)=>{
                if (index === 0){
                return <button className="selectedCategoryBtn" key={index} onClick={categorySelector}>{category}</button>
                }
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
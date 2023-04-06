

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
    const catalogData = props.catalogData
    const setCatalogData = props.setCatalogData
    
    const categorySelector = (e)=>{
        let categorySelected = e.target.textContent === 'All Categories'? '*' : e.target.textContent
        if(prevClickedCategoryBtn !== e.target){
        prevClickedCategoryBtn !== null ? prevClickedCategoryBtn.classList.remove('selectedCategoryBtn') : null
            e.target.classList.add('selectedCategoryBtn')
            prevClickedCategoryBtn = e.target
            setCatalogData({...catalogData , filters:{...catalogData.filters , category:categorySelected}})
        } else if (prevClickedCategoryBtn === e.target && !e.target.classList.contains('selectedCategoryBtn')){
            e.target.classList.add('selectedCategoryBtn')
            prevClickedCategoryBtn = e.target
            setCatalogData({...catalogData , filters:{...catalogData.filters , category:categorySelected}})
        }
    }
   

    useEffect(()=>{
        prevClickedCategoryBtn = document.querySelector('.selectedCategoryBtn');
    },[])


    return (
         <div className="catalogHeader">
            <div className="catalogCategoryName">
                <p>Women {catalogData.filters.category === '*'? 'Clothing' : catalogData.filters.category}</p>
                {!catalogData.filters.name ? '' : <p className='catalogHeaderSearchValue'>Search result for: {catalogData.filters.name}</p>}
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
                    <p>{catalogData.rawSearchData.length} Products</p></div>
                <button className="catalogFilter">
                    <img src={filterIcon} />
                    Filter
                    </button>
            </div>

         </div>
    )
 
}

export default CatalogHeader
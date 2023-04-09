

import filterIcon from '/src/assets/Icons/filterIcon.png'
import "../styles/catalogHeader.css"
import { useEffect } from 'react';
import useParamsNavigate from '../../../hooks/useParamsNavigate';
import { useLocation, useNavigate , createSearchParams } from 'react-router-dom';

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

    const location = useLocation()


    const params = Object.fromEntries(new URLSearchParams(location.search));
    
    const useNavParams = useParamsNavigate()
    const categorySelector = (e)=>{
        let categorySelected = e.target.textContent === 'All Categories'? '*' : e.target.textContent
        const newParams = {category:categorySelected}
        if(prevClickedCategoryBtn !== e.target){
        prevClickedCategoryBtn !== null ? prevClickedCategoryBtn.classList.remove('selectedCategoryBtn') : null
            e.target.classList.add('selectedCategoryBtn')
            prevClickedCategoryBtn = e.target
            useNavParams(newParams , true)
          //  navigateTo({pathname:location.pathname, search:`?${createSearchParams(newParams)}`})
            
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
                if (index === 0 && !params.category) return <button className="selectedCategoryBtn" key={index} onClick={categorySelector}>{category}</button>
                if(category === params.category) return <button className="selectedCategoryBtn" key={index} onClick={categorySelector}>{category}</button>
                return  <button key={index} onClick={categorySelector}>{category}</button>
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
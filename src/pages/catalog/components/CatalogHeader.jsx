

import filterIcon from '/src/assets/Icons/filterIcon.png'
import "../styles/catalogHeader.css"
import { useEffect , useRef } from 'react';
import useParamsNavigate from '../../../hooks/useParamsNavigate';
import { useLocation} from 'react-router-dom';
import CatalogFilter from './FilterComponents/CatalogFilter';
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

const searchCategoryBtn = (category , btns)=>{
    for (var i = 0; i < btns.length; i++) {
        if (btns[i].textContent == category) {
          return btns[i]
        }
      }
      return 'nothing'
}



function CatalogHeader(props) {
    const catalogData = props.catalogData;
    const useNavParams = useParamsNavigate();
    const location = useLocation();
    const params = Object.fromEntries(new URLSearchParams(location.search));
    let newParams;
    let categorySelected;
    const filtersBtn = useRef(null)


   
    const categorySelector = (e)=>{
        if(prevClickedCategoryBtn !== e.target){
            categorySelected = e.target.textContent === 'All Categories'? '*' : e.target.textContent;
            newParams = {category:categorySelected};
            prevClickedCategoryBtn !== null ? prevClickedCategoryBtn.classList.remove('selectedCategoryBtn') : null
            e.target.classList.add('selectedCategoryBtn')
            prevClickedCategoryBtn = e.target
            useNavParams(newParams , true)            
        }
    }
   

    useEffect(()=>{
        prevClickedCategoryBtn = document.querySelector('.selectedCategoryBtn');
    },[])
    useEffect(()=>{
        //UPDATES prevClickedCategoryBtn WHEN URL SEARCH PARAMS CHANGE
        const categoryBtns = document.querySelector('.catalogCategories').childNodes
        if(params.category){
           prevClickedCategoryBtn = searchCategoryBtn(params.category !== '*' ? params.category : 'All Categories'  , categoryBtns);
        }else{
            prevClickedCategoryBtn = searchCategoryBtn('All Categories'  , categoryBtns)
        }
    },[params])

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
                <button className="catalogFilter" ref={filtersBtn}>
                    <img src={filterIcon} />
                    Filter
                    </button>
            </div>
           <CatalogFilter filtersBtn={filtersBtn}/>
         </div>
    )
 
}

export default CatalogHeader
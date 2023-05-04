

import filterIcon from '/src/assets/Icons/filterIcon.png'
import "../styles/catalogHeader.css"
import { useEffect , useRef , lazy} from 'react';
import useParamsNavigate from '../../../hooks/useParamsNavigate';
import { useLocation} from 'react-router-dom';
import CatalogFilter from './FilterComponents/CatalogFilter';
import getObjFromUrl from '../../../functions/getObjFromUrl';
const CatalogDesktopFilter = lazy(()=> import('./FilterComponents/desktop/CatalogDesktopFilter'))
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
    const params = getObjFromUrl(location)
    let newParams;
    let categorySelected;
    const filtersBtn = useRef(null)
    const MobileUser = window.innerWidth <= 767
   
    const categorySelector = (e)=>{
        if(prevClickedCategoryBtn !== e.target){
            categorySelected = e.target.textContent === 'All Categories'? '*' : e.target.textContent;
            if(categorySelected !== '*'){
              newParams = {...params , category:[categorySelected]};
            }else{
                const {category , ...copyParams} = params
              newParams={...copyParams}
            }
            prevClickedCategoryBtn !== null ? prevClickedCategoryBtn.classList.remove('selectedCategoryBtn') : null
            e.target.classList.add('selectedCategoryBtn')
            prevClickedCategoryBtn = e.target
            useNavParams(newParams , true)            
        }
    }
   

    useEffect(()=>{
        const categoryBtns = document.querySelector('.catalogCategories').childNodes
        prevClickedCategoryBtn = searchCategoryBtn('All Categories'  , categoryBtns);
        prevClickedCategoryBtn.classList.add('selectedCategoryBtn');
    },[])
    useEffect(()=>{
        if(prevClickedCategoryBtn &&  document.querySelector('.selectedCategoryBtn')){
        document.querySelector('.selectedCategoryBtn').classList.remove('selectedCategoryBtn')
        prevClickedCategoryBtn.classList.add('selectedCategoryBtn')
        }
    },[prevClickedCategoryBtn])
    useEffect(()=>{
        //UPDATES prevClickedCategoryBtn WHEN URL SEARCH PARAMS CHANGE
        const categoryBtns = document.querySelector('.catalogCategories').childNodes
        if(params?.category){
           prevClickedCategoryBtn = searchCategoryBtn(params.category[0] !== '*' ? params.category[0] : 'All Categories'  , categoryBtns);
        }else{
            prevClickedCategoryBtn = searchCategoryBtn('All Categories'  , categoryBtns)
        }
        
    },[params])

    return (
         <div className="catalogHeader">
            <div className="catalogCategoryName">
                <p>Women {catalogData.filters.category[0] === '*'? 'Clothing' : catalogData.filters.category}</p>
                {!catalogData.filters.name ? '' : <p className='catalogHeaderSearchValue'>Search result for: {catalogData.filters.name}</p>}
            </div>
            <div className="catalogCategories">
               {categories.map((category , index)=>{
                if(category === params?.category) return <button className="selectedCategoryBtn" key={index} onClick={categorySelector}>{category}</button>
                return  <button key={index} onClick={categorySelector}>{category}</button>
               })}
            </div>
            <div className="catalogFilterAndAmountContainer">
                <div className="catalogProductAmount">
                    <p>{catalogData.rawSearchData.length} Products</p></div>
               {MobileUser && <button className="catalogFilter" ref={filtersBtn}>
                    <img src={filterIcon} />
                      Filter
                    </button>
               }
            </div>
           {MobileUser &&<CatalogFilter filtersBtn={filtersBtn} urlParams={params}/>}
           {!MobileUser && <CatalogDesktopFilter/>}
         </div>
    )
 
}

export default CatalogHeader
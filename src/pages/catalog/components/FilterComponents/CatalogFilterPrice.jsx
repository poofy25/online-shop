
import "/src/pages/catalog/styles/FilterStyles/catalogFilterOptionBtn.css"

import { useState , useRef, useEffect} from "react";

function CatalogFilterPrice(props) {


  const filters = props.filters;
  const setFilters = props.setFilters;
  const priceNumberElement = useRef(null)
  const firstRender = useRef(false)
  const [priceFilter , setPriceFilter] = useState(filters?.range ?  [filters.range[0] ,filters.range[1]] : ['>=' ,'5'])
  const clickHandler = (e)=>{

    if(filters?.sale){
      // if the filter is already there then it removes it
        e.currentTarget.classList.remove('selected')
        setFilters(filters=>{
            
           const {sale , ...restFilter} = filters
           return {...restFilter}
      })
    }
    else{
      e.currentTarget.classList.add('selected')
      setFilters(filters=>({...filters ,sale:true}))
    } 
}

const selectDirHander = (e, dir)=>{
 document.querySelector('.priceBtn.active').classList.remove('active')
 e.currentTarget.classList.add('active')
 setPriceFilter(currentFiter=>{
  const filterObj = [...currentFiter]
  filterObj[0] = dir
  return filterObj
})
}


useEffect(()=>{
  //IF statement so the useEffect dosent run on mount
 if(firstRender.current === true){
  priceNumberElement.current.textContent = `${priceFilter[1]}$`
  setFilters(currentFilters=>{{
    return{...currentFilters , range:priceFilter}}}
    )
  }else firstRender.current = true
},[priceFilter])

useEffect(()=>{
  // sets the range input value to the filters value
   document.getElementById('priceInput').value = filters?.range ? filters?.range[1]  : '5'
},[])



    return (
      <div className="filterOptionContaianer">
          {

            <button className={`filterOptionBtn ${filters?.sale !== false && filters?.sale && 'selected'} `} onClick={(e)=>{clickHandler(e , filters.sale)}}>
                <div className="filterOptionBtnContainer">
                  <p>Sale</p>
                  <div className="check"></div>
                </div>
             </button>
          }
          {
            <button className='filterOptionBtn'>
            <div className="filterOptionBtnContainer price">

              <div className="priceWrapper">
                <button className={`priceBtn ${filters?.range ? (filters?.range[0] === '>=' && 'active') : 'active'}`} onClick={(e)=>{selectDirHander(e , '>=')}}>Over</button>
                <p ref={priceNumberElement}>{filters?.range ? filters.range[1]  : priceFilter[1]}$</p>
                <button className={`priceBtn ${filters?.range && filters?.range[0] === '<=' && 'active'}` }onClick={(e)=>{selectDirHander(e, '<=')}}>Under</button>
              </div>

              <div className="inputWrapper">
                <input type="range" id='priceInput' min="5" max="250" step='5' list="tickmarks"
                onChange={()=>{ setPriceFilter(currentFiter=>{
                  const filterObj = [...currentFiter]
                  filterObj[1] = document.getElementById('priceInput').value
                  return filterObj
                })}}
                ></input>
                <datalist id="tickmarks">
                  <option value="5" label="5$"/>
                  <option value="250" label="250$"/>
                </datalist>
              </div>
            </div>
         </button>
          }
      </div>
    )
 
}

export default CatalogFilterPrice


/*
function CatalogFilterPrice(props) {


  const filters = props.filters;
  const setFilters = props.setFilters;
  const priceNumberElement = useRef(null)
  const firstRender = useRef(false)
  const [priceFilter , setPriceFilter] = useState(filters?.price?.range ?  {dir:filters.price.range.dir ,amount:filters.price.range.amount} : {dir:'>=' , amount:'5'})
  const clickHandler = (e)=>{

    if(filters?.price?.sale){
        e.currentTarget.classList.remove('selected')
        setFilters(filters=>{
            
           const {price , ...restFilter} = filters
            const {sale , ...restPriceFilter} = price 
            const newFilters = Object.keys(restPriceFilter).length === 0 ? {...restFilter} : {...restFilter , price:{...restPriceFilter}}
           return {...newFilters}
      })
    }
    else{
      e.currentTarget.classList.add('selected')
      setFilters(filters=>({...filters , price:{...filters?.price , sale:true}}))
    } 
}

const selectDirHander = (e, dir)=>{
 document.querySelector('.priceBtn.active').classList.remove('active')
 e.currentTarget.classList.add('active')
  setPriceFilter({...priceFilter , dir:dir})
}


useEffect(()=>{
  //IF statement so the useEffect dosent run on mount
 if(firstRender.current === true){
  priceNumberElement.current.textContent = `${priceFilter.amount}$`
  setFilters(currentFilters=>{{
    return{...currentFilters , price:{...currentFilters?.price, range:priceFilter}}}}
    )
  }else firstRender.current = true
},[priceFilter])

useEffect(()=>{
  // sets the range input value to the filters value
   document.getElementById('priceInput').value = filters?.price?.range ? filters?.price?.range?.amount  : '5'
},[])



    return (
      <div className="filterOptionContaianer">
          {

            <div className={`filterOptionBtn ${filters?.price?.sale !== false && filters?.price?.sale && 'selected'} `} onClick={(e)=>{clickHandler(e , filters.sale)}}>
                <div className="filterOptionBtnContainer">
                  <p>Sale</p>
                  <div className="check"></div>
                </div>
             </div>
          }
          {
            <div className='filterOptionBtn'>
            <div className="filterOptionBtnContainer price">

              <div className="priceWrapper">
                <button className={`priceBtn ${filters?.price?.range ? (filters?.price?.range?.dir === '>=' && 'active') : 'active'}`} onClick={(e)=>{selectDirHander(e , '>=')}}>Over</button>
                <p ref={priceNumberElement}>{filters?.price?.range ? filters.price.range.amount  : priceFilter.amount}$</p>
                <button className={`priceBtn ${filters?.price?.range?.dir === '<=' && 'active'}` }onClick={(e)=>{selectDirHander(e, '<=')}}>Under</button>
              </div>

              <div className="inputWrapper">
                <input type="range" id='priceInput' min="5" max="250" step='5' list="tickmarks"
                onChange={()=>{ setPriceFilter(currentFiter=>({...currentFiter , amount:document.getElementById('priceInput').value}))}}
                ></input>
                <datalist id="tickmarks">
                  <option value="5" label="5$"/>
                  <option value="250" label="250$"/>
                </datalist>
              </div>
            </div>
         </div>
          }
      </div>
    )
 
}

*/
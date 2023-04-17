
import "/src/pages/catalog/styles/FilterStyles/catalogFilterColor.css"

import { useState , useRef, useEffect} from "react";

function CatalogFilterPrice(props) {


  const filters = props.filters;
  const setFilters = props.setFilters;
  const priceNumberElement = useRef(null)
  const [priceFilter , setPriceFilter] = useState(filters.price ?  {dir:filters.price.dir ,amount:filters.price.amount} : {dir:'over' , amount:'5'})

  const clickHandler = (e , sale)=>{

    if(filters.sale){
        e.currentTarget.classList.remove('selected')
        setFilters(filters=>{
            const {sale , ...restFilter} = filters
            return restFilter
        })
    }
    else{
      e.currentTarget.classList.add('selected')
      setFilters(filters=>({...filters , sale:true}))
    } 
}

const selectDirHander = (e, dir)=>{

 document.querySelector('.priceBtn.active').classList.remove('active')
 e.currentTarget.classList.add('active')

  setPriceFilter({...priceFilter , dir:dir})
}


useEffect(()=>{
  if(priceFilter.amount !== '5' || priceFilter.dir !== 'over'){
  priceNumberElement.current.textContent = `${priceFilter.amount}$`
  setFilters(currentFilters=>({...currentFilters , price:priceFilter}))
  }
},[priceFilter])

useEffect(()=>{
  document.getElementById('priceInput').value = filters?.price ? filters?.price.amount  : '5'
},[])



    return (
         <div className="filterOptionContaianer">
          {

            <div className={`filterOptionBtn ${filters?.sale !== false && filters.sale && 'selected'} `} onClick={(e)=>{clickHandler(e , filters.sale)}}>
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
                <button className={`priceBtn ${filters?.price ? (filters?.price?.dir === 'over' && 'active') : 'active'}`} onClick={(e)=>{selectDirHander(e , 'over')}}>Over</button>
                <p ref={priceNumberElement}>{filters?.price ? filters?.price.amount  : priceFilter.amount}$</p>
                <button className={`priceBtn ${filters?.price?.dir === 'under' && 'active'}` }onClick={(e)=>{selectDirHander(e, 'under')}}>Under</button>
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

export default CatalogFilterPrice
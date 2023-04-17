
import "/src/pages/catalog/styles/FilterStyles/catalogFilterColor.css"

import { useRef , useEffect} from "react";

function CatalogFilterPrice(props) {


  const filters = props.filters;
  const setFilters = props.setFilters;
  const priceNumberElement = useRef(null)

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

useEffect(()=>{
  document.getElementById('priceInput').value = '5'
  const setPriceValue = ()=>{
    priceNumberElement.current.textContent = `${document.getElementById('priceInput').value}$`
  }
  document.getElementById('priceInput').addEventListener('input',setPriceValue)
  return ()=>{
    document?.getElementById('priceInput')?.removeEventListener('input', setPriceValue)
  }
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
            <div className={`filterOptionBtn  `} onClick={(e)=>{}}>
            <div className="filterOptionBtnContainer">
              <button className="priceBtn">Over</button>
              <p ref={priceNumberElement}>5$</p>
              <div className="inputWrapper">
                <input type="range" id='priceInput' defaultValue={5} min="5" max="250" step='5' list="tickmarks"></input>
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
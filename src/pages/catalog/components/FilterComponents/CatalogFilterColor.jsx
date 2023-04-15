
import "/src/pages/catalog/styles/FilterStyles/catalogFilterColor.css"
import { useEffect } from "react";
function CatalogFilterColor(props) {

  const filters = props.filters;
  const setFilters = props.setFilters;
  const availableColors = props.data
  console.log('rerender')

  const clickHandler = (e , color)=>{
        // if any color has been selected previously
        if(filters.color){
          //if color is already selected or not
          if(filters.color.indexOf(color) === -1){ 
            e.currentTarget.classList.add('selected')
            setFilters(filters=>({...filters , color:[color , ...filters.color]}))
          }else{ 
            e.currentTarget.classList.remove('selected')
            setFilters(filters=>{
              // if there arent any colors selected then removes the color filter
              if ((filters.color.filter(e => e !== color)).length === 0){
                const {color , ...restFilter} = filters
                return restFilter
              }
              return ({...filters,color:filters.color.filter(e => e !== color)})
            })
          }
        }
        else{
          e.currentTarget.classList.add('selected')
          setFilters(filters=>({...filters , color:[color]}))
        } 
  }
    return (
         <div className="filterOptionContaianer">
           {availableColors.map((color,index)=>{
            let isSelected = false
            if(filters?.color?.indexOf(color.name) !== -1 && filters.color) isSelected = true
            return(
              <div className={`filterOptionBtn ${isSelected && 'selected'} `} key={index} onClick={(e)=>{clickHandler(e , color.name)}}>
                <div className="filterOptionBtnContainer">
                  <div style={{backgroundColor:color.value}} className="colorDiv"></div>
                  <p>{color.name}</p>
                  <div class="check"></div>
                </div>
             </div>
            )
           })}
         </div>
    )
 
}

export default CatalogFilterColor
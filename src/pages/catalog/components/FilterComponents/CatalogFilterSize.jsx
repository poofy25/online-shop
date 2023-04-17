

import "/src/pages/catalog/styles/FilterStyles/catalogFilterColor.css"
function CatalogFilterSize(props) {

  const filters = props.filters;
  const setFilters = props.setFilters;
  const availableSizes = props.data

  const clickHandler = (e , size)=>{
        // if any categosizery has been selected previously
        if(filters.size){
          //if categosizery is already selected or not
          if(filters.size.indexOf(size) === -1){ 
            e.currentTarget.classList.add('selected')
            setFilters(filters=>({...filters , size:[size , ...filters.size]}))
          }else{ 
            e.currentTarget.classList.remove('selected')
            setFilters(filters=>{
              // if there arent any size selected then removes the size filter
              if ((filters.size.filter(e => e !== size)).length === 0){
                const {size , ...restFilter} = filters
                return restFilter
              }
              return ({...filters,size:filters.size.filter(e => e !== size)})
            })
          }
        }
        else{
          e.currentTarget.classList.add('selected')
          setFilters(filters=>({...filters , size:[size]}))
        } 
  }
    return (
         <div className="filterOptionContaianer">
           {availableSizes.map((size,index)=>{
            let isSelected = false
            if(filters?.size?.indexOf(size.name) !== -1 && filters.size) isSelected = true
            return(
              <div className={`filterOptionBtn ${isSelected && 'selected'} `} key={index} onClick={(e)=>{clickHandler(e , size.name)}}>
                <div className="filterOptionBtnContainer">
                  <p>{size.name}</p>
                  <div className="check"></div>
                </div>
             </div>
            )
           })}
         </div>
    )
 
}

export default CatalogFilterSize
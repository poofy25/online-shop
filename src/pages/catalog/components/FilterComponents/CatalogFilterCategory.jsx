
import "/src/pages/catalog/styles/FilterStyles/catalogFilterOptionBtn.css"
function CatalogFilterCategory(props) {

  const filters = props.filters;
  const setFilters = props.setFilters;
  const availableCategories = props.data

  const clickHandler = (e , category)=>{
        // if any category has been selected previously
        if(filters.category){
          //if category is already selected or not
          if(filters.category.indexOf(category) === -1){ 
            e.currentTarget.classList.add('selected')
            setFilters(filters=>({...filters , category:[category]}))
          }else{ 
            e.currentTarget.classList.remove('selected')
            setFilters(filters=>{
              // if there arent any category selected then removes the category filter
              if ((filters.category.filter(e => e !== category)).length === 0){
                const {category , ...restFilter} = filters
                return restFilter
              }
              return ({...filters,category:filters.category.filter(e => e !== category)})
            })
          }
        }
        else{
          e.currentTarget.classList.add('selected')
          setFilters(filters=>({...filters , category:[category]}))
        } 
  }
    return (
         <div className="filterOptionContaianer">
           {availableCategories.map((category,index)=>{
            let isSelected = false
            if(filters?.category?.indexOf(category.name) !== -1 && filters.category) isSelected = true
            return(
              <button className={`filterOptionBtn ${isSelected && 'selected'} `} key={index} onClick={(e)=>{clickHandler(e , category.name)}}>
                <div className="filterOptionBtnContainer">
                  <p>{category.name}</p>
                  <div className="check"></div>
                </div>
             </button>
            )
           })}
         </div>
    )
 
}

export default CatalogFilterCategory
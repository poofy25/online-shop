
import "/src/pages/catalog/styles/FilterStyles/catalogFilterColor.css"
function CatalogFilterCategory(props) {

  const filters = props.filters;
  const setFilters = props.setFilters;
  const availableCategories = props.data
  console.log('rerender')

  const clickHandler = (e , category)=>{
        // if any category has been selected previously
        if(filters.category){
          //if category is already selected or not
          if(filters.category.indexOf(category) === -1){ 
            e.currentTarget.classList.add('selected')
            setFilters(filters=>({...filters , category:[category , ...filters.category]}))
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
              <div className={`filterOptionBtn ${isSelected && 'selected'} `} key={index} onClick={(e)=>{clickHandler(e , category.name)}}>
                <div className="filterOptionBtnContainer">
                  <p>{category.name}</p>
                  <div class="check"></div>
                </div>
             </div>
            )
           })}
         </div>
    )
 
}

export default CatalogFilterCategory
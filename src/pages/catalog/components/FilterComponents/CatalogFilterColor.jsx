
import "/src/pages/catalog/styles/FilterStyles/catalogFilterColor.css"
const availableColors1 = [
  'Red',
  'Brown',
  'Khaki',
  'Yellow',
  'Olive',
  'Green',
  'lightblue',
  'Blue',
  'Navy',
  'Purple',
  'Pink',
  'Black',
  'Gray',
  'Beige',
  'White',
]
const availableColors = [
   {name:'Red' , value:'rgb(255,0,0)'},
   {name:'Brown' , value:'rgb(165, 42, 42)'},
   {name:'Khaki' , value:'rgb(240, 230, 140)'},
   {name:'Yellow' , value:'rgb(255,255,0)'},
   {name:'Olive' , value:'rgb(128,128,0)'},
   {name:'Green' , value:'rgb(0,255,0)'},
   {name:'Light blue' , value:'rgb(173, 216, 230)'},
   {name:'Blue' , value:'rgb(0, 0, 255)'},
   {name:'Navy' , value:'rgb(0, 0, 128)'},
   {name:'Purple' , value:'rgb(128, 0, 128)'},
   {name:'Pink' , value:'rgb(255, 192, 203)'},
   {name:'Black' , value:'rgb(0,0,0)'},
   {name:'Gray' , value:'rgb(128, 128, 128)'},
   {name:'Beige' , value:'rgb(245, 245, 220)'},
   {name:'White' , value:'rgb(255,255,255)'},

]


function CatalogFilterColor(props) {

  const filters = props.filters
  const setFilters = props.setFilters

  const clickHandler = (e , color)=>{
        // if any color has been selected previously
        if(filters.colors){
          //if color is already selected or not
          if(filters.colors.indexOf(color) === -1){ 
            e.currentTarget.classList.add('selected')
            setFilters(filters=>({...filters , colors:[color , ...filters.colors]}))
          }else{ 
            e.currentTarget.classList.remove('selected')
            setFilters(filters=>{
              // if there arent any colors selected then removes the color filter
              console.log()
              if ((filters.colors.filter(e => e !== color)).length === 0){
                const {colors , ...restFilter} = filters
                return restFilter
              }
              return ({...filters,colors:filters.colors.filter(e => e !== color)})
            })
          }
        }
        else{
          e.currentTarget.classList.add('selected')
          setFilters(filters=>({...filters , colors:[color]}))
        } 
  }
    return (
         <div className="filterOptionContaianer">
           {availableColors.map((color,index)=>{
            let isSelected = false
            if(filters?.colors?.indexOf(color.name) !== -1 && filters.colors) isSelected = true
            return(
              <div className={`catalogFilterBtn ${isSelected && 'selected'} `} key={index} onClick={(e)=>{clickHandler(e , color.name)}}>
                <div className="catalogFilterBtnContainer">
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
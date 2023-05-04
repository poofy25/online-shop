
import searchFilter from "../../functions/filter"
import JsonData from "/data/clothing-data/clothing-data.json"
import { useEffect , useState , useRef } from "react"
import { useParams } from "react-router-dom"
import { useNavigate  , useLocation} from "react-router-dom"

import getObjFromUrl from "../../functions/getObjFromUrl"

import CatalogProducts from "./components/CatalogProducts"
import CatalogPagesNavigator from "./components/CatalogPagesNavigator"
import CatalogHeader from "./components/CatalogHeader"

const availableFilters = [
    'name',
    'category',
    'range',
    'sale',
    'color',
    'size'
]
//Returns an array with multiple arrays as pages content
function getPagination(rawData){
    let pagesNumber;
    const searchData = []
    if (rawData.length > 10){
        pagesNumber = Math.ceil(rawData.length / 10)
        for(let i = 0; i < pagesNumber; i++ ){
           
           let pageArray = []
           let currentLoopPage=(i === 0 ? 1 : i+1)
           let productIndex = i * 10;
            //Creating an array for a single page
           for(productIndex ; productIndex <= currentLoopPage * 10 ; productIndex++){
            if (productIndex >= currentLoopPage*10 || productIndex+1 > rawData.length) break;
        
            pageArray.push(rawData[productIndex])
           }
           

            searchData.push(pageArray)
        }
         
        
      

    } else {
        let pageArray = []
        let currentLoopPage= 1
        for(let i = 0 ; i <= currentLoopPage * 10 ; i++){
         if (i >= currentLoopPage*10 || i+1 > rawData.length) break;
     
         pageArray.push(rawData[i])
        }
        searchData.push(pageArray)

    }
    return searchData
}

function CatalogPage() {
   const navigateTo = useNavigate()
   const location = useLocation()
   const params = getObjFromUrl(location);
   const [catalogData , setCatalogData] = useState({
       filters:{
         name:params?.searchValue ,
         category:[['*']]
       },
       rawSearchData:searchFilter({name:params?.searchValue , category:['*']}, JsonData),
       searchData:getPagination(searchFilter({name:params?.searchValue , category:[['*']]}, JsonData)),
       catalogPage:1
   })

  useEffect(()=>{
    const params = getObjFromUrl(location);
    // SEARCHES FOR AVAILABLE FILTERS IN THE URL  
    const searchFilters = {}  
    for(const key in params){
            for(const i in availableFilters){
                if(key === availableFilters[i]){
                    searchFilters[key] = params[key]
                    break
                }
            }
        }
    //If search parameters aretn empty then sets the catalog products from the selected filters
    if(Object.keys(searchFilters).length !== 0){
      console.log('Result: ', searchFilter({...searchFilters},JsonData) , {...searchFilters} )
        setCatalogData({
           ...catalogData,
           filters: searchFilters.category ? {...searchFilters} : {...searchFilters , category:['*']} ,
           rawSearchData:searchFilter({...searchFilters},JsonData),
            searchData:getPagination(searchFilter({...searchFilters}, JsonData)),
            catalogPage:1,
        })
    } else {
        // if search params are empty sets default filters for caatalog products
        setCatalogData({
            filters:{
              name:params?.searchValue ,
              category:['*']
            },
            rawSearchData:searchFilter({name:params?.searchValue , category:['*']}, JsonData),
            searchData:getPagination(searchFilter({name:params?.searchValue , category:['*']}, JsonData)),
            catalogPage:1
         })
        navigateTo('/catalog')
    }
  },[location.search])

    return (
        <>
        <div className="websiteContent">
          <div className="catalogContainer">
            <CatalogHeader catalogData={catalogData} setCatalogData={setCatalogData} searchValue={params?.searchValue}/>
            <CatalogProducts catalogData={catalogData} setCatalogData={setCatalogData} searchValue={params?.searchValue} />
            <CatalogPagesNavigator catalogData={catalogData} setCatalogData={setCatalogData}/>
          </div>
        </div>
        </>
    )
 
}

export default CatalogPage

import searchFilter from "../../functions/filter"
import JsonData from "/data/clothing-data/clothing-data.json"
import { useEffect , useState , useRef } from "react"
import { useParams } from "react-router-dom"
import { useNavigate  , useLocation} from "react-router-dom"
import CatalogProducts from "./components/CatalogProducts"
import CatalogPagesNavigator from "./components/CatalogPagesNavigator"
import CatalogHeader from "./components/CatalogHeader"

const availableFilters = [
    'name',
    'category',
    'price',
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
   const params = useParams();
  const location = useLocation()
  
    const [catalogData , setCatalogData] = useState({
       filters:{
         name:params.searchValue ,
         category:'*'
       },
       rawSearchData:searchFilter({name:params.searchValue , category:'*'}, JsonData),
       searchData:getPagination(searchFilter({name:params.searchValue , category:'*'}, JsonData)),
       catalogPage:1
    })

  useEffect(()=>{
    const params = Object.fromEntries(new URLSearchParams(location.search));
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
    //If search parameters aretn empty
    if(Object.keys(searchFilters).length !== 0){
        
      
        setCatalogData({
           ...catalogData,
           filters:{...catalogData.filters , ...searchFilters},
           rawSearchData:searchFilter({...catalogData.filters , ...searchFilters},JsonData),
            searchData:getPagination(searchFilter({...catalogData.filters , ...searchFilters}, JsonData)),
            catalogPage:1,
        })
    } else {
        //Runs if search params are empty
        setCatalogData({
            filters:{
              name:params.searchValue ,
              category:'*'
            },
            rawSearchData:searchFilter({name:params.searchValue , category:'*'}, JsonData),
            searchData:getPagination(searchFilter({name:params.searchValue , category:'*'}, JsonData)),
            catalogPage:1
         })
        navigateTo('/catalog')
    }
  },[location.search])

    return (
        <>
        <div className="websiteContent">
          <CatalogHeader catalogData={catalogData} setCatalogData={setCatalogData} searchValue={params.searchValue}/>
          <CatalogProducts catalogData={catalogData} setCatalogData={setCatalogData} searchValue={params.searchValue} />
          <CatalogPagesNavigator catalogData={catalogData} setCatalogData={setCatalogData}/>
        </div>
        </>
    )
 
}

export default CatalogPage

import searchFilter from "../../functions/filter"
import JsonData from "/data/clothing-data/clothing-data.json"
import { useEffect , useState } from "react"
import { useParams } from "react-router-dom"
import CatalogProducts from "./components/CatalogProducts"
import CatalogPagesNavigator from "./components/CatalogPagesNavigator"
import CatalogHeader from "./components/CatalogHeader"
function CatalogPage() {


    const params = useParams();
    const [filters , setFilters] = useState({name:params.name})
    const [rawSearchData , setRawSearchData] = useState((searchFilter(filters , JsonData)))
    const [searchDataRendering , setSearchDataRendering] = useState([])
    const searchData = []
    const [page , setPage] = useState (1)
    let pagesNumber;

   useEffect(()=>{
      setRawSearchData(searchFilter({name:params.searchValue} , JsonData))
   },[params])

   useEffect(()=>{
    if(searchFilter(filters , JsonData) !== rawSearchData){
        setRawSearchData(searchFilter(filters , JsonData))
    }
   },[filters])


   useEffect(()=>{
    
    if (rawSearchData.length > 10){
        pagesNumber = Math.ceil(rawSearchData.length / 10)
        for(let i = 0; i < pagesNumber; i++ ){
           
           let pageArray = []
           let currentLoopPage=(i === 0 ? 1 : i+1)
           let productIndex = i * 10;
            //Creating an array for a single page
           for(productIndex ; productIndex <= currentLoopPage * 10 ; productIndex++){
            if (productIndex >= currentLoopPage*10 || productIndex+1 > rawSearchData.length) break;
        
            pageArray.push(rawSearchData[productIndex])
           }
           

            searchData.push(pageArray)
        }
         
        
      

    } else {
        let pageArray = []
        let currentLoopPage= 1
        for(let i = 0 ; i <= currentLoopPage * 10 ; i++){
         if (i >= currentLoopPage*10 || i+1 > rawSearchData.length) break;
     
         pageArray.push(rawSearchData[i])
        }
        searchData.push(pageArray)

    }
    setSearchDataRendering(searchData)
    setPage(1)
   },[rawSearchData])

    return (
        <>
        <div className="websiteContent">
          <CatalogHeader searchData={searchDataRendering[page-1]} searchValue={params.searchValue} rawSearchData={rawSearchData} setFilters={setFilters} filters={filters}/>
          <CatalogProducts searchData={searchDataRendering[page-1]} searchValue={params.searchValue} catalogPage={page} />
          <CatalogPagesNavigator catalogPage={page} searchData={searchDataRendering} setCatalogPage={setPage}/>
        </div>
        </>
    )
 
}

export default CatalogPage
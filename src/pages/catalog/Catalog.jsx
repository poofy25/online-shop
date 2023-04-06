
import searchFilter from "../../functions/filter"
import JsonData from "/data/clothing-data/clothing-data.json"
import { useEffect , useState } from "react"
import { useParams } from "react-router-dom"
import CatalogProducts from "./components/CatalogProducts"
import CatalogPagesNavigator from "./components/CatalogPagesNavigator"
import CatalogHeader from "./components/CatalogHeader"
function getPagination(rawData , updateFunc){
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
   const params = useParams();

    const [catalogData , setCatalogData] = useState({
       filters:{
         name:params.searchValue ,
         category:'*'
       },
       rawSearchData:searchFilter({name:params.searchValue , category:'*'}, JsonData),
       searchData:[],
       catalogPage:1
    })
    console.log(catalogData)

   useEffect(()=>{
    setCatalogData({
        ...catalogData,
        rawSearchData:searchFilter({...catalogData.filters , name:params.searchValue},JsonData),
        searchData:getPagination(searchFilter({...catalogData.filters , name:params.searchValue}, JsonData)),
        catalogPage:1,
    })
   },[catalogData.filters])



   useEffect(()=>{

      setCatalogData({
         ...catalogData,
         filters:{...catalogData.filters , name:params.searchValue},
         rawSearchData:searchFilter({...catalogData.filters , name:params.searchValue}, JsonData),
         searchData:getPagination(searchFilter({...catalogData.filters , name:params.searchValue}, JsonData)),
         catalogPage:1
        })
      
   },[params])


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

import searchFilter from "../../functions/filter"
import JsonData from "/data/clothing-data/clothing-data.json"
import Product from "../../components/product/Product"
import { useEffect , useState } from "react"
import { useParams } from "react-router-dom"
import CatalogProducts from "./components/CatalogProducts"
function CatalogPage() {


    const params = useParams();
    const [searchData , setSearchData] = useState(searchFilter({name:params.searchValue} , JsonData))

   useEffect(()=>{
      setSearchData(searchFilter({name:params.searchValue} , JsonData))
   },[params])

    return (
        <>
        <div className="websiteContent">
       <CatalogProducts searchData={searchData} searchValue={params.searchValue} />
        </div>
        </>
    )
 
}

export default CatalogPage
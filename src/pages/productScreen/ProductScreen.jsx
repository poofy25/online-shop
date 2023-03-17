import { useParams } from "react-router-dom"
import searchFilter from "../../functions/filter";
import JsonData from "/data/clothing-data/clothing-data.json"
import { useEffect , useState } from "react";
import "./productScreen.css"


function ProductPage() {
     const params = useParams();
     const productID = Number(params.id)

    const [productData , setProductData] = useState({})
     console.log(productID)

     const filterBy = {
        id:[productID]
    }
    useEffect(()=>{
        setProductData(searchFilter(filterBy , JsonData))
        console.log(productData[0])
    },[])
     
    console.log(productData[0])
    

    return (
        <>
        <div className="productScreen">
            <img src={productData[0]?.image}/>
            <p>{productData[0]?.name}</p>
        </div>
        </>
    )
 
}

export default ProductPage
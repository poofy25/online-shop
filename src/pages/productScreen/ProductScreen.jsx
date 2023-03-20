import { useParams } from "react-router-dom"
import searchFilter from "../../functions/filter";
import JsonData from "/data/clothing-data/clothing-data.json"
import { useEffect , useState , useMemo} from "react";
import "./styles/productScreen.css"

import ProductPrice from "./components/ProductPrice";
import ProductColors from "./components/ProductColors";
import ProductSizes from "./components/ProductSizes";
import ToCartBtn from "./components/ToCartBtn";

function ProductPage() {
     let params = useParams();
    const [productID , setProductID] = useState(Number(params.id))
    const [productData , setProductData] = useState({})
    


    useEffect(()=>{
        setProductData(searchFilter({id:[productID]} , JsonData))
    },[])
    useEffect(()=>{
        setProductID(Number(params.id))
    },[params])
    useEffect(()=>{
        setProductData(searchFilter({id:[productID]} , JsonData))
    },[productID])

    return (
        <div className="productScreen">
            <img src={productData[0]?.image}/>
            <div className="productContent">
              <p className="productName">{productData[0]?.name}</p>
              <ProductPrice productData={productData[0]}/>
              <ProductColors productData={productData[0]}/>
              <ProductSizes productData={productData[0]}/>
              <ToCartBtn productData={productData[0]}/>
            </div>
        </div>
    )
 
}

export default ProductPage
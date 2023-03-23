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
    const [productCartData , setProductCartData] = useState({
        name:productData[0]?.name,
        price:productData[0]?.price,
        discount:productData[0]?.discount ?
        {percent:productData[0]?.discount.percent,
         price_after_discount:productData[0]?.discount.price_after_discount
        } : null,
        color:'',
        size:'',
        image:productData[0]?.image,
        amount:1
    })
    useEffect(()=>{
        setProductData(searchFilter({id:[productID]} , JsonData))
    },[])
    useEffect(()=>{
        setProductID(Number(params.id))
    },[params])
    useEffect(()=>{
        setProductData(searchFilter({id:[productID]} , JsonData))
    },[productID])
    useEffect(()=>{
        setProductCartData({     name:productData[0]?.name,
            price:productData[0]?.price,
            discount:productData[0]?.discount ?
            {percent:productData[0]?.discount.percentage,
             price_after_discount:productData[0]?.discount.price_after_discount
            } : null,
            color:productData[0]?.colors[0],
            size:'',
            image:productData[0]?.image,
            amount:1,


        })
    },[productData])

    return (
        <div className="productScreen">
            <img src={productData[0]?.image}/>
            <div className="productContent">
              <p className="productName">{productData[0]?.name}</p>
              <ProductPrice productData={productData[0]}/>
              <ProductColors productData={productData[0]} productCartData={setProductCartData}/>
              <ProductSizes productData={productData[0]} productCartData={setProductCartData}/>
              <ToCartBtn productData={productData[0]} productCartData={productCartData}/>
            </div>
        </div>
    )
 
}

export default ProductPage
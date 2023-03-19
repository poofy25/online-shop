
import "../styles/productPrice.css"


function ProductPrice(props) {
const productData = props.productData

    return (
        <>
              <p className="productPercentOff">{productData?.discount ? `Save ${productData?.discount.percentage}%` : ""}</p>
              <div className="productPriceContainer">
               <p className="productPrice">{productData?.discount ? "" : '$'+productData?.price}</p>
               <p className="productPriceAfterDiscount">{productData?.discount ? '$'+productData?.discount.price_after_discount : ""}</p>
               <p className="productPriceBeforeDiscount">{productData?.discount ? "$"+productData?.price : ""}</p>
              </div>

        </>
    )
 
}

export default ProductPrice
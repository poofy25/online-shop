
import './product.css'


function Product(props) {

  return (
    <div className='productContainer'>
        <img src={props.product_img}/>
        <p>{props.product_name}</p>
        <p>{props.product_price}$</p>
    </div>
  )
}

export default Product

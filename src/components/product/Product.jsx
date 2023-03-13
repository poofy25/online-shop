
import './product.css'
import JsonData from "/data/clothing-data/clothing-data.json"

function Product() {
console.log(JsonData)
  return (
    <div className='productContainer'>
        <img src={JsonData.first.images[0]}/>
        <p>{JsonData.first.name.slice(0,40)}</p>
        <p>{JsonData.first.price}</p>
    </div>
  )
}

export default Product

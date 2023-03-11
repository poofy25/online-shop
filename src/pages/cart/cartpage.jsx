import Navbar from "../../components/navbar/navbar"
import EmptyCart from "./components/emptyCart"


function CartPage() {
return (
    <>
        <Navbar/>
        <div className="websiteContent">
            <EmptyCart/>
        </div>
    </>
)
 
}

export default CartPage
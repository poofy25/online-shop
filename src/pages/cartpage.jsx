import Navbar from "../components/navbar/navbar"
import EmptyCart from "../components/PageComponents/cartPAGE/emptyCart"



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
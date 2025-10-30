import '../css/navbar.css'
import { FaCartShopping } from "react-icons/fa6";

const CartWidget = () => {

    return (
        <>
            <div className='cart-container'>
                <FaCartShopping className="cart-icon"/>
                <span className='counter-badge'>2</span>
            </div>
        </>
    )
}

export default CartWidget
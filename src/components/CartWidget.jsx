import { useContext } from 'react';
import '../css/navbar.css'
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

    const { cart, calcItemsQty } = useContext(CartContext);

    return (
        <>
            <div className='cart-container'>
                <Link className='btn-cart-widget' to='/cart'>
                <FaCartShopping className="cart-icon" />
            </Link>
            {
                cart.length > 0 && <span className='counter-badge'>{calcItemsQty()}</span>
            }
        </div >
        </>
    )
}

export default CartWidget;
import { useCheckout } from "../hooks/useCheckout";
import CheckoutForm from "./CheckoutForm";
import { Link } from "react-router-dom";

const Checkout = () => {
    const {cart, orderId, buyer, buyerData, finishOrder, errorMessage} = useCheckout();
    
    return (
        <div>
            {
                orderId ? (
                    <div>
                        <h2>Muchas gracias por su compra.</h2>
                        <p>Su n° de orden es: {orderId}</p>
                        <Link className="btn-primary" to='/'>Volver al Home</Link>
                    </div>
                ) : cart.length > 0 ? (
                    <CheckoutForm orderId={orderId} buyer={buyer} buyerData={buyerData} finishOrder={finishOrder} errorMessage={errorMessage}/>
                ) : (
                    <div className="empty-cart">
                        <p className="empty-cart-text">No hay productos en tu carrito.</p>
                        <Link className='btn-primary' to='/'> Volver al Home </Link>
                    </div>
                )
            }
        </div>
    )
}

export default Checkout;
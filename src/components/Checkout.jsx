import { useCheckout } from "../hooks/useCheckout";
import CheckoutForm from "./CheckoutForm";
import { Link } from "react-router-dom";
import { MdErrorOutline } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import '../css/checkout.css'

const Checkout = () => {
    const { cart, orderId, buyer, buyerData, finishOrder, errorMessage, checkoutError } = useCheckout();

    return (
        <>
            {
                !orderId && checkoutError && (
                    <div className="checkout-error-container">
                        <MdErrorOutline className="error-icon" />
                        <h2>Ocurrió un error al procesar tu compra.</h2>
                        <p>Por favor, intentá nuevamente.</p>
                    </div>
                )
            }

            {
                orderId && !checkoutError ? (
                    <div className="checkout-success-container">
                        <FaRegCheckCircle className="success-icon" />
                        <h2>Muchas gracias por su compra.</h2>
                        <p>Su n° de orden es: <span style={{ fontWeight: 600 }}>{orderId}</span></p>
                        <Link className="btn-primary" to='/'>Volver al Home</Link>
                    </div>
                ) : cart.length > 0 ? (
                    <CheckoutForm orderId={orderId} buyer={buyer} buyerData={buyerData} finishOrder={finishOrder} errorMessage={errorMessage} />
                ) : (
                    <div className="checkout-page">
                        <div className="empty-cart">
                            <p className="empty-cart-text">No hay productos en tu carrito.</p>
                            <Link className='btn-primary' to='/'> Volver al Home </Link>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Checkout;

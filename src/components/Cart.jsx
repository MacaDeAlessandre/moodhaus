import { CartContext } from '../../context/CartContext';
import { useContext } from "react";
import { Link } from 'react-router-dom';
import CartView from './CartView';
import '../css/cart.css';

const Cart = () => {
    const { cart, totalOrder, clear } = useContext(CartContext);

    return (
        <div className="cart-page">
            {cart.length === 0 ? (
                <div className="empty-cart">
                    <p className="empty-cart-text">No hay productos en tu carrito.</p>
                    <Link className='btn-primary' to='/'>
                        Volver al Home
                    </Link>
                </div>
            ) : (
                <div className="cart-content">
                    {cart.map((product) => (
                        <CartView key={product.id} product={product} />
                    ))}

                    <div className="cart-summary">
                        <p className="total">Total a pagar: ${totalOrder().toLocaleString('es-AR')}</p>
                        <button className='btn-primary'>
                            Terminar compra
                        </button>
                    </div>

                    <button className='btn-danger' onClick={clear}>
                        Vaciar carrito
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;

import { CartContext } from '../../context/CartContext';
import { useContext } from "react";
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, removeItem, totalOrder } = useContext(CartContext);

    return (
        <>
            {
                cart.length === 0 ? (
                    <div>
                        <p>Aún no has añadido productos a tu carrito</p>
                        <Link className='btn-back-to-home' to='/'>
                            <p className='btn-label'>Volver al Home</p>
                        </Link>
                    </div>
                ) : (
                    <>
                        {cart.map((product) => (
                            <div key={product.id}>
                                <img src={product.img} alt={product.name} />
                                <h3>Producto: {product.name}</h3>
                                <p>Precio por unidad: ${product.price}</p>
                                <p>Cantidades añadidas al carrito: ${product.quantity}</p>
                                <button className='btn-remove-item' onClick={() => removeItem(product.id)}>
                                    Eliminar del carrito
                                </button>
                            </div>
                        ))}
                        <p>Total a pagar: ${totalOrder()}</p>
                    </>
                )
            }
        </>
    )

}

export default Cart;
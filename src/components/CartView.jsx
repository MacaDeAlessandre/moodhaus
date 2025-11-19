import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import '../css/cartView.css';

const CartView = ({ product }) => {
    const { confirmRemoveItem } = useContext(CartContext);

    return (
        <div className="cart-item">
            <img className="cart-item-img" src={product.img} alt={product.name} />
            <div className="cart-item-info">
                <h3 className="cart-item-name">{product.name}</h3>
                <p className="cart-item-price">Precio por unidad: <span style={{ fontWeight: 600 }}>${product.price.toLocaleString('es-AR')}</span></p>
                <p className="cart-item-qty">Cantidad: <span style={{ fontWeight: 600 }}>{product.quantity}</span></p>
                <p className="cart-item-subtotal">
                    Precio final: <span style={{ fontWeight: 600 }}>${(product.price * product.quantity).toLocaleString('es-AR')}</span>
                </p>
            </div>
            <button className='btn-remove-item' onClick={() => confirmRemoveItem(product.id)}>
                <FaTrashAlt style={{color: 'white'}}/>
            </button>
        </div>
    );
};

export default CartView;

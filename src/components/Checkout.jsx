import { useContext } from "react";
import { useState } from "react";
import { db } from "../service/firebase";
import { CartContext } from '../../context/CartContext';
import { serverTimestamp, collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const Checkout = () => {

    const [buyer, setBuyer] = useState({});
    const [orderId, setOrderId] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const { cart, totalOrder, clear } = useContext(CartContext);

    const buyerData = (e) => {
        setBuyer(
            {
                ...buyer,
                [e.target.name]: e.target.value,
            }
        )
    }

    const finishOrder = (e) => {
        e.preventDefault();
        if (!buyer.name || !buyer.lastname || !buyer.mail || !buyer.mailConfirmation || !buyer.delivery || !buyer.address || !buyer.location) {
            setErrorMessage('Por favor, completá todos los campos')
        } else if (buyer.mail != buyer.mailConfirmation) {
            setErrorMessage('Las direcciones de mail no coinciden')
        } else {
            setErrorMessage(null);
            let finalOrder = {
                buyer: buyer,
                order: cart,
                total: totalOrder(),
                date: serverTimestamp()
            }
            const sales = collection(db, "orders")
            addDoc(sales, finalOrder)
                .then((res) => {
                    setOrderId(res.id)
                    clear();
                })
                .catch((error) => console.log(error))
        }
    }

    return (
        <div>
            {
                orderId
                    ? (<div><h2>Muchas gracias por su compra.</h2>
                        <p>Su n° de orden es: {orderId}</p>
                        <Link className="btn-primary" to='/'>Volver al Home</Link></div>
                    ) : cart.length > 0 ? (
                        <div>
                            <h2>Completá con tus datos</h2>
                            {errorMessage && <p>{errorMessage}</p>}
                            <form className="order-form" onSubmit={finishOrder}>
                                <input name="name" type="text" placeholder="Ingresá tu nombre" onChange={buyerData} />
                                <input name="lastname" type="text" placeholder="Ingresá tu apellido" onChange={buyerData} />
                                <input name="mail" type="mail" placeholder="Ingresá tu dirección de email" onChange={buyerData} />
                                <input name="mailConfirmation" type="mail" placeholder="Confirmá tu dirección de email" onChange={buyerData} />
                                <select name="delivery" value={buyer.delivery || ""} onChange={buyerData}>
                                    <option value="" disabled hidden>Seleccioná tu tipo de entrega</option>
                                    <option value="option1">Retiro en el local</option>
                                    <option value="option2">Envío a domicilio</option>
                                </select>
                                <input name="address" type="text" placeholder="Ingresá tu dirección" onChange={buyerData} />
                                <select name="location" value={buyer.location || ""} onChange={buyerData}>
                                    <option value="" disabled hidden>Seleccioná tu ubicación</option>
                                    <option value="optionCaba">CABA, Buenos Aires</option>
                                    <option value="optionGba">Provincia de Buenos Aires</option>
                                </select>
                                <button type="submit">Finalizar compra</button>
                            </form>
                        </div>
                    ) : (
                        <div className="empty-cart">
                            <p className="empty-cart-text">No hay productos en tu carrito.</p>
                            <Link className='btn-primary' to='/'>
                                Volver al Home
                            </Link>
                        </div>
                    )
            }
        </div>

    )
}

export default Checkout;
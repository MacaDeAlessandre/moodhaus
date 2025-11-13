import { useContext, useState, useEffect } from "react";
import { db } from "../service/firebase";
import { CartContext } from "../../context/CartContext";
import { serverTimestamp, collection, addDoc } from "firebase/firestore";

export const useCheckout = () => {
    const { cart, totalOrder, clear } = useContext(CartContext);
    const [buyer, setBuyer] = useState({});
    const [orderId, setOrderId] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    const buyerData = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value,
        });
    };

    const finishOrder = (e) => {
        e.preventDefault();

        if (!buyer.name || !buyer.lastname || !buyer.mail || !buyer.mailConfirmation || !buyer.delivery || !buyer.address || !buyer.location) {
            setErrorMessage("Por favor, completá todos los campos");
        } else if (buyer.mail !== buyer.mailConfirmation) {
            setErrorMessage("Las direcciones de mail no coinciden");
        } else {
            setErrorMessage(null);

            const finalOrder = {
                buyer: buyer,
                order: cart,
                total: totalOrder(),
                date: serverTimestamp(),
            };

            const sales = collection(db, "orders");

            addDoc(sales, finalOrder)
                .then((res) => setOrderId(res.id))
                .catch((error) => console.log(error));
        }
    };

    useEffect(() => {
        if (orderId) {
            clear();
        }
    }, [orderId]);

    return {
        cart,
        orderId,
        buyer,
        buyerData,
        finishOrder,
        errorMessage,
    };
};

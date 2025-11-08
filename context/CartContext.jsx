import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addItem = (item, qty) => {
        if (isInCart(item.id)) {
            const updatedCart = cart.map((product) => {
                if (product.id === item.id) {
                    return { ...product, quantity: product.quantity + qty };
                } else {
                    return product;
                }
            });
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...item, quantity: qty }]);
        }
    };

    const removeItem = (id) => {
        setCart(cart.filter((product) => product.id !== id));
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        return cart.some(((product) => product.id === id));
    }

    const totalOrder = () => {
        return cart.reduce((acc, product) => {
            const subtotal = product.quantity * product.price;
            return acc + subtotal;
        }, 0);
    }

    const calcItemsQty = () => {
        return cart.reduce((acc, product) => {
            const subtotal = acc + product.quantity;
            return subtotal;
        }, 0);
    }

    return (
        <CartContext.Provider value={{ cart, setCart, addItem, removeItem, clear, isInCart, totalOrder, calcItemsQty }}>
            {children}
        </CartContext.Provider>
    )
};

export default CartProvider;
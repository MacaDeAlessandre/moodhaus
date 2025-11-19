import { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const persistentCart = JSON.parse(localStorage.getItem("Productos agregados al carrito")) || [];
    const [cart, setCart] = useState(persistentCart);

    useEffect(() => {
        localStorage.setItem("Productos agregados al carrito", JSON.stringify(cart))
    }, [cart])

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

    const confirmRemoveItem = (id) => {
        Swal.fire({
            icon: 'question',
            title: "¿Querés eliminar el producto?",
            text: "Esta acción eliminará el producto de tu carrito",
            showDenyButton: true,
            confirmButtonText: "Sí",
            denyButtonText: `No`,
            customClass: {
                title: 'swal-title',
                content: 'swal-content',
                confirmButton: 'swal-confirm',
                denyButton: 'swal-deny'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                removeItem(id);
            };
        });
    }

    const removeItem = (id) => {
        setCart(cart.filter((product) => product.id !== id));
    }

    const clear = () => {
        setCart([]);
    }

    const confirmClear = () => {
        Swal.fire({
            icon: 'question',
            title: "¿Querés vaciar el carrito?",
            text: "Esta acción eliminará todos los productos.",
            showDenyButton: true,
            confirmButtonText: "Sí",
            denyButtonText: `No`,
            customClass: {
                title: 'swal-title',
                content: 'swal-content',
                confirmButton: 'swal-confirm',
                denyButton: 'swal-deny'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                clear();
            };
        });
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
        <CartContext.Provider value={{ cart, setCart, addItem, removeItem, clear, isInCart, totalOrder, calcItemsQty, confirmClear, confirmRemoveItem }}>
            {children}
        </CartContext.Provider>
    )
};

export default CartProvider;
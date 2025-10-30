import { useState, useEffect } from 'react'
import '../css/itemCount.css'


const ItemCount = ({stock}) => {
const [count, setCount] = useState(1);
const [addToCart, setAddToCart] = useState(false);

const addItems = () => {
    if (count < stock) {
        setCount(count + 1);
    }
};

const subtractItems = () => {
    if (count > 0) {
        setCount(count - 1);
    }
};

// CONTINUAR CON ESTA FUNCIÓN Y EL USEEFFECT PARA EL PROYECTO FINAL

const addItemsToCart = () => {
    if (addToCart) {
        setAddToCart()
    }
}

useEffect(() => {

},[addToCart]);

    return (
        <>
        <div className="item-counter">
            <button className="btn-subtract" onClick={subtractItems} disabled={count === 0}>-</button>
            <span className="counter">{count}</span>
            <button className="btn-add" onClick={addItems}>+</button>
        </div>
        <button className="btn-addToCart" onClick={addItemsToCart}>Agregar al carrito</button>
        </>
    )
};

export default ItemCount;
import { useState, useEffect } from 'react'
import '../css/itemCount.css'


const ItemCount = ({stock, onAdd}) => {
const [count, setCount] = useState(1);

const sumItems = () => {
    if (count < stock) {
        setCount(count + 1);
    }
};

const subtractItems = () => {
    if (count > 0) {
        setCount(count - 1);
    }
};

const addToCart = () => {
    onAdd(count);
}

    return (
        <div className='item-container'>
        <div className="item-counter">
            <button className="btn-subtract" onClick={subtractItems} disabled={count === 0}>-</button>
            <span className="counter">{count}</span>
            <button className="btn-add" onClick={sumItems}>+</button>
        </div>
        <button className="btn-primary" onClick={addToCart} disabled={count === 0 || stock === 0} >Agregar al carrito</button>
        </div>
    )
};

export default ItemCount;
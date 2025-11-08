import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa6";
import { useContext } from 'react';
import '../css/itemDetail.css'
import { CartContext } from '../../context/CartContext';
import { useState } from 'react';

const ItemDetail = ({ detail }) => {

    const {addItem} = useContext(CartContext);
    const [quantityAdded, setQuantityAdded] = useState(0);

    const onAdd = (quantity) => {
        addItem(detail, quantity);
        setQuantityAdded(quantity);
    }

    return (
        <div className='section-item-detail'>
            <Link className='btn-back-to-home' to='/'>
            <FaArrowLeft />
            <p className='btn-label'>Volver al Home</p>
            </Link>
            <div className="item-detail">
                <img className="item-detail-img" src={detail.img} alt={detail.name} />
                <div className="item-detail-info">
                    <h1 className="item-detail-title">{detail.name}</h1>
                    <p className="item-detail-description">{detail.description}</p>
                    <p className="item-detail-price">${detail.price}</p>
                </div>
                <>
                    {
                        quantityAdded > 0 ? <Link className="btn-finish-order" to='/cart'>Finalizar compra</Link> : <div className="item-count">
                    <ItemCount stock={detail.stock} onAdd={onAdd}/>
                </div>
                    }
                </>

            </div>
        </div>
    )
}

export default ItemDetail;

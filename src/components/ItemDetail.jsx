import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa6";
import { useContext } from 'react';
import '../css/itemDetail.css'
import { CartContext } from '../../context/CartContext';
import { useState, useEffect } from 'react';

const ItemDetail = ({ detail, updateAvailableStock }) => {
    const [updatedStock, setUpdatedStock] = useState(detail.stock);
    const { cart, addItem } = useContext(CartContext);
    const [quantityAdded, setQuantityAdded] = useState(0);

    useEffect(() => {
        setUpdatedStock(updateAvailableStock());
    }, [cart, detail]);


    const onAdd = (quantity) => {
        addItem(detail, quantity);
        setQuantityAdded(quantity);
    }



    return (
        <div className='section-item-detail'>
            <Link to='/' className='btn-back-to-home'>
                <FaArrowLeft className='btn-arrow-icon' />
                <p className='btn-label'>Volver al Home</p>
            </Link>
            <div className="item-detail">
                <div className='item-info'>
                    <img className="item-detail-img" src={detail.img} alt={detail.name} />
                    <div className="item-detail-info">
                        <h1 className="item-detail-title">{detail.name}</h1>
                        <p className="item-detail-description">{detail.description}</p>
                        <>
                            {
                                updatedStock === 0 ?
                                    <p><i>Lo sentimos, no hay stock disponible de este producto.</i></p>
                                    :
                                    <>
                                        <p className="item-detail-stock">Stock disponible: <span style={{ fontWeight: 600 }}>{updatedStock}</span> unidades.</p>
                                        <p className="item-detail-price">${detail.price}</p>
                                    </>
                            }
                        </>
                    </div>
                </div>
                <>
                    {
                        quantityAdded > 0
                            ? <Link className="btn-primary" to='/cart'>Finalizar compra</Link>
                            : (updatedStock > 0 && (
                                    <div className="item-count">
                                        <ItemCount stock={updatedStock} onAdd={onAdd} />
                                    </div>
                                )
                            )
                    }
                </>
            </div>
        </div>
    )
}

export default ItemDetail;

import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa6";
import '../css/itemDetail.css'

const ItemDetail = ({ detail }) => {
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
                <div className="item-count">
                    <ItemCount stock={detail.stock} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;

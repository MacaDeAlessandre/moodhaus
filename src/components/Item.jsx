import { Link } from 'react-router-dom';
import '../css/item.css'

const Item = ({ product }) => {

    return (
        <div className='item-card'>
            <div>
                <img src={product.img} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price.toLocaleString('es-AR')}</p>
            </div>
            <Link className='btn-primary' to={`/item/${product.id}`}>Ver más</Link>
        </div>
    )
}

export default Item; 
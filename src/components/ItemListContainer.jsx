import { useEffect, useState } from 'react'
import { getProducts } from '../mock/AsyncService';
import ItemList from './ItemList'
import { useParams } from 'react-router-dom';
import '../css/itemListContainer.css';
import Loader from './Loader';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(false);
    const param = useParams();
    const category = param.type;

    useEffect(() => {
        setLoader(true);
        getProducts()
            .then((res) => {
                if (category) {
                    setProducts(res.filter((product) => product.category === category))
                } else {
                    setProducts(res);
                }
            })
            .catch((error) => console.log(error))
            .finally(() => setLoader(false));
    }, [category]);

    return (
        <>
            {
                loader ? <Loader loading={loader}/> : <div className='item-list-container'>
                    <h1>{category ? category : ''}</h1>
                    <ItemList products={products} />
                </div>
            }
        </>
    )
};

export default ItemListContainer;
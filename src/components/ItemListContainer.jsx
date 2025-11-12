import { useEffect, useState } from 'react';
import { getProducts } from '../mock/AsyncService';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import '../css/itemListContainer.css';
import Loader from './Loader';
import { collection, getDocs, addDoc, where, query } from 'firebase/firestore';
import { db } from "../service/firebase";
import { productsList } from '../mock/AsyncService';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(false);
    const param = useParams();
    const category = param.type;

    useEffect(() => {
        setLoader(true);
        const productsCollection = category
        ? query(collection(db, "products"), where("category", "==", category))
        : collection(db, "products");
        getDocs(productsCollection)
            .then((res) => {
                const list = res.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setProducts(list);
            })
            .catch((error) => console.log(error))
            .finally(() => setLoader(false));
    },[category]);

    return (
        <>
            {
                loader ? <Loader loading={loader} /> : <div className='item-list-container'>
                    <h1>{category ? category : ''}</h1>
                    <ItemList products={products} />
                </div>
            }
        </>
    )
};

export default ItemListContainer;
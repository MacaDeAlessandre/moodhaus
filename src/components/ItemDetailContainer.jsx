import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../service/firebase";
import { MdErrorOutline } from "react-icons/md";
import '../css/itemDetailContainer.css'

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({});
    const [loader, setLoader] = useState(false);
    const [invalid, setInvalid] = useState(null);
    const [fetchError, setFetchError] = useState(false);
    const param = useParams();
    const id = param.id;

    useEffect(() => {
        setLoader(true);
        const docRef = doc(db, "products", id);
        getDoc(docRef)
            .then((res) => {
                if (res.data()) {
                    setDetail({ id: res.id, ...res.data() })
                } else {
                    setInvalid(true);
                }
            })
            .catch((error) => {
                console.log(`Ocurrió un error al intentar cargar el producto: ${error}`)
                setFetchError(true)
            })
            .finally(() => setLoader(false));
    }, [id]);

    return (
        <>
            {loader && <Loader loading={loader} />}

            {!fetchError && !invalid && <ItemDetail detail={detail} />}

            {!fetchError && invalid && (
                <div className="invalid-product">
                    <h2>El producto que estás buscando no existe.</h2>
                    <Link className="btn-primary" to='/'>Volver al Home</Link>
                </div>
            )}

            {fetchError && (
                <div className='item-detail-error'>
                    <div className='fetch-error-message'>
                        <MdErrorOutline className="error-icon" />
                        <h2>Ocurrió un error al cargar el producto.</h2>
                        <p>Por favor, volvé a intentarlo más tarde.</p>
                    </div>
                </div>
            )}

        </>
    )
}

export default ItemDetailContainer; 
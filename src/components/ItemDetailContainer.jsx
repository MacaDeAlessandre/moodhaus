import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../service/firebase";


const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({});
    const [loader, setLoader] = useState(false);
    const [invalid, setInvalid] = useState(null);
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
            .catch((error) => console.log(error))
            .finally(() => setLoader(false));
    }, [id]);

    return (
        <>
            {
                loader ? <Loader loading={loader} /> : <ItemDetail detail={detail} />
            }
            { 
                invalid &&
                <div>
                    <h2>El producto que estás buscando no existe.</h2>
                    <Link className="btn-primary" to='/'>Volver al Home</Link>
                </div>
            }
        </>
    )
}

export default ItemDetailContainer; 
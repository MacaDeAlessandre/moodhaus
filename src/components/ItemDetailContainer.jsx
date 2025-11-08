import { useEffect, useState } from "react";
import { getSingleProduct } from '../mock/AsyncService';
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({});
    const [loader, setLoader] = useState(false);
    const param = useParams();
    const id = param.id;

    useEffect(() => {
        setLoader(true);
        getSingleProduct(id)
        .then((res)=> setDetail(res))
        .catch((error)=> console.log(error))
        .finally(() => setLoader(false));
    },[id]);

    return (
        <>
        {
            loader ? <Loader loading={loader}/> : <ItemDetail detail={detail}/>
        }
        </>
    )
}

export default ItemDetailContainer;
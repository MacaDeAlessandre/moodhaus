import { useEffect, useState } from "react";
import { getSingleProduct } from '../mock/AsyncService';
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({});
    const param = useParams();
    const id = param.id;

    useEffect(() => {
        getSingleProduct(id)
        .then((res)=> setDetail(res))
        .catch((error)=> console.log(error));
    },[id]);

    return (
        <>
        <ItemDetail detail={detail}/>
        </>
    )
}

export default ItemDetailContainer;
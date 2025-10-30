import { MdErrorOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import '../css/error.css'

const Error = () => {
    return(
        <div className="error-container">
            <MdErrorOutline className="error-icon" />
            <p className="error-message">Ups! La página que buscas no existe.</p>
            <Link className='btn-back-from-error' to='/'>Volver al Inicio</Link>
        </div>
    )
}

export default Error;

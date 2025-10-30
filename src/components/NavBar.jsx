import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';
import '../css/navbar.css'

const NavBar = () => {

    return (
        <>
            <nav className="nav-container">
                <NavLink to='/'>
                <img className="brand-logo" src="../brand-logo.png" alt="Logo de MoodHaus"/> 
                </NavLink>  
                <div className='divider-container'>
                    <NavLink className="nav-category" to='/category/Iluminación'>Iluminación</NavLink>
                    <NavLink className="nav-category" to='/category/Sillas y sillones'>Sillas y sillones</NavLink>
                    <NavLink className="nav-category" to='/category/Deco'>Deco</NavLink>
                </div>
                <CartWidget/>
            </nav>
        </>
    )
};

export default NavBar;
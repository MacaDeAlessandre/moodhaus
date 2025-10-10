import CartWidget from './CartWidget';
import '../css/navbar.css'

const NavBar = () => {

    return (
        <>
            <nav className="nav-container">
                <img className="brand-logo" src="../brand-logo.png" alt="Logo de MoodHaus"/>   
                <div className='divider-container'>
                    <a className="nav-category" href="">Estilo Boho Chic</a>
                    <a className="nav-category" href="">Estilo Industrial Moderno</a>
                    <a className="nav-category" href="">Estilo Retro Pop</a>
                </div>
                <CartWidget/>
            </nav>
        </>
    )
};

export default NavBar;
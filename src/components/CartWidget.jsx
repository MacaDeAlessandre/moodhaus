import '../css/navbar.css'

const CartWidget = () => {

    return (
        <>
            <div className='cart-container'>
                <img src="../public/cart.png" alt="Ícono de Carrito" />
                <span className='counter-badge'>2</span>
            </div>
        </>
    )
}

export default CartWidget
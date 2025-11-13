import '../css/checkoutForm.css'

const CheckoutForm = ({buyer, buyerData, finishOrder, errorMessage}) => {

    return (
        <div className="checkout-form-container">
            <h2>Completá con tus datos</h2>

            {errorMessage && <p className="checkout-error-message">{errorMessage}</p>}

            <form className="order-form" onSubmit={finishOrder}>
                <div className="form-row">
                    <input name="name" type="text" placeholder="Ingresá tu nombre" onChange={buyerData} />
                    <input name="lastname" type="text" placeholder="Ingresá tu apellido" onChange={buyerData} />
                </div>
                <div className="form-row">
                    <input name="mail" type="mail" placeholder="Ingresá tu dirección de email" onChange={buyerData} />
                    <input name="mailConfirmation" type="mail" placeholder="Confirmá tu dirección de email" onChange={buyerData} />
                </div>
                <div className="form-row">
                    <select name="delivery" value={buyer.delivery || ""} onChange={buyerData}>
                        <option value="" disabled hidden>Seleccioná tu tipo de entrega</option>
                        <option value="option1">Retiro en el local</option>
                        <option value="option2">Envío a domicilio</option>
                    </select>
                </div>
                <div className="form-row">
                    <input name="address" type="text" placeholder="Ingresá tu dirección" onChange={buyerData} />
                    <select name="location" value={buyer.location || ""} onChange={buyerData}>
                        <option value="" disabled hidden>Seleccioná tu ubicación</option>
                        <option value="optionCaba">CABA, Buenos Aires</option>
                        <option value="optionGba">Provincia de Buenos Aires</option>
                    </select>
                </div>

                <button type="submit" className="btn-primary">Finalizar compra</button>
            </form>
        </div>
    )
}

export default CheckoutForm;

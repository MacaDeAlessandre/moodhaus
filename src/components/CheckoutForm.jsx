
const CheckoutForm = ({buyer, buyerData, finishOrder, errorMessage}) => {

    return (
        <div>
            <h2>Completá con tus datos</h2>
            {errorMessage && <p>{errorMessage}</p>}
            <form className="order-form" onSubmit={finishOrder}>
                <input name="name" type="text" placeholder="Ingresá tu nombre" onChange={buyerData} />
                <input name="lastname" type="text" placeholder="Ingresá tu apellido" onChange={buyerData} />
                <input name="mail" type="mail" placeholder="Ingresá tu dirección de email" onChange={buyerData} />
                <input name="mailConfirmation" type="mail" placeholder="Confirmá tu dirección de email" onChange={buyerData} />
                <select name="delivery" value={buyer.delivery || ""} onChange={buyerData}>
                    <option value="" disabled hidden>Seleccioná tu tipo de entrega</option>
                    <option value="option1">Retiro en el local</option>
                    <option value="option2">Envío a domicilio</option>
                </select>
                <input name="address" type="text" placeholder="Ingresá tu dirección" onChange={buyerData} />
                <select name="location" value={buyer.location || ""} onChange={buyerData}>
                    <option value="" disabled hidden>Seleccioná tu ubicación</option>
                    <option value="optionCaba">CABA, Buenos Aires</option>
                    <option value="optionGba">Provincia de Buenos Aires</option>
                </select>
                <button type="submit">Finalizar compra</button>
            </form>
        </div>
    )
}

export default CheckoutForm;
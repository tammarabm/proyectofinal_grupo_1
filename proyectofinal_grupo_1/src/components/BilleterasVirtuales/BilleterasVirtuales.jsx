import "./BilleterasVirtuales.css"

const BilleterasVirtuales = () => {

    return (
        <section className="billeteras">
            <section className="contenedor">
                <form>
                    <input type="text" id="usuario" placeholder="Nombre de usuario" />
                    <select name="select" id="billetera">
                        <option value="" disabled selected>Selecciona una billetera</option>
                        <option value="MercadoPago">MercadoPago</option>
                        <option value="Modo">Modo</option>
                        <option value="Uala">Uala</option>
                        <option value="NaranjaX">NaranjaX</option>
                        <option value="PayPal">PayPal</option>
                        <option value="Skrill">Skrill</option>
                    </select>
                    <input type="number" id="transaccion" placeholder="Numero de Transacciones" />
                    <button className="button" id="guardar">Guardar</button>
                    <button className="button" id="maxTransacciones">Billeteras con más transacciones</button>
                </form>
                <div className="listas">
                    <p className="p" id="lista"></p>
                    <p className="p" id="listaTransacciones"></p>
                </div>
            </section>
        </section>
    )
}

export default BilleterasVirtuales;
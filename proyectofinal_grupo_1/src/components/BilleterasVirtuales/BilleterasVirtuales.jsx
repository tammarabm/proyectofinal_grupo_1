import "./BilleterasVirtuales.css"
import { useState } from "react";

const BilleterasVirtuales = () => {

    const billeterasVirtuales = ['MercadoPago', 'Modo', 'Uala', 'NaranjaX', 'PayPal', 'Skrill'];
    const [usuario, setUsuario] = useState("");
    const [billetera, setBilletera] = useState("");
    const [transaccion, setTransaccion] = useState("");
    const [cuentas, setCuentas] = useState([]);
    const [cuentasMasTransacciones, setCuentasMasTransacciones] = useState([]);

    const agregarCuentas = () => {

        let cuentasExistentes = cuentas.find(
            (cuenta) => cuenta.usuario === usuario && cuenta.billetera === billetera
        );

        if (cuentasExistentes) {
            cuentasExistentes.transacciones += Number(transaccion);
            setCuentas([...cuentas]);
        }
        else {
            setCuentas([...cuentas, { usuario, billetera, transacciones: Number(transaccion) }]);
        }

        setUsuario("");
        setBilletera("");
        setTransaccion("");
    };

    const mostrarTrasacciones = () => {

        const usuariosAgrupados = {};

        cuentas.forEach((cuenta) => {
            if (!usuariosAgrupados[cuenta.usuario]) {
                usuariosAgrupados[cuenta.usuario] = []
            }

            usuariosAgrupados[cuenta.usuario].push(cuenta);
        });

        const resultado = Object.values(usuariosAgrupados).map((cuentasDelUsuario) => {
            let maxTransaccion = cuentasDelUsuario[0];

            for (let i = 1; i < cuentasDelUsuario.length; i++) {
                if (cuentasDelUsuario[i].transacciones > maxTransaccion.transacciones) {
                    maxTransaccion = cuentasDelUsuario[i];
                }
            }

            return maxTransaccion;
        });

        setCuentasMasTransacciones(resultado);
    };

    return (
        <section className="billeteras">
            <section className="contenedor">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        agregarCuentas();
                    }}>

                    <input type="text" placeholder="Nombre de usuario"
                        value={usuario} onChange={(e) => setUsuario(e.target.value)} />

                    <select value={billetera} onChange={(e) => setBilletera(e.target.value)}>
                        <option value="" disabled>Selecciona una billetera</option>
                        {billeterasVirtuales.map((opcion, index) =>
                            <option key={index} value={opcion}>
                                {opcion}
                            </option>
                        )}
                    </select>

                    <input type="number" placeholder="Numero de Transacciones"
                        value={transaccion} onChange={(e) => setTransaccion(e.target.value)} />

                    <button className="button" type="submit">Guardar</button>
                    <button className="button" type="button"
                        onClick={mostrarTrasacciones}
                    >Billeteras con más transacciones</button>

                </form>
                <div className="listas">
                    {/* se crea este div para tratarlo como columna y que pueda acomodar el texto encima de cada lista */}
                    <div className="column1">
                        <h4 className="textcomponent">Listado de Cuentas</h4>
                        <div className="cuenta">
                            {cuentas.map((cuenta, index) => (
                                <p className="p" key={index}>
                                    {cuenta.usuario} - {cuenta.billetera}: {cuenta.transacciones} transacciones
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="column1">
                        <h4 className="textcomponent">Maximas Transacciones</h4>
                        <div className="transacciones">
                            {cuentasMasTransacciones.map((cuenta, index) => (
                                <p className="p" key={index}>
                                    {cuenta.usuario} - {cuenta.billetera}: {cuenta.transacciones} transacciones
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default BilleterasVirtuales;
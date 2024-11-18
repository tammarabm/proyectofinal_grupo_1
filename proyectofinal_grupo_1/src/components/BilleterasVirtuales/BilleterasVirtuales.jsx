import './styles/BilleterasVirtuales.css'
import { useState } from "react";

const BilleterasVirtuales = () => {

    const billeterasVirtuales = ['MercadoPago', 'Modo', 'Uala', 'NaranjaX', 'PayPal', 'Skrill'];
    const [usuario, setUsuario] = useState("");
    const [billetera, setBilletera] = useState("");
    const [transaccion, setTransaccion] = useState("");
    const [cuentas, setCuentas] = useState([]);
    const [cuentasMasTransacciones, setCuentasMasTransacciones] = useState([]);

    const agregarCuentas = () => {

        //Con esta validacion nos aseguramos de que retorne el código si no estan completos todos los campos, evitando que se genere una entrada vacia
        if (!usuario.trim() || !billetera || !transaccion) {
            alert("Se deben completar todos los campos antes de guardar.");
            return;
        }

        //Se guarda la cuenta con todos sus datos
        setCuentas([...cuentas, { usuario, billetera, transacciones: Number(transaccion) }]);

        // Limpia los campos despues de guardar los datos
        setUsuario("");
        setBilletera("");
        setTransaccion("");
    };

    const mostrarTrasacciones = () => {
        const usuariosAgrupados = {};

        // Agrupa las cuentas por usuario
        cuentas.forEach((cuenta) => {
            if (!usuariosAgrupados[cuenta.usuario]) { // Si el usuario no tiene un array
                usuariosAgrupados[cuenta.usuario] = [] // Crea un array 
            }

            usuariosAgrupados[cuenta.usuario].push(cuenta); // Agrega la cuenta a dicho array

            if (!usuariosAgrupados[cuenta.usuario][cuenta.billetera]) {
                usuariosAgrupados[cuenta.usuario][cuenta.billetera] = { ...cuenta }; // Si no existe, crea una copia de la cuenta
            } else {
                usuariosAgrupados[cuenta.usuario][cuenta.billetera].transacciones += cuenta.transacciones; // Si ya existe, suma las transacciones
            }
        });

        console.log("usuariosAgrupados:", usuariosAgrupados);

        // Recorre la cuenta de cada usuario y busca la cuenta con mas transacciones
        const resultado = Object.values(usuariosAgrupados).map((billeterasPorUsuario) => {
            const cuentasDelUsuario = Object.values(billeterasPorUsuario);
            console.log("cuentasDelUsuario:", cuentasDelUsuario);

            let maxTransaccion = cuentasDelUsuario[0];

            // Compara la cantidad de transacciones de la cuenta actual con la cantidad de maxTransaccion
            for (let i = 1; i < cuentasDelUsuario.length; i++) {
                // Si la cuenta actual tiene mayor numero de trasacciones que maxTransaccion
                if (cuentasDelUsuario[i].transacciones > maxTransaccion.transacciones) {
                    maxTransaccion = cuentasDelUsuario[i]; // Se actualiza maxTransaccion con esa cuenta
                }
            }

            return maxTransaccion; // Devuelve la cuenta con mas transacciones
        });

        setCuentasMasTransacciones(resultado);
    };

    return (
        <section className="billeteras">
            <section className="contenedor">
                <form className="formulario-billeteras"
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
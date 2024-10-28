import '../styles/imc.css'
function Imc(){
    
    return (
        <>
            <div className="contenedor1">
                <h1 className='h1' >Calculadora de Indice de Masa Corporal (IMC)</h1>
                <div className="contenedor2">
                    <form className='formulario' action="" method="dialog">
                        <div className="grupo">
                            <label htmlFor="nombre">Nombre:</label>
                            <input type="text" id="nombre" placeholder="Nombre" required/>
                        </div>               
                        <div className="grupo">
                            <label htmlFor="apellido">Apellido:</label>
                            <input type="text" id="apellido" placeholder="Apellido" required/>
                        </div>
                        <div className="grupo">
                            <label htmlFor="altura">Altura (cm):</label>
                            <input type="number" id="altura" placeholder="Cm" required/>
                        </div>               
                        <div className="grupo">
                            <label htmlFor="peso">Peso (kg):</label>
                            <input type="number" id="peso" placeholder="Kg" required/>
                        </div>
                        <button type="submit" id="calcular">Calcular IMC</button>
                    </form>
                    <h2 className='h2'>Resultado:</h2>
                    <div className='resultado'>
                        <p id="saludo"></p>
                        <p id="bmi"></p>
                        <p id="nivelPeso"></p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Imc;
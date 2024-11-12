import './Inicio.css';
import './Juego';
import Tablero from './Tablero';
import { useState } from 'react';

function Inicio() {
  //En este useState se controla que el juego este iniciado o no.
  const [juegoComenzado, setJuegoComenzado] = useState(false);
  <div><h1>esto es inicio</h1></div>

  return (
    <div className="contenedorinicio">
      {juegoComenzado ? (
        <Tablero />
      ) : (
        <div>
          <h1>Bienvenido al tateti!</h1>
          <p>
            El objetivo de cada jugador es hacer una linea de tres, ya sea horizontal, vertical o diagonal,
            cada click es un turno intercalado de cada jugador, suerte!
          </p>
          <button onClick={() => setJuegoComenzado(true)}>Comenzar Juego</button>
        </div>
      )}
    </div>
  );
}
//Exportamos el componente.
export default Inicio;

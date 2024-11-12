import './Inicio.css';
import './Juego';

function Inicio() {
  const [juegoIniciado, setJuegoIniciado] = useState(false);

  return (
    <div className="inicio-container">
      {juegoIniciado ? (
        // Renderiza tu componente del juego aquí
        <Juego />
      ) : (
        <div>
          <h1>Bienvenido al tateti!</h1>
          <p>
            El objetivo de cada jugador es hacer una linea de tres, ya sea horizontal, vertical o diagonal,
            cada click es un turno intercalado de cada jugador, suerte!
          </p>
          <button onClick={() => setJuegoIniciado(true)}>Comenzar Juego</button>
        </div>
      )}
    </div>
  );
}

export default Inicio;

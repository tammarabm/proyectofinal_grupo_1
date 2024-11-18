import { Button, Card } from 'react-bootstrap';
import './styles/PantallaResultado.css';

// Muestra el resultado de un desafio (correcto o incorrecto)
const PantallaResultado = ({ isCorrect, nextRound }) => {
  return (
    <div className='contenedor-resultado'>
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Card className="text-center" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title as='h4'>{isCorrect ? "¡Correcto!" : "¡Incorrecto!"}</Card.Title>
            <br />
            <Button variant="success" onClick={nextRound}> Siguiente desafío</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default PantallaResultado;

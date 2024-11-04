import { Button } from 'react-bootstrap';
import './PantallaInicio.css'
import ListGroup from 'react-bootstrap/ListGroup';
function PantallaInicio({ startGame }) {
    return (
        <>
            <div className='contenedorinicio'>
                <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                    <div className="container text-center text-bg-success p-3">
                        <h1>BIENVENIDOS AL DESAFIO MATEMATICO +-x%</h1>
                    </div>
                    <ul className=" container text-center mt-md-4">
                        <ListGroup>
                            <ListGroup.Item variant="success">¡Hola! ¡Esto es un juego de matematicas para entrenar en el mundo de los números y operaciones donde cada resultado puede ser correcto o incorrecto!</ListGroup.Item>
                            <ListGroup.Item variant="success">Dependiendo de tus aciertos, acumularas puntaje para saber cuánto sabes en matematicas!!!</ListGroup.Item>
                        </ListGroup>
                    </ul>
                    <div className="container text-center mt-md-5">
                        <h5>¡BUENA SUERTE EN ESTE PEQUEÑO EXAMEN!</h5>
                        <Button variant="success" onClick={() => startGame('basico')}>Basico</Button> {' '}
                        <Button variant="warning" onClick={() => startGame('intermedio')}>Intermedio</Button> {' '}
                        <Button variant="danger" disabled onClick={() => startGame('avanzado')}>Avanzado</Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PantallaInicio;


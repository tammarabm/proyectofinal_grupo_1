import { Button, ListGroup, Modal } from 'react-bootstrap';
import { useState } from 'react';
import './PantallaInicio.css';

function PantallaInicio({ startGame }) {
    const [show, setShow] = useState(false);
    const [nivelSeleccionado, setNivelSeleccionado] = useState(''); // Estado para el nivel seleccionado

    const handleClose = () => setShow(false);

    const handleShow = (level) => {
        setNivelSeleccionado(level); // Establece el nivel
        setShow(true);
    };

    const handleStartGame = () => {
        startGame(nivelSeleccionado); // Inicia el juego con el nivel seleccionado
    };

    return (
        <>
            <div className='contenedorinicio'>
                <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                    <div className="container text-center text-bg-success p-3">
                        <h1>BIENVENIDOS AL DESAFIO MATEMATICO +-x%</h1>
                    </div>
                    <ul className=" container text-center mt-md-4">
                        <ListGroup>
                            <ListGroup.Item variant="success">¡Hola! ¡Esto es un juego de matemáticas para entrenar en el mundo de los números y operaciones donde cada resultado puede ser correcto o incorrecto!</ListGroup.Item>
                            <ListGroup.Item variant="success">Dependiendo de tus aciertos, acumularás puntaje para saber cuánto sabes en matemáticas!!!</ListGroup.Item>
                        </ListGroup>
                    </ul>
                    <div className="container text-center mt-md-5">
                        <h5>¡BUENA SUERTE EN ESTE PEQUEÑO EXAMEN!</h5>
                        <Button variant="success" onClick={() => handleShow('basico')}>Basico</Button> {' '}
                        <Button variant="warning" onClick={() => handleShow('intermedio')}>Intermedio</Button> {' '}
                        <Button variant="danger" onClick={() => handleShow('avanzado')}>Avanzado</Button>
                    </div>
                </div>
            </div>

            {/* Muestra información sobre el nivel seleccionado */}
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton className="bg-dark text-white">
                    <Modal.Title>
                        {nivelSeleccionado === 'basico' && 'Nivel Basico'}
                        {nivelSeleccionado === 'intermedio' && 'Nivel Intermedio'}
                        {nivelSeleccionado === 'avanzado' && 'Nivel Avanzado'}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-dark text-white">
                    {nivelSeleccionado === 'basico' && 'Este nivel, incluye operaciones simples como suma y resta'}
                    {nivelSeleccionado === 'intermedio' && 'Este nivel, incluye operaciones como multiplicacion y division'}
                    {nivelSeleccionado === 'avanzado' && 'Este nivel, incluye operaciones con decimales, fracciones y ecuaciones'}
                </Modal.Body>
                <Modal.Footer className="bg-dark">
                    <Button variant="outline-secondary" onClick={handleStartGame}>Comenzar</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PantallaInicio;


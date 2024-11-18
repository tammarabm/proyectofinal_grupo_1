import { Button, ListGroup, Modal } from 'react-bootstrap';
import { useState } from 'react';
import './styles/PantallaInicio.css';

function PantallaInicio({ startGame }) {
    const [show, setShow] = useState(false); // Visibilidad del modal
    const [nivelSeleccionado, setNivelSeleccionado] = useState(''); // Nivel

    const handleClose = () => setShow(false); // Cierra el modal

    // Muestra el modal y establece el nivel seleccionado
    const handleShow = (level) => {
        setNivelSeleccionado(level); // Establece el nivel
        setShow(true); // Muestra el modal
    };

    // Inicia el juego segun el nivel seleccionado
    const handleStartGame = () => {
        startGame(nivelSeleccionado);
    };

    return (
        <>
            <div className='inicioContenedor'>
                <div className="text">
                    <h1>BIENVENIDOS AL DESAFIO MATEMATICO +-x%</h1>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                    <h5 className='subtitulo'>¡BUENA SUERTE EN ESTE PEQUEÑO EXAMEN!</h5>

                    <div className='contenedor-botones'>
                        <Button variant="success" onClick={() => handleShow('basico')}>Basico</Button> {' '}
                        <Button variant="warning" onClick={() => handleShow('intermedio')}>Intermedio</Button> {' '}
                        <Button variant="danger" onClick={() => handleShow('avanzado')}>Avanzado</Button>
                    </div>
                </div>
            </div>

            {/* Muestra informacion sobre el nivel */}
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton className="bg-dark text-white">
                    <Modal.Title>
                        {nivelSeleccionado === 'basico' && 'Nivel Basico'}
                        {nivelSeleccionado === 'intermedio' && 'Nivel Intermedio'}
                        {nivelSeleccionado === 'avanzado' && 'Nivel Avanzado'}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-dark text-white">
                    {nivelSeleccionado === 'basico' && 'Este nivel incluye operaciones simples de suma y resta'}
                    {nivelSeleccionado === 'intermedio' && 'Este nivel incluye operaciones de multiplicacion y division'}
                    {nivelSeleccionado === 'avanzado' && 'Este nivel incluye suma y resta con decimales, multiplicacion de fracciones y ecuaciones. Nota: La linea de la fraccion se realiza presionando "Espacio" '}
                </Modal.Body>
                <Modal.Footer className="bg-dark">
                    <Button variant="outline-secondary" onClick={handleStartGame}>Comenzar</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PantallaInicio;


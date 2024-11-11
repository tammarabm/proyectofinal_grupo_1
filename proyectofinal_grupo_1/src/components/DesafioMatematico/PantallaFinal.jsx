import './PantallaFinal.css';
import { Button, Card } from 'react-bootstrap';

const PantallaFinal = ({ points, resetearJuego, volverMenu}) => {
    return (
        <div className='contenedorfinal'>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Card className="text-center" style={{ width: '22rem' }}>
                    <Card.Body>
                        <Card.Title as='h5'>
                            JUEGO TERMINADO
                        </Card.Title>
                        <Card.Text as='h6'>
                            Puntaje Final: {points}/5
                        </Card.Text>
                        <Button variant="warning" onClick={resetearJuego}>Reiniciar Juego</Button>
                        <Button variant="success" onClick={volverMenu}>Volver al Menu</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default PantallaFinal;
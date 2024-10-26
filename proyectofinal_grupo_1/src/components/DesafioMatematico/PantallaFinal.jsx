import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const PantallaFinal = ({ points, resetearJuego }) => {
    return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
    <Card className="text-center" style={{ width: '22rem' }}>
        <Card.Body>
            <Card.Title as ='h5'>
                JUEGO TERMINADO
            </Card.Title>
            <Card.Text as='h6'>
                Puntuaje Final: {points}/5
            </Card.Text>
            <Button variant="warning" onClick={resetearJuego}> Reiniciar Juego</Button>
        </Card.Body>
    </Card>
    </div> 
    );
};

export default PantallaFinal;
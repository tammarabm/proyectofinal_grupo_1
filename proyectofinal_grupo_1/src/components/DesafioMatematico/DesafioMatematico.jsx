import { Button, InputGroup, Form, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useState } from 'react';
import './styles/DesafioMatematico.css';


const DesafioMatematico = ({ challenge, verifyAnswer, volverMenu }) => {
  const [userAnswer, setUserAnswer] = useState(''); // Respuesta del usuario

  // Maneja la verificacion de la respuesta
  const handleSubmit = () => {
    verifyAnswer(userAnswer);
    setUserAnswer('');
  };

  return (
    <div className='contenedordesafio'>
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Card className="text-center" style={{ width: '25rem' }}>
          <Card.Header as='h6'>Desafio Matematico</Card.Header>
          {/* Muestra el desafío matemático dependiendo del tipo de operación */}
          <div className='enunciado'>
            <span>Resuelvelo o MUERE! </span>
          </div>
          <div className='numeros'>
            {challenge.tipoOperacion === 1 ? (
              <span>
                {`${challenge.num1[0]}/${challenge.num1[1]} ${challenge.operator} ${challenge.num2[0]}/${challenge.num2[1]}`} {/* Fraccion */}
              </span>
            ) : challenge.tipoOperacion === 2 ? (
              <span>
                {`${challenge.num1} ${challenge.operator} x = ${challenge.num2}`} {/* Ecuacion 1 */}
              </span>
            ) : challenge.tipoOperacion === 3 ? (
              <span>
                {`${challenge.num1}x ${challenge.operator} ${challenge.num2} = ${challenge.num3}`} {/* Ecuacion 2 */}
              </span>
            ) : (
              `${challenge.num1} ${challenge.operator} ${challenge.num2}`
            )} {/* Otras operaciones */}

            <br />
          </div>
          <Card.Body>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="input-tooltip">Ingresa tu respuesta</Tooltip>}
            >
              <InputGroup className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Respuesta"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === ' ') {
                      event.preventDefault(); // Evita el espacio
                      setUserAnswer(userAnswer + '/'); // Agrega "/" al presionar espacio (para fracciones)
                    }
                  }}
                />
              </InputGroup>
            </OverlayTrigger>
            <br />
            {/* Boton para verificar la respuesta */}
            <Button variant="outline-danger" onClick={handleSubmit}>Verificar resultado</Button>
            {/* Boton para volver al inicio */}
            <Button variant="success" onClick={volverMenu}>Volver al Menu</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default DesafioMatematico;

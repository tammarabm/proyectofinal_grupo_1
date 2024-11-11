import { Button, InputGroup, Form, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useState } from 'react';
import './DesafioMatematico.css';

const DesafioMatematico = ({ challenge, verifyAnswer, volverMenu }) => {
  const [userAnswer, setUserAnswer] = useState('');

  const handleSubmit = () => {
    verifyAnswer(userAnswer);
    setUserAnswer('');
  };

  return (
    <>
      {/* Este div sirve pora usar un fondo animado en cada desafio*/}
      <div className='contenedordesafio'>
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
          <Card className="text-center" style={{ width: '25rem' }}>
            <Card.Header as='h6'>Desafio Matematico</Card.Header>
            <Card.Body>
              Resuelve: {challenge.tipoOperacion === 1 ? (
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
                        setUserAnswer(userAnswer + '/'); // Agrega /
                      }
                    }}
                  />
                </InputGroup>
              </OverlayTrigger>
              <br />
              <Button variant="outline-danger" onClick={handleSubmit}>Verificar resultado</Button>
              <Button variant="success" onClick={volverMenu}>Volver al Menu</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default DesafioMatematico;

import { useState } from 'react';
import './DesafioMatematico.css';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const DesafioMatematico = ({ challenge, verifyAnswer, volverMenu }) => {
  const [userAnswer, setUserAnswer] = useState('');

  const handleSubmit = () => {
    verifyAnswer(userAnswer);
    setUserAnswer('');
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Card className="text-center" style={{ width: '25rem' }}>
        <Card.Header as='h6'>Desafio Matematico</Card.Header>
        <Card.Body>
          Resuelve: {challenge.operator === '*' ? (
            <span>
              {`${challenge.num1[0]}/${challenge.num1[1]} * ${challenge.num2[0]}/${challenge.num2[1]}`} {/* Fraccion */}
            </span>
          ) : (
            `${challenge.num1} ${challenge.operator} ${challenge.num2}` 
          )} {/* Otras operaciones */}
          <br />
          <InputGroup className="mb-3">
            <Form.Control
              type="text" // Es text por la Fraccion 
              placeholder="Respuesta"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
            />
          </InputGroup>
          <br />
          <Button variant="outline-danger" onClick={handleSubmit}>Verificar resultado</Button>
          <Button variant="success" onClick={volverMenu}>Volver al Menu</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DesafioMatematico;

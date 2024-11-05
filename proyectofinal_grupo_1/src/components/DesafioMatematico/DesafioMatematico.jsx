import { useState } from 'react';
import './DesafioMatematico.css';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const DesafioMatematico = ({ challenge, verifyAnswer }) => {
  const [userAnswer, setUserAnswer] = useState('');

  const handleSubmit = () => {
    verifyAnswer(userAnswer);
    setUserAnswer('');
  };

  return (
    <div className='contenedordesafio'>
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Card className="text-center" style={{ width: '25rem' }}>
          <Card.Header as='h6'>Desafio Matematico</Card.Header>
          <Card.Body>
            <Card.Title as='h3'>Resuelve: {challenge.num1} {challenge.operator} {challenge.num2}</Card.Title>
            <br />
            <InputGroup className="mb-3">
              <Form.Control
                type="number"
                placeholder="Respuesta"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
              />
            </InputGroup>
            <br />
            <Button variant="outline-danger" onClick={handleSubmit}>Verificar resultado</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default DesafioMatematico;

import { Button, Card } from 'react-bootstrap';
import './styles/DesafioMatematico.css';

const DesafioMatematico = ({ challenge, verifyAnswer, volverMenu }) => {

  // Cambio de color para las operaciones
  const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 100 + 127);
    const g = Math.floor(Math.random() * 100 + 127);
    const b = Math.floor(Math.random() * 100 + 127);
    return `rgb(${r}, ${g}, ${b})`; // rgb(x, x, x);
  };

  const randomColor = generateRandomColor(); // Para que sean los tres botones del mismo color 

  return (
    <div className="contenedorDesafio">
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Card className="text-center" style={{ width: '25rem' }}>
          <Card.Header as='h6'>Desafio Matematico</Card.Header>
          <Card.Body>
            <div>
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
              <div className="opciones">
                {/* Botones de Opciones */}
                {challenge.options.map((option, idx) => (
                  <Button
                    variant="outline-secondary"
                    key={idx}
                    style={{
                      backgroundColor: randomColor,
                      color: '#000',
                      border: 'none',
                    }}
                    onClick={() => verifyAnswer(option)}
                  >
                    {option}
                  </Button>
                ))}
              </div>

              {/* Boton para volver al inicio */}
              <Button variant="success" onClick={volverMenu}>Volver al Menu</Button>
            </div>
          </Card.Body>
        </Card>
       </div>
     </div>
  );
};

export default DesafioMatematico;

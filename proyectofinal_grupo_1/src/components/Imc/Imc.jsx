import { useState } from 'react';
import '../../styles/imc.css'
import { Card, Button, Form, InputGroup, Alert } from 'react-bootstrap'
import Resultado from './Resultado';
import Sugerencia from './Sugerencia';


function Imc() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [nivelPeso, setNivelPeso] = useState('');
    const [imc, setImc] = useState(null);
    const [resultado, setResultado] = useState(false);
    const [sugerencia, setSugerencia] = useState(false);
    const [alert, setAlert] = useState('');

    const calcularImc = () => {
        const alturaFloat = parseFloat(altura);
        const alturaMetros = alturaFloat / 100;
        const pesoFloat = parseFloat(peso);

        if (!isNaN(alturaMetros) && !isNaN(pesoFloat)) {
            const resultadoImc = (pesoFloat / (alturaMetros * alturaMetros)).toFixed(2);
            setImc(resultadoImc);

            if (resultadoImc < 18.5) {
                setNivelPeso('Bajo peso');
            } else if (resultadoImc >= 18.5 && resultadoImc <= 24.9) {
                setNivelPeso('Saludable');
            } else if (resultadoImc >= 25.0 && resultadoImc <= 29.9) {
                setNivelPeso('Sobrepeso');
            } else {
                setNivelPeso('Obesidad');
            }
            setResultado(true);
            setSugerencia(false)
            setAlert('')
        } else {
            setResultado(false);
            //alert("Ingresa valores validos");
            setAlert("Ingresa valores validos");
        }
    };

    const reiniciar = () => {
        setNombre('');
        setApellido('');
        setAltura('');
        setPeso('');
        setNivelPeso('');
        setImc(null);
        setResultado(false);
        setSugerencia(false);
        setAlert('');
    };

    const mostrarSugerencia = () => {
        if (resultado) {
            setSugerencia(true);

        }
        else {
            //alert("Calcula tu IMC para mostrar tu sugerencia");
            setAlert("Calcula tu IMC para mostrar tu sugerencia");
        }
    }

    return (
        <>
            <div className="contenedor1">
                <h1 className='h1' >Calculadora de Indice de Masa Corporal (IMC)</h1>
                <Card className="contenedor2">
                    <Card.Body>
                        <Form className='formulario' action="" method="dialog">
                            <div className="grupo">
                                <Form.Label>Ingresa tus datos para calcular tu IMC</Form.Label>
                                <br />
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>Nombre:</InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="Nombre" required
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                    />
                                    <InputGroup.Text>Apellido:</InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="Apellido" required
                                        value={apellido}
                                        onChange={(e) => setApellido(e.target.value)}
                                    />
                                </InputGroup>
                            </div>
                            <div className="grupo">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>Altura:</InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="cm" required min="0" max="3"
                                        value={altura}
                                        onChange={(e) => setAltura(e.target.value)}
                                    />
                                    <InputGroup.Text>cm</InputGroup.Text>
                                </InputGroup>
                            </div>
                            <div className="grupo">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>Peso:</InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="Kg" required min="0" max="3"
                                        value={peso}
                                        onChange={(e) => setPeso(e.target.value)}
                                    />
                                    <InputGroup.Text>kg</InputGroup.Text>
                                </InputGroup>
                            </div>
                            <Button variant="warning" onClick={calcularImc}>Calcular IMC</Button>
                            <Button variant="warning" onClick={reiniciar}>Reiniciar</Button>
                            <Button variant="warning" onClick={mostrarSugerencia}>Sugerencias</Button>

                            {alert && (
                                <Alert variant="warning" className="mt-3">
                                    {alert}
                                </Alert>
                            )}

                            {resultado && !sugerencia ? (
                                <Resultado nombre={nombre} apellido={apellido} imc={imc} nivelPeso={nivelPeso} />
                            ) : sugerencia ? (
                                <Sugerencia nivelPeso={nivelPeso} />
                            ) : null}
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}
export default Imc;
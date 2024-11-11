import { useState } from 'react';
import './imc.css'
import { Card, Button, Form, InputGroup } from 'react-bootstrap'
import Resultado from './Resultado';

function Imc() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [nivelPeso, setNivelPeso] = useState('');
    const [imc, setImc] = useState(null);
    const [resultado, setResultado] = useState(false);
    const [sugerencia, setSugerencia] = useState('');
    const [sugerencia1, setSugerencia1] = useState(false);
    const [sugerencia2, setSugerencia2] = useState(false);
    const [sugerencia3, setSugerencia3] = useState(false);
    const [sugerencia4, setSugerencia4] = useState(false);

    const calcularImc = () => {
        const alturaFloat = parseFloat(altura);
        const alturaMetros = alturaFloat / 100;
        const pesoFloat = parseFloat(peso);

        if (!isNaN(alturaMetros) && !isNaN(pesoFloat)) {
            const resultadoImc = (pesoFloat / (alturaMetros * alturaMetros)).toFixed(2);
            setImc(resultadoImc);

            if (resultadoImc < 18.5) {
                setNivelPeso('Bajo peso');
                setSugerencia1(true);
            } else if (resultadoImc >= 18.5 && resultadoImc <= 24.9) {
                setNivelPeso('Saludable');
                setSugerencia2(true);
            } else if (resultadoImc >= 25.0 && resultadoImc <= 29.9) {
                setNivelPeso('Sobrepeso');
                setSugerencia3(true);
            } else {
                setSugerencia4(true);
                setNivelPeso('Obesidad');
            }
            setResultado(true);
        } else {
            setResultado(false);
            alert("Ingresa valores validos");
        }
    };

    const reiniciar = () => {
        setNombre('');
        setApellido('');
        setAltura('');
        setPeso('');
        setNivelPeso('');
        setSugerencia('');
        setSugerencia1(false);
        setSugerencia2(false);
        setSugerencia3(false);
        setSugerencia4(false);
        setImc(null);
        setResultado(false);
    };

    //Estableci esta funcion cb para usar textos siempre y cuando cumplan su estado en las distintas sugerencias
    const sugerenciaIMC = () => {
        if (sugerencia1 == true) {
            setSugerencia('Adopta hábitos saludables de alimentación');
        } else if (sugerencia2 == true) {
            setSugerencia('Establece metas pequeñas y alcanzables');
        } else if (sugerencia3 == true) {
            setSugerencia('Encuentra una actividad física que disfrutes');
        } else if (sugerencia4 == true) {
            setSugerencia('Sé constante y paciente');
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
                            <Button variant="warning" onClick={sugerenciaIMC}>Sugerencias</Button>
                            {resultado ? (
                                <Resultado nombre={nombre} apellido={apellido} imc={imc} nivelPeso={nivelPeso} sugerencia={sugerencia} />
                            ) : null
                            }
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}
export default Imc;
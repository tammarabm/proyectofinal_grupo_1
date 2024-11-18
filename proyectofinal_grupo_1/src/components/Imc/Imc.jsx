/* Importamos el hook 'useState' desde React para manejar el estado dentro del componente. */
import { useState } from 'react';
/* Importamos el archivo css para darle estilo a este componente */

import './styles/imc.css';

/*Importamos los componentes necesarios para el ingreso y envío de datos. También para mostrar una alerta */
import { Card, Button, Form, InputGroup, Alert } from 'react-bootstrap'
/* Importamos el componente Resultado para mostrar el imc del usuario */
import Resultado from './Resultado';
/* Importamos el componente Sugerencia para mostrar la sugerencia según el nivel de peso */
import Sugerencia from './Sugerencia';

/* Componente principal Imc que maneja la lógica para calcular el IMC y mostrar los resultados y sugerencias */
function Imc() {
    /* Declaración de variables de estados */

    /* Almacena el nombre ingresado de tipo string */
    const [nombre, setNombre] = useState('');
    /* Almacena el apellido ingresado de tipo string */
    const [apellido, setApellido] = useState('');
    /* Almacena la altura ingresada de tipo string */
    const [altura, setAltura] = useState('');
    /* Almacena el peso ingresado de tipo string*/
    const [peso, setPeso] = useState('');
    /* Almacena el nivel de peso  de tipo string */
    const [nivelPeso, setNivelPeso] = useState('');
    /* Almacena el resultado del imc. Es null  */
    const [imc, setImc] = useState(null);
    /* Indica si el imc ha sido calculado. Es de tipo boolean */
    const [resultado, setResultado] = useState(false);
    /* Indica si la sugerencia debe ser mostrada. Es de tipo boolean */
    const [sugerencia, setSugerencia] = useState(false); 
    /* Almacena la alerta que se mostrará si no se ingresan datos válidos */
    const [alert, setAlert] = useState('');

    /* Función para calcular el imc según la altura y peso del usuario */
    const calcularImc = () => {
        /* Convierte la altura ingresada a un número float y lo almacena en otra variable */
        const alturaFloat = parseFloat(altura); 
        /* Convierte la altura(float) a metros */
        const alturaMetros = alturaFloat / 100;
        /* Convierte el peso ingresado a un número float y lo almacena en otra variable */
        const pesoFloat = parseFloat(peso);

        /* Valida que los valores de altura y peso sean números validos */
        if ((alturaMetros>=0.5 && alturaMetros<=2.5)&& (pesoFloat>=10 && pesoFloat<=500) && nombre.trim()!="" && apellido.trim()!=""){
            /* Calcula el imc con una formula y el resultado tendrá dos decimales */
            const resultadoImc = (pesoFloat / (alturaMetros * alturaMetros)).toFixed(2);
            /* Se asigna el 'resultadoImc' a la variable de estado 'imc', con el set */
            setImc(resultadoImc);

            /* Se asigna el nivel de peso según el resultado del imc */
            if (resultadoImc < 18.5) {
                setNivelPeso('Bajo peso');
            } else if (resultadoImc >= 18.5 && resultadoImc <= 24.9) {
                setNivelPeso('Saludable');
            } else if (resultadoImc >= 25.0 && resultadoImc <= 29.9) {
                setNivelPeso('Sobrepeso');
            } else {
                setNivelPeso('Obesidad');
            }
            /* Se establece el 'resultado' en true para que se pueda mostrar */
            setResultado(true);
            /* Se oculta la sugerencia*/
            setSugerencia(false);
            setAlert('');
        } else {
            /* Se establece el 'resultado' en false para que no se muestre nada */
            setResultado(false);
            setSugerencia(false);
            //alert("Ingresa valores validos");
            setAlert("Ingresa valores validos");
        }
    };
    /* Función para reiniciar el formulario y restablecer los estados */
    const reiniciar = () => {
        setNombre('');
        setApellido('');
        setAltura(' ');
        setPeso(' ');
        setNivelPeso('');
        setImc(null);
        setResultado(false);
        setSugerencia(false);
        setAlert('');
    };

    /* Función para que muestre las sugerencias sólo si se ha calculado el imc */
    const mostrarSugerencia = () => {
        /* Si el imc ya fue calculado */
        if (resultado && nombre && apellido && peso && altura) {
            /* Se establece en true a 'sugerencia' para que se pueda mostrar */
            setSugerencia(true);
        }else{
            /* Si no fue calculado muestra una alerta */
            /* Se asigna a 'alerta' un mensaje */
            setSugerencia(false);
            setAlert("Calcula tu IMC para mostrar tu sugerencia");
        }
    }

    const controlarAltura = (e) => {
        const valor= e.target.value;

        if (valor===""){
            setAltura("");
            setAlert("");
            return;
        }
        if (valor.startsWith("-")) {
            setAlert("La altura no puede ser negativa.");
            return;
        }
        if (valor.includes(".") || valor.includes(",")) {
            setAlert("La altura no puede contener puntos o comas.");
            return;
        }   
        if ((valor.length)> 3) {
            setAlert("Solo se permiten hasta 3 dígitos.");
            return; 
        }
        if(valor>250 || valor< 50){
            setAlert("La altura debe debe estar entre 50 y 250. ")
        }else{
            setAlert("")
        }
        setAltura(valor);         
    }  
    
    const controlarPeso = (e) => {
        const valor= e.target.value;

        if (valor===""){
            setPeso("");
            setAlert("");
            return;
        }

        if ((valor.length > 3)) {
            setAlert("Solo se permiten hasta 3 dígitos.");
            return; 
        }
        if (valor.startsWith("-")) {
            setAlert("El peso no puede ser negativo.");
            return;
        }
        if (valor.includes(".") || valor.includes(",")) {
            setAlert("El peso no puede contener puntos o comas.");
            return;
    }
        if(valor>500 || valor <10){
            setAlert("El peso debe estar entre 10 a 500. ")
        }else{
            setAlert("")
        }
        setPeso(valor);         
    }

    const verificarPalabra = (palabra) => {
        for (let i = 0; i < palabra.length; i++) {
            const char = palabra.charAt(i);
            if (!(char >= 'A' && char <= 'Z') && !(char >= 'a' && char <= 'z') && char !==' ') {
                return false;
            }
        }
        return true; 
        };

    const controlarNombre = (e) => {
        const valor = e.target.value;

        if (valor === "") {
            setNombre("");
            setAlert("El campo no puede estar vacío o contener solo espacios.");
            return;
        }

        if (!verificarPalabra(valor)) {
            setAlert("El nombre debe contener solo letras.");
            return; 
        }
        setAlert(""); 
        setNombre(valor);
    };

    const controlarApellido = (e) => {
        const valor = e.target.value;

        if (valor === "") {
            setApellido("");
            setAlert("El campo no puede estar vacío o contener solo espacios.");
            return;
        }

        if (!verificarPalabra(valor)) {
            setAlert("El apellido debe contener solo letras.");
            return; 
        }
        setAlert(""); 
        setApellido(valor);
    };

    return (
        <>  
            {/* Contenedor principal */}
            <div className="contenedor1">
                {/* Titulo de la página */}
                <h1 className='h1' >Calculadora de Indice de Masa Corporal (IMC)</h1>
                {/* Contiene el formulario */}
                <Card className="contenedor2">
                    <Card.Body>
                        <Form className='formulario' action="" method="dialog">
                            <div className="grupo">
                                <Form.Label>Ingresa tus datos para calcular tu IMC</Form.Label>
                                <br />
                                <InputGroup className="mb-3">
                                    {/* Input para el nombre */}
                                    <InputGroup.Text>Nombre:</InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="Nombre" required
                                        /* El valor actual del campo de texto se vincula al estado 'nombre' */
                                        value={nombre}
                                        /* Cuando se cambia el valor del input, se llama a controlarNombre  */
                                        onChange={controlarNombre}
                                    />
                                    {/* Input para el apellido */}
                                    <InputGroup.Text>Apellido:</InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="Apellido" required
                                        /* El valor actual del campo de texto se vincula al estado 'apellido' */
                                        value={apellido}
                                        /* Cuando se cambia el valor del input, se llama a controlarApellido */
                                        onChange={controlarApellido}
                                    />
                                </InputGroup>
                            </div>
                            <div className="grupo">
                                <InputGroup className="mb-3">
                                    {/* Input para la altura */}
                                    <InputGroup.Text>Altura:</InputGroup.Text>
                                    <Form.Control
                                        type="number"
                                        placeholder="cm" required min="0" max="250"
                                        /* El valor actual del campo de texto se vincula al estado 'altura' */
                                        value={altura}
                                        /* Cuando se cambia el valor del input, se llama a controlarAltura  */
                                        onChange={controlarAltura}
                                    />
                                    <InputGroup.Text>cm</InputGroup.Text>
                                </InputGroup>
                            </div>
                            <div className="grupo">
                                <InputGroup className="mb-3">
                                    {/* Input para el peso */}
                                    <InputGroup.Text>Peso:</InputGroup.Text>
                                    <Form.Control
                                        type="number"
                                        placeholder="Kg" required min="0" max="500"
                                        /* El valor actual del campo de texto se vincula al estado 'peso' */
                                        value={peso}
                                        /* Cuando se cambia el valor del input, se llama a controlarPeso  */
                                        onChange={controlarPeso}
                                    />
                                    <InputGroup.Text>kg</InputGroup.Text>
                                </InputGroup>
                            </div>

                            {/* Botón para calcular el IMC */}
                            <Button variant="success" onClick={calcularImc}>Calcular IMC</Button>
                            {/* Botón para mostrar la sugerencia */}
                            <Button variant="success" onClick={mostrarSugerencia}>Sugerencias</Button>
                            {/* Imagen que actúa como botón para resetear los valores */}
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '11vh' }}>
                            <img src="./images/reinicio.png"
                                alt="imagen"
                                style={{ cursor: 'pointer', width: '50px', height: '50px' }}
                                onClick={reiniciar}
                            />
                            </div>
                            
                            {/* Dependiendo del estado de 'alert' se renderiza el componente Alert de bootstrap */}
                            {alert && (
                                <Alert variant="success" className="mt-3">
                                    {alert}
                                </Alert>
                            )}

                            {/* Dependiendo del estado de 'resultado' y 'sugerencia' se renderiza los componentes Resultado y Sugerencia */}
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

/* Exportamos el componente Imc para que pueda ser utilizado en otras partes del proyecto */
export default Imc;
import { Row } from "react-bootstrap";
import { useState } from "react";
import Cuadrado from "./Cuadrado";

function Tablero() {
        const [valores, setValores] = useState(Array(9).fill("_"));
        const [turnoX, setTurnoX] = useState(true);

            const cambiarValorCuadrados = (i) => {
                const nuevosValores = valores.slice();
                if (turnoX){
                    nuevosValores[i]= "X"; 
                } else {
                    nuevosValores[i]= "O";
                }
                setValores(nuevosValores);
                setTurnoX(!turnoX);
            };
            

            return (
                <><Row xs="auto">
                    <Cuadrado valor={valores[0]} cambiarValorCuadrado={() => cambiarValorCuadrados(0)} />
                    <Cuadrado valor={valores[1]} cambiarValorCuadrado={() => cambiarValorCuadrados(1)} />
                    <Cuadrado valor={valores[2]} cambiarValorCuadrado={() => cambiarValorCuadrados(2)} />
                </Row><Row xs="auto">
                        <Cuadrado valor={valores[3]} cambiarValorCuadrado={() => cambiarValorCuadrados(3)} />
                        <Cuadrado valor={valores[4]} cambiarValorCuadrado={() => cambiarValorCuadrados(4)} />
                        <Cuadrado valor={valores[5]} cambiarValorCuadrado={() => cambiarValorCuadrados(5)} />
                    </Row><Row xs="auto">
                        <Cuadrado valor={valores[6]} cambiarValorCuadrado={() => cambiarValorCuadrados(6)} />
                        <Cuadrado valor={valores[7]} cambiarValorCuadrado={() => cambiarValorCuadrados(7)} />
                        <Cuadrado valor={valores[8]} cambiarValorCuadrado={() => cambiarValorCuadrados(8)} />
                    </Row></>
            );
            
            }
            
export default Tablero;



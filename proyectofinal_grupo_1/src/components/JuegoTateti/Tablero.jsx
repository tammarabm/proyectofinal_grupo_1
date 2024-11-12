import { Row } from "react-bootstrap";
import { useState } from "react";
import Cuadrado from "./Cuadrado";

function Tablero() {
        const [valores, setValores] = useState(Array(9).fill("_"));
        const [turnoX, setTurnoX] = useState(true);
        const ganador = calcularGanador(valores);

        let estado;
        if (ganador == "X" || ganador == "O"){
            estado = 'Ganó el jugador: ' + ganador;
        }
            else{
                estado = 'Siguiente jugador: ' + (turnoX ? 'X' : 'O');
            }
            const cambiarValorCuadrados = (i) => {
                const nuevosValores = valores.slice();
                //Para evitar que gane el tablero vacio se establece un if que utilice como condicion que el guion no sea ganador
                //Aparte la otra condicion habilita que si se dibujo una cruz o un circulo retorne y no se pueda volver a modificar
                if(valores[i] != "_" || ganador !="_"){
                    return;
                }


                if (turnoX){
                    nuevosValores[i]= "X"; 
                } else {
                    nuevosValores[i]= "O";
                }
                setValores(nuevosValores);
                setTurnoX(!turnoX);
            }
            //Esta funcion recorre cada linea posible del tablero para determinar si existe un ganador
            function calcularGanador (valores){
                const lineas = [
                    [0,1,2],
                    [3,4,5],
                    [6,7,8],
                    [0,3,6],
                    [1,4,7],
                    [2,5,8],
                    [0,4,8],
                    [2,4,6]
                ];
                for (let i = 0; i < lineas.length; i++){
                    const [a,b,c] = lineas [i];
                    if (valores[a] && valores[a] === valores [b] && valores[a] === valores[c]){
                        return valores[a];
                    }
                }
            }
            
            //Esta porcion del codigo dibuja el tablero
            return (
                <>
                <h1>  {estado}  </h1>
                <Row xs="auto">
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



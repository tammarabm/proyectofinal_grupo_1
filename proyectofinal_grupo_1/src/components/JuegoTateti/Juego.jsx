//import Inicio from '../JuegoPhaser/Scenes/Inicio';
import Tablero from './Tablero'
import { useState, useEffect } from 'react'


function Juego(){
    //const[datos, setDatos]=useState({nombre:'', fechaNacimiento:''});
    const [juegoComenzado, setJuegoComenzado]=useState(false);

    const comenzarJuego=()=>{
        setJuegoComenzado(!juegoComenzado); 
    }

    return(
        <Tablero>

        </Tablero>
    )

} export default Juego;

import { useState } from 'react'
import {Button} from 'react-bootstrap'

function Cuadrado({valor, cambiarValorCuadrado}){
    return (
        <Button variant="danger" onClick={cambiarValorCuadrado}>{valor}</Button>

    )
}

export default Cuadrado;
import { useState } from 'react'
import {Button} from 'react-bootstrap'

function Cuadrado({valor, cambiarValorCudrado}){
    return (
        <Button variant="danger" onClick={cambiarValorCudrado}>{valor}</Button>

    )
}

export default Cuadrado;
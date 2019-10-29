import {
    AGREGAR_CADENA,
    AGREGAR_CADENA_EXITO,
    AGREGAR_CADENA_ERROR
} from '../types/index';
import clienteAxios from '../config/axios'

export function crearNuevaCadenaAction(cadena) {
    return dispatch => {
        dispatch(agregarCadena());

        // insercion en la api
        clienteAxios.post('/cadena', cadena)
            .then(respuesta => {
                console.log(respuesta);
                dispatch(agregarCadenaExito(cadena));
            }).then(error => {
                console.log(error);
            })
    }
}

export const agregarCadena = () => ({
    type: AGREGAR_CADENA
})

export const agregarCadenaExito = (cadena) => ({
    type: AGREGAR_CADENA_EXITO,
    payload: cadena
})

export const agregarCadenaError = (error) => ({
    type: AGREGAR_CADENA_ERROR,
    payload: error
})
import {
    AGREGAR_ESTABLECIMIENTO,
    AGREGAR_ESTABLECIMIENTO_EXITO,
    AGREGAR_ESTABLECIMIENTO_ERROR
} from '../types/index';
import clienteAxios from '../config/axios';

//creates new establecimiento - main function
export function crearNuevoEstablecimientoAction(establecimiento) {
    return (dispatch) => {
        dispatch(nuevoEstablecimiento());

        //insercion en la api
        clienteAxios.post('/establecimiento', establecimiento)
            .then(respuesta => {
                console.log(respuesta);
                //se inserta correctamente en la api
                dispatch(nuevoEstablecimientoExito(establecimiento));
            }).catch(error => {
                console.log(error);
                dispatch(nuevoEstablecimientoError(error));
            })

    }
}

export const nuevoEstablecimiento = () => ({
    type: AGREGAR_ESTABLECIMIENTO
});

export const nuevoEstablecimientoExito = (establecimiento) => ({
    type: AGREGAR_ESTABLECIMIENTO_EXITO,
    payload: establecimiento
});

export const nuevoEstablecimientoError = (error) => ({
    type: AGREGAR_ESTABLECIMIENTO_ERROR,
    payload: error
})
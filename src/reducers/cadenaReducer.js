import {
   AGREGAR_CADENA,
   AGREGAR_CADENA_EXITO,
   AGREGAR_CADENA_ERROR
} from '../types/index';

const initialState = {
    cadena: [],
    error: null,
    loadin: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case AGREGAR_CADENA:
            return {
                ...state,
                error: null,
            }
        case AGREGAR_CADENA_EXITO:
            return {
                ...state,
                error: null,
                cadena: [...state.cadena, action.payload]
            }
        case AGREGAR_CADENA_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
}
import {
    AGREGAR_ESTABLECIMIENTO,
    AGREGAR_ESTABLECIMIENTO_EXITO,
    AGREGAR_ESTABLECIMIENTO_ERROR
} from '../types/index';

const initialState = {
    establecimiento: [],
    error: null,
    loadin: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case AGREGAR_ESTABLECIMIENTO:
            return {
                ...state,
                error: null,
            }
        case AGREGAR_ESTABLECIMIENTO_EXITO:
            return {
                ...state,
                error: null,
                establecimiento: [...state.establecimiento, action.payload]
            }
        case AGREGAR_ESTABLECIMIENTO_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
}
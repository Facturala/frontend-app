import { combineReducers } from "redux";
import establecimiento from "./establecimientoReducer";
import cadena from "./cadenaReducer";

export default combineReducers({
    establecimiento: establecimiento,
    cadena: cadena
});
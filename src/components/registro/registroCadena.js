import React, { useState } from 'react'
import uuid from 'react-uuid';

import './registro.scss';

export default function RegistroCadena({ guardarCadena }) {
    const [cadena, setCadena] = useState({
        id: uuid(),
        nombreCadena: "",
        nitCadena: ""
    });

    const [validacionFormulario, setValidacionFormulario] = useState(false);


    const actualizarState = (e) => {
        setCadena({
            ...cadena,
            [e.target.name]: e.target.value
        })
    }

    const enviarCadena = e => {
        e.preventDefault();
        if (cadena.nombreCadena.trim() === "" || cadena.nitCadena.trim() === "") {
            setValidacionFormulario(true)
            return
        }
        guardarCadena(cadena)
    }

    return (
        <section className="card col-md-6 col-lg-5 col-sm-12 mb-3 p-4 ">
            <div className="alert alert-primary mb-5" role="alert">
                ¡ Si tu establecimiento pertenece a una cadena comercial o no, 
                en este formulario solo tienes que introducir el nombre de la razon social junto con el NIT !
            </div>
            <form
                onSubmit={enviarCadena}
            >
                <div className="form-group">
                    <label htmlFor="nombreCadena">*Nombre de cadena a la cual pertenece tu establecimiento</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nombreCadena"
                        placeholder="nombre de cadena de establecimiento"
                        name="nombreCadena"
                        onChange={actualizarState} />
                </div>
                <div className="form-group">
                    <label htmlFor="nitCadena">*Nit de Cadena</label>
                    <input
                        type="number"
                        className="form-control"
                        id="nitCadena files"
                        placeholder="numero de Nit de Cadena"
                        name="nitCadena"
                        onChange={actualizarState} />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary btn-md btn-block"
                >
                    Guardar y siguiente
                    </button>
            </form>
            {
                validacionFormulario === true ?
                    <div className="alert alert-danger mt-2" role="alert">Los campos marcados con * son obligatorios</div> :
                    null
            }
        </section>
    )
}

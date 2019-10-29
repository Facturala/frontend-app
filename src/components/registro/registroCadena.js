import React, { useState } from 'react'
import uuid from 'react-uuid';

import './registro.scss';

export default function RegistroCadena({ guardarCadena }) {
    const [cadena, setCadena] = useState({
        id: uuid(),
        nombreCadena: "",
        nitCadena: ""
    });

    const actualizarState = (e) => {
        setCadena({
            ...cadena,
            [e.target.name]: e.target.value
        })
    }

    const enviarCadena = e => {
        e.preventDefault();
        guardarCadena(cadena)
    }

    return (
        <section className="card col-md-6 col-lg-5 col-sm-12 mb-3 p-4 ">
            <form
                onSubmit={enviarCadena}
            >
                <div className="form-group">
                    <label htmlFor="nombreCadena">Nombre de cadena a la cual pertenece tu establecimiento</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nombreCadena"
                        placeholder="nombre de cadena de establecimiento"
                        name="nombreCadena"
                        onChange={actualizarState} />
                </div>
                <div className="form-group">
                    <label htmlFor="nitCadena">Nit de Cadena</label>
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
        </section>
    )
}

import React, { useState } from 'react'

import './registro.scss';

export default function RegistroCadena({ guardarNegocio }) {
    const [negocio, setNegocio] = useState({
        nombreNegocio: "",
        nitNegocio: ""
    });

    const actualizarState = (e) => {
        setNegocio({
            ...negocio,
            [e.target.name]: e.target.value
        })
    }

    const enviarNegocio = e => {
        e.preventDefault();
        guardarNegocio(negocio)
    }

    return (
        <section className="card col-md-6 col-lg-5 col-sm-12 mb-3 p-4 ">
            <form
                onSubmit={enviarNegocio}
            >
                <div className="form-group">
                    <label htmlFor="nombreNegocio">Nombre de negocio a la cual pertenece tu establecimiento</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nombreNegocio"
                        placeholder="nombre de cadena de establecimiento"
                        name="nombreNegocio"
                        onChange={actualizarState} />
                </div>
                <div className="form-group">
                    <label htmlFor="nitNegocio">Nit de negocio</label>
                    <input
                        type="number"
                        className="form-control"
                        id="nitNegocio"
                        placeholder="numero de Nit de negocio"
                        name="nitNegocio"
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

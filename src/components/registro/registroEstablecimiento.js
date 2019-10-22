import React, { useState } from 'react'

export default function RegistroEstablecimiento({guardarEstablecimiento}) {
    const [establecimiento, setEstablecimiento] = useState({
        nombreEstablecimeinto: '',
        direccionEstablecimiento: '',
        telefonoEstablecimiento: '',
        emailEstablecimiento: '',
        contraseñaEstablecimiento: ''
    })
    const actualizarState = (e) => {
        setEstablecimiento({
            ...establecimiento,
            [e.target.name]: e.target.value
        })
    }

    const enviarEntablecimiento = (e) =>{
        e.preventDefault();
        guardarEstablecimiento(establecimiento)
    }

    return (
        <section className="card col-md-6 col-lg-5 col-sm-12 mb-3 p-4 ">
            <form
                onSubmit={enviarEntablecimiento}
            >
                <div className="form-group">
                    <label htmlFor="nombreEstablecimeinto">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nombreEstablecimeinto"
                        placeholder="nombre de establecimiento"
                        name="nombreEstablecimeinto"
                        onChange={actualizarState} />
                </div>
                <div className="form-group">
                    <label htmlFor="direccionEstablecimiento">Direccion</label>
                    <input
                        type="text"
                        className="form-control"
                        id="direccionEstablecimiento"
                        placeholder="dirección de establecimiento"
                        name="direccionEstablecimiento"
                        onChange={actualizarState} />
                </div>
                <div className="form-group">
                    <label htmlFor="telefonoEstablecimiento">Telefono</label>
                    <input
                        type="number"
                        className="form-control"
                        id="telefonoEstablecimiento"
                        placeholder="número de telefono de negocio"
                        name="telefonoEstablecimiento"
                        onChange={actualizarState} />
                </div>
                <div className="form-group">
                    <label htmlFor="emailEstablecimiento">Correo</label>
                    <input
                        type="email"
                        className="form-control"
                        id="emailEstablecimiento"
                        placeholder="correo electronico de negocio"
                        name="emailEstablecimiento"
                        onChange={actualizarState} />
                </div>
                <div className="form-group">
                    <label htmlFor="contraseñaEstablecimiento">Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        id="contraseñaEstablecimiento"
                        placeholder="nueva contraseña"
                        name="contraseñaEstablecimiento"
                        onChange={actualizarState} />
                </div>
                <button type="submit" className="btn btn-primary btn-md btn-block">Registrar</button>
            </form>
        </section>
    )
}
import React, { useState } from 'react';
import clienteAxios from '../../config/axios';
import axios from 'axios';

export default function RegistroEstablecimiento({ guardarEstablecimiento }) {
    const [establecimiento, setEstablecimiento] = useState({
        nombreEstablecimeinto: '',
        direccionEstablecimiento: '',
        telefonoEstablecimiento: '',
        emailEstablecimiento: '',
        contraseñaEstablecimiento: '',
        fk_cadena:'ghj'
    });
    const [validarFormulario, setValidarFormulario] = useState(false);

    //se actualiza el state cada vez que elusuario tipea
    const actualizarState = (e) => {
        setEstablecimiento({
            ...establecimiento,
            [e.target.name]: e.target.value
        })
    }
    const getCadenaId = async () => {
        let estableciminetoId = await clienteAxios.get('/cadena');
        // setEstablecimiento.fk_cadena(estableciminetoId.data.id)
        console.log(establecimiento.fk_cadena);
    }
    getCadenaId();

    const enviarEntablecimiento = (e) => {
        e.preventDefault();
        if (
            establecimiento.nombreEstablecimeinto.trim() === '' ||
            establecimiento.direccionEstablecimiento.trim() === '' ||
            establecimiento.telefonoEstablecimiento.trim() === '' ||
            establecimiento.emailEstablecimiento.trim() === '' ||
            establecimiento.contraseñaEstablecimiento.trim() === ''
        ) {
            setValidarFormulario(true);
            return
        }
        guardarEstablecimiento(establecimiento)
    }

    return (
        <section className="card col-md-6 col-lg-5 col-sm-12 mb-3 p-4 ">
            <form
                onSubmit={enviarEntablecimiento}
            >
                <div className="form-group">
                    <label htmlFor="nombreEstablecimeinto">*Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nombreEstablecimeinto"
                        placeholder="nombre de establecimiento"
                        name="nombreEstablecimeinto"
                        onChange={actualizarState} />
                </div>
                <div className="form-group">
                    <label htmlFor="direccionEstablecimiento">*Direccion</label>
                    <input
                        type="text"
                        className="form-control"
                        id="direccionEstablecimiento"
                        placeholder="dirección de establecimiento"
                        name="direccionEstablecimiento"
                        onChange={actualizarState} />
                </div>
                <div className="form-group">
                    <label htmlFor="telefonoEstablecimiento">*Telefono</label>
                    <input
                        type="number"
                        className="form-control"
                        id="telefonoEstablecimiento"
                        placeholder="número de telefono de negocio"
                        name="telefonoEstablecimiento"
                        onChange={actualizarState} />
                </div>
                <div className="form-group">
                    <label htmlFor="emailEstablecimiento">*Correo</label>
                    <input
                        type="email"
                        className="form-control"
                        id="emailEstablecimiento"
                        placeholder="correo electronico de negocio"
                        name="emailEstablecimiento"
                        onChange={actualizarState} />
                </div>
                <div className="form-group">
                    <label htmlFor="contraseñaEstablecimiento">*Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        id="contraseñaEstablecimiento"
                        placeholder="nueva contraseña"
                        name="contraseñaEstablecimiento"
                        onChange={actualizarState} />
                </div>
                <button type="submit" className="btn btn-primary btn-md btn-block">*Registrar</button>
            </form>
            {
                validarFormulario === true ?
                    <div className="alert alert-danger mt-2" role="alert">Los campos marcados con * son obligatorios</div> :
                    null
            }
        </section>
    )
}
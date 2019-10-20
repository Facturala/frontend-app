import React, { useState } from 'react'

export default function RegistroEstablecimiento(props) {
    return (
        <section className="card col-md-6 col-lg-5 col-sm-12 mb-3 p-4 ">
            <form
                onSubmit={props.changeComponent}
            >
                <div className="form-group">
                    <label htmlFor="companyName">Nombre</label>
                    <input type="text" className="form-control" id="companyName" placeholder="nombre de establecimiento" />
                </div>
                <div className="form-group">
                    <label htmlFor="companyAddress">Direccion</label>
                    <input type="text" className="form-control" id="companyAddres" placeholder="dirección de establecimiento" />
                </div>
                <div className="form-group">
                    <label htmlFor="companyTelephone">Telefono</label>
                    <input type="number" className="form-control" id="companyTelephone" placeholder="número de telefono de negocio" />
                </div>
                <div className="form-group">
                    <label htmlFor="companyEmail">Correo</label>
                    <input type="email" className="form-control" id="companyEmail" placeholder="correo electronico de negocio" />
                </div>
                <div className="form-group">
                    <label htmlFor="companyPass">Contraseña</label>
                    <input type="password" className="form-control" id="companyPass" placeholder="nueva contraseña" />
                </div>
                <button type="submit" className="btn btn-primary btn-md btn-block">Registrar</button>
            </form>
        </section>
    )
}
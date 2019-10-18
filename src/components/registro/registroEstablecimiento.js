import React, { useState } from 'react'

export default function RegistroEstablecimiento() {
    return (
        <section >
            <div className="d-flex justify-content-around">
                <form
                    className="col-md-12 col-lg-5 mb-3">
                    <div className="form-group">
                        <label htmlFor="companyTelephone">Telefono</label>
                        <input type="number" className="form-control" id="companyTelephone" placeholder="numero de telefono de negocio" />
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
            </div>
        </section>
    )
}
import React, { useState } from 'react'

export default function RegistroCadena(props) {
    return (
        <section >
            <div className="d-flex justify-content-around">
                <form
                    onSubmit={props.changeComponent}
                    className="col-md-12 col-lg-5 mb-3">
                    <div className="form-group">
                        <label htmlFor="companyName">Nombre de negocio</label>
                        <input type="text" className="form-control" id="companyName" placeholder="nombre de cadena de establecimiento" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="companyNit">Nit de negocio</label>
                        <input type="number" className="form-control" id="companyNit" placeholder="numero de Nit de negocio" />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary btn-md btn-block"
                    >
                        Guardar y siguiente
                    </button>
                </form>
            </div>
        </section>
    )
}

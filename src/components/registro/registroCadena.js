import React from 'react'

import './registro.scss';

export default function RegistroCadena(props) {
    return (
        <section className="card col-md-6 col-lg-5 col-sm-12 mb-3 p-4 ">
                <form
                    onSubmit={props.changeComponent}
                    >
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
        </section>
    )
}

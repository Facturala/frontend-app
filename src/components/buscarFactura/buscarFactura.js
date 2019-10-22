import React from 'react';
import './buscarFactura.scss';
import online from '../../resources/online.svg'

export default function BuscarFactura() {
    return (
        <div className="buscarFactura-row row">
            <section className="buscarFactura-row__section col-md-6">
                <p>Ingresa aqui tu correo electronico o numero de telefono para ver todas tus facturas</p>
                <form className="input-group">
                    <input type="text" className="form-control" placeholder="Ingresa tu número de celular o email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-warning" type="button" id="button-addon2">Buscar</button>
                    </div>
                </form>
            </section>
            <section className="buscarFactura-row__section col-md-6 animated bounceInRight">
                <div>
                    <img src={online} className="" alt="factura en el telefono"></img>
                </div>
                <article className="card--background card p-1 text-black">
                    <h2 className="card__title card-title text-right">Que tu factura te llegue al telefono</h2>
                    <p className="card__text card-text text-right">Aun recibes facturas fisicas? Pide tu factura electronica en los comercios aliados.</p>
                </article>
            </section>
        </div>
    )
}

import React from 'react';
import '../../styles/buscarFactura.scss';
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
            <section className="buscarFactura-row__section col-md-6">
                <div>
                    <img src={online}></img>
                </div>
                <article className="card--background card p-3 text-black">
                    <h2 className="card__title card-title text-center">Que tu factura te llegue al telefono</h2>
                    <p className="card__text card-text">Aun recibes facturas fisicas? Pide tu factura electronica en los comercions aliados.</p>
                </article>
            </section>
        </div>
    )
}

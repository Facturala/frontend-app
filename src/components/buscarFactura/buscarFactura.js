import React from 'react'
import '../../styles/buscarFactura.scss'
export default function BuscarFactura() {
    return (
        <div>
            <div className="row justify-content-center">

                <article className="card--background card col-lg-5 ml-0 p-3 text-white">
                    <h2 className="card__title card-title">Se parte de la innovación</h2>
                    <p className="card__text card-text">Aun recibes facturas fisicas? Es hora de contribuir al medio ambiente, pide tu factura electronica</p>
                </article>
            </div>

            <form className="input-group mt-3">
                <input type="text" className="form-control" placeholder="Ingresa tu número de celular o email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-warning" type="button" id="button-addon2">Buscar</button>
                </div>
            </form>
        </div>
    )
}

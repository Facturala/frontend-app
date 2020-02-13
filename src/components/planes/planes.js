import React from 'react';
import './planes.scss';

export default function Planes() {
    return (
        <div className="planes row justify-context-center">
            <header className="col-md-12 mb-3 text-center text-white">
                <h2>P lan para tu negocio</h2>
                <p>Perfecto para tu negocio o empresa, puedes empezar a generar facturas de tus ventas para tus clientes, ellos la recibiran directo en su telefono movil.
                <br />Pagas solo por las facturas que envias.
                </p>
            </header>
            <div className="planes__card card mb-5 box-shadow">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Gratis</h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mes</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li><p>50 facturas al mes</p></li>
                        <li><p>facturas por email a tus cientes <span role="img" aria-label="correo electronico">📧</span></p></li>
                        <li><p>Acceso a dashboard para tu negocio <span role="img" aria-label="dashboard">📊</span></p></li>
                    </ul>
                    <button type="button" className="btn btn-lg btn-block btn-warning">Adquirir plan</button>
                </div>
            </div>
            <div className="planes__card card mb-5 box-shadow">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Premium</h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title">$50 cop<small className="text-muted">/ factura</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li><p>Facturas ilimitadas</p></li>
                        <li><p>facturas por email a tus cientes <span role="img" aria-label="correo electronico">📧</span></p></li>
                        <li><p>Acceso a dashboard para tu negocio <span role="img" aria-label="dashboard">📊</span></p></li>
                    </ul>
                    <button type="button" className="btn btn-lg btn-block btn-warning">Adquirir plan</button>
                </div>
            </div>
        </div>
    )
}
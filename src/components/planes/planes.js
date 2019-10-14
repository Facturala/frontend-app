import React from 'react';
import '../../styles/planes.scss';

export default function Planes() {
    return (
        <div className="planes row justify-context-center">
            <header className="col-md-12 mb-3 text-center text-white">
                <h2>Planes</h2>
                <p>Perfecto para tu negocio o empresa, puedes empezar a generar facturas de tus ventas para tus clientes, ellos la recibiran directo en su telefono.
                <br/>Pagas solo por las facturas que envias.
                </p>
            </header>
            <div class="planes__card card mb-5 box-shadow">
                <div class="card-header">
                    <h4 class="my-0 font-weight-normal">Gratis</h4>
                </div>
                <div class="card-body">
                    <h1 class="card-title pricing-card-title">$0 <small class="text-muted">/ mes</small></h1>
                    <ul class="list-unstyled mt-3 mb-4">
                        <li>50 facturas al mes</li>
                        <li>facturas por email a tus cientes</li>
                        <li>Acceso a dashboard para tu negocio</li>
                    </ul>
                    <button type="button" class="btn btn-lg btn-block btn-warning">Adquirir plan</button>
                </div>
            </div>
            <div class="planes__card card mb-5 box-shadow">
                <div class="card-header">
                    <h4 class="my-0 font-weight-normal">Premium</h4>
                </div>
                <div class="card-body">
                    <h1 class="card-title pricing-card-title">$50 cop<small class="text-muted">/ factura</small></h1>
                    <ul class="list-unstyled mt-3 mb-4">
                        <li>Facturas ilimitadas</li>
                        <li>facturas por email a tus cientes</li>
                        <li>Acceso a dashboard para tu negocio</li>
                    </ul>
                    <button type="button" class="btn btn-lg btn-block btn-warning">Adquirir plan</button>
                </div>
            </div>
        </div>
    )
}
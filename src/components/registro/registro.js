import React, { useState } from 'react';
import RegistroCadena from './registroCadena';
import RegistroEstablecimiento from './registroEstablecimiento';

import './registro.scss';


export default function Registro() {

    const [form, setForm] = useState(false)
    const changeComponent = (e) => {
        e.preventDefault();
        setForm(true);
    }

    return (
        <div className="registro row justify-content-around pb-5">
            <header className="text-center mb-5">
                <p>Tan facil como llenar un formulario.
                Registrandote con nosotros puedes acceder a estadisticas de tu negocio en tiempo real y <strong>Gratis</strong>.</p>
            </header>
            <article className="col-lg-6 col-md-6 col-sm-12">
                <ol className="list-group list-group-flush mb-4">
                    <li className="list-group-item"><p><strong>1.</strong> Registra Tu establecimiento</p></li>
                    <li className="list-group-item"><p><strong>2.</strong> Asocia tu establecimiento a la cadena a al cual pertenece</p></li>
                </ol>
                <p className="registro__texto text-justify mt-5">
                    Con <strong>Facturala</strong> encontraras la herramiienta perfecta para tu negocio,
                    puedes enviar facturas electronicas a tus clientes, y al mismo tiempo tienes herraminetas de
                    big data disponible a tu alcanze que te ayudara a tomar decisioes correctas para tu negocio.
                </p>
            </article>
            {form === false ? <RegistroEstablecimiento changeComponent={changeComponent} /> : <RegistroCadena changeComponent={changeComponent} />}
        </div >
    )
}
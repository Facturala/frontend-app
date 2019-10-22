import React from 'react';

export default function Footer() {
    return (
        <footer>
            <div className="container text-center text-md-left mt-5">
                <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Facturala.com</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                        <p>Facturala es una iniciativa nacida en Suramerica, con el animo de democratizar la factura electronica y ayudar a pequeños, medianos y grandes comercios dandoles herramientas de big data para toma de desiciones</p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Para empresas</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                        <p>
                            <a href="#!">Dashboard</a>
                        </p>
                        <p>
                            <a href="#!">Big Data</a>
                        </p>
                        <p>
                            <a href="#!">Facturacion</a>
                        </p>
                        <p>
                            <a href="#!">Toma de desiciones</a>
                        </p>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Para personas</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                        <p>
                            <a href="#!">Tu factura</a>
                        </p>
                        <p>
                            <a href="#!">Tu historial</a>
                        </p>
                        <p>
                            <a href="#!">Tus datos</a>
                        </p>
                        <p>
                            <a href="#!">Terminos y condiciones</a>
                        </p>
                    </div>
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase font-weight-bold">Contacto</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                        <p><span role="img" aria-label="icono de bogota">🏙️</span> Bogota D.C. - Colombia</p>
                        <p><span role="img" aria-label="correo electronico">📧</span> facturandolatam@gmail.com</p>
                        <p><span role="img" aria-label="telefono celular">📱</span>  + 57 304 457 5306</p>
                        <p><span role="img" aria-label="telefono celular">📱</span>  + 57 350 575 4798</p>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center"><h6>© 2020 Copyright: Facturala.com</h6><p>Developed with <span role="img" aria-label="corazon">❤️</span> in Latin America</p>
            </div>
        </footer>
    );
}
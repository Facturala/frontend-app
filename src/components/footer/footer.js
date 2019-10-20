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
                        <h6 className="text-uppercase font-weight-bold">Contact</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                        <p>
                            <i className="fas fa-home mr-3"></i>Bogota D.C. - Colombia</p>
                        <p>
                            <i className="fas fa-envelope mr-3"></i>facturandolatam@gmail.com</p>
                        <p>
                            <i className="fas fa-phone mr-3"></i> + 57 304 457 5306</p>
                        <p>
                            <i className="fas fa-print mr-3"></i> + 57 350 575 4798</p>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3"><h6>© 2020 Copyright: Facturala.com</h6><p>Developed with ❤️ in Latin America</p>
            </div>
        </footer>
    );
}
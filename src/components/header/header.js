import React, { useState } from 'react';
import '../../styles/headers.scss';


function Header() {

    return (
        <header className="header">
            <nav className="navbar navbar-expand-md navbar-dark">
                <a className="navbar-brand" href="#">
                    <h1 className="navbar__title">Facturala</h1>
                </a>
                <button className="navbar__button navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
                    aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
                    <ul className="navbar-menu navbar-nav ml-auto">
                        <li className="navbar-menu__item nav-item">
                            <a className="nav-link text-white" href="#">Mis facturas</a>
                        </li>
                        <li className="navbar-menu__item nav-item">
                            <a className="nav-link text-white" href="#">Planes</a>
                        </li>
                        <li className="navbar-menu__item nav-item">
                            <a className="navbar-menu__link nav-link btn btn-warning text-dark" href="#">Registro</a>
                        </li>
                        <li className="navbar-menu__item nav-item">
                        <a className="navbar-menu__link nav-link btn btn-warning text-dark" href="#">Ingresar</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default Header;

import React, { useState } from 'react';
import './headers.scss';
import menu from '../../resources/menu.png'

function Header() {

    return (
        <header className="header mb-5">
            <nav className="navbar navbar-expand-md">
                <a className="navbar-brand" href="#">
                    <h1 className="navbar__title">Facturala</h1>
                </a>
                <button className="navbar__button navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
                    aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
                    <img className="navbar-toggler-icon" src={menu}></img>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
                    <ul className="navbar-menu navbar-nav ml-auto">
                        <li className="navbar-menu__item nav-item">
                            <a className="navbar-menu__link nav-link" href="#">Mis facturas</a>
                        </li>
                        <li className="navbar-menu__item nav-item">
                            <a className="navbar-menu__link nav-link" href="#">Planes</a>
                        </li>
                        <li className="navbar-menu__item--button nav-item">
                            <a className="navbar-menu__link nav-link btn btn-warning text-dark" href="#">Registro</a>
                        </li>
                        <li className="navbar-menu__item--button nav-item">
                            <a className="navbar-menu__link nav-link btn btn-warning text-dark" href="#">Ingresar</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default Header;

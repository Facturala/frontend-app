import React, { useState, useEffect } from 'react';
import '../../styles/headers.scss';

function Header() {
   
    const [toggle, settoggle] = useState("flex");

    const menuToggle = () => {
        if (window.innerWidth > 767.98) {            
            settoggle("flex");
            
        }else{
            toggle === "none"? settoggle("flex"): settoggle("none");      
        }
    }
    
    return (
        <header className="header">
            <nav className="navigation">
                <h1 className="navigation__title">Facturala</h1>
                <i className="fas fa-2x fa-bars navigation__hamburguer" onClick={menuToggle}></i>
                <ul className="main-menu" style={{display:toggle}}>
                    <li className="main-menu__item">
                        <a href="#" className="main-menu__link">Planes</a>
                    </li>
                    <li className="main-menu__item">
                        <a href="#" className="main-menu__link">Mis Factuas</a>
                    </li>
                    <li className="main-menu__item">
                        <a href="#" className="main-menu__link">Registro</a>
                    </li>
                    <li className="main-menu__item">
                        <a href="#" className="main-menu__link">Ingresar</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;

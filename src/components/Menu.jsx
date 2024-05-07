import { useEffect, useState } from 'react';

import './Menu.css'
import { Theme } from './Theme';
import { MenuLogo } from './MenuLogo';

export const Menu = () => {
    console.log("Menu")
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            const menuItems = document.querySelectorAll("nav ul li a");

            sections.forEach((seccion, index) => {
                const posicion = seccion.getBoundingClientRect(); // Section position
                const mitadVentana = window.innerHeight / 2; // Half the height of the window

                if (posicion.top <= mitadVentana && posicion.bottom >= mitadVentana) {
                    // If the section is in the centre of the window, highlight the corresponding link in the menu.
                    menuItems.forEach((item) => {
                        item.classList.remove("navbar-site__active");
                    });
                    menuItems[index].classList.add("navbar-site__active");
                }
            });
        }

        // Add event receiver to detect scroll
        window.addEventListener('scroll', handleScroll);

        // removes the event listener when the component is unmounted
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div className="navbar-site">
            <nav className="navbar-site__navbar">
                <a href="#home" className="navbar-site__logo">
                    <MenuLogo />
                    <strong className="navbar-site__logo-strong">YeiiMaccDev</strong>
                </a>
                <ul className={`navbar-site__list ${(isMenuOpen) ? 'open' : ''} `}>
                    <li className="navbar-site__item">
                        <a className="navbar-site__link navbar-site__active" href="#home">Inicio</a>
                    </li>
                    <li className="navbar-site__item">
                        <a className="navbar-site__link" href="#sobre-mi">Sobre mi</a>
                    </li>
                    <li className="navbar-site__item">
                        <a className="navbar-site__link" href="#tecnologias">Tecnologías</a>
                    </li>
                    <li className="navbar-site__item">
                        <a className="navbar-site__link" href="#proyectos">Proyectos</a>
                    </li>
                    <li className="navbar-site__item">
                        <a className="navbar-site__link" href="#formacion">Formación</a>
                    </li>
                    <li className="navbar-site__item">
                        <a className="navbar-site__link" href="#contacto">Contacto</a>
                    </li>
                    <li className="navbar-site__item">
                        <Theme />
                    </li>

                </ul>
                <button
                    className={`navbar-site__toggler ${(isMenuOpen) ? 'toggler-open' : ''}  `}
                    aria-label="Menu"
                    onClick={() => toggleMenu()}
                >
                    <span
                        className="navbar-site__toggler__span"
                        onClick={() => toggleMenu()}
                    ></span>
                </button>
            </nav>
        </div>
    )
}

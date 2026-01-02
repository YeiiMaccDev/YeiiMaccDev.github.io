import { faArrowDown, faFilePdf } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons"

import profileImg from "../../assets/img/perfil.webp"
import './AboutSection.css'

export const AboutSection = () => {
    return (
        <section className="about section-100vh menu-section" id="about">
            <div className="about__data container">
                <div className="about__card">
                    <h1 className="about__title"> Yeison Macias </h1>
                    <h2 className="about__title2 text-strong-color"> FullStack JavaScript Developer </h2>
                    <p className="about__description">
                        Hola, soy Yeison Macias <strong> YeiiMaccDev </strong> con <strong> +3
                            años de experiencia </strong>, me encanta el mundo del desarrollo web, desliza hacia abajo y
                        descubre un poco mas sobre mi.
                    </p>
                    <div className="about__networks">
                        <a href="https://www.linkedin.com/in/yeiimaccdev" className="about__icons-link about__linkedin"
                            target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} className="about__icon fa-2x" title="Ver Linkedin" />
                            <strong className="about__icons__name">LinkedIn</strong>
                        </a>
                        <a href="https://github.com/YeiiMaccDev" className="about__icons-link about__github"
                            target="_blank">
                            <FontAwesomeIcon icon={faGithub} className="about__icon fa-2x" title="Ver GitHub" />
                            <strong className="about__icons__name">GitHub</strong>
                        </a>
                        <a href="https://youtube.com/@YeiiMaccDev" className="about__icons-link about__youtube"
                            target="_blank">
                            <FontAwesomeIcon icon={faYoutube} className="about__icon fa-2x" title="Ver Youtube" />
                            <strong className="about__icons__name">YouTube</strong>
                        </a>
                        <a href="#" className="about__icons-link about__cv" target="_blank">
                            <FontAwesomeIcon icon={faFilePdf} className="about__icon fa-2x" title="Descargar CV" />
                            <strong className="about__icons__name">Ver </strong>
                            <strong>CV</strong>
                        </a>
                    </div>
                </div>
                <div className="about__avatar">
                    <img className="about__img" src={profileImg} alt="" />
                </div>
            </div>
            <figure className="arrow-down">
                <i className="fa-solid fa-arrow-down"></i>
                <FontAwesomeIcon icon={faArrowDown} />
            </figure>
        </section>
    )
}

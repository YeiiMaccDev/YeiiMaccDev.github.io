
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFilePdf } from '@fortawesome/free-regular-svg-icons'

import './ContactSection.css'

export const ContactSection = () => {
    const [showWhatsapp, setShowWhatsapp] = useState(true);

    const toggleWhatsapp = () => {
        setShowWhatsapp(prevState => !prevState);
    };
    return (
        <section className="contact section-100vh menu-section" id="contact">
            <div className="contact__data container">
                <h2 className="contact__title">Contacto</h2>
                <div className="contact__list">
                    <div className="contact__card contact__networks">
                        <a href="https://www.linkedin.com/in/yeiimaccdev"
                            className="contact__icons-link about__linkedin" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} className="fa-brands fa-linkedin about__icon fa-2x" />
                            <strong className="contact__icons__name">LinkedIn</strong>
                        </a>
                        <a href="#" className="contact__icons-link about__cv" target="_blank">
                            <FontAwesomeIcon icon={faFilePdf} className="fa-solid fa-file-pdf about__icon fa-2x" />
                            <strong className="about__icons__name">Ver </strong>
                            <strong>CV</strong>
                        </a>
                    </div>

                    <div className="contact__card contact__email">
                        <a href="mailto:yeiimaccdev@gmail.com" className="contact__icons-link " target="_blank">
                            <FontAwesomeIcon icon={faEnvelope} className="fa-solid fa-envelope  fa-2x" />
                            <strong className="contact__email-text">yeiimaccdev@gmail.com</strong>
                        </a>
                    </div>

                    <div className="contact__cardBtn">
                        <p className="contact__txtWhatsapp"> * Quiero contactar de una manera menos formal. </p>
                        <button
                            className="contact__btnWhatsapp btn contact__icons-link"
                            onClick={toggleWhatsapp}>
                            <strong>Ver contacto</strong>
                        </button>
                    </div>

                    <div className={`contact__card  ${showWhatsapp ? 'contact__whatsapp' : ''}`}>
                        <a href="https://n9.cl/xhqox" className="contact__icons-link" target="_blank">
                            <FontAwesomeIcon icon={faWhatsappSquare} className="fa-brands fa-square-whatsapp  fa-2x" />
                            <strong className="contact__whatsapp-text"> Déjame un mensaje de Whatsapp</strong>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

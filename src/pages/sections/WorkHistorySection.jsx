
import './WorkHistorySection.css'

export const WorkHistorySection = () => {
    return (
        <section className="work-history section-100vh menu-section" id="workHistory">
            <div className="work-history__data container">
                <div className="work-history__card">
                    <h2 className="about__title2">Experiencia</h2>

                    <div className="work-history__item">
                        <p><strong>Desarrollador full stack</strong></p>
                        <p>Shoes Play · Profesional independiente</p>
                        <p>oct. 2023 - mar. 2024 · 6 meses</p>
                        <hr />
                        <div className="work-history__item-description">
                            <p>Levantamiento de requisitos, análisis, diseño y desarrollo de la aplicación web de la empresa, para mostrar los diferentes productos a los clientes.</p>
                            <p>Manejo de Node.js para back-end, MongoDB como base de datos y React.js para interfaz de usuario.</p>
                        </div>

                    </div>

                    <div className="work-history__item">
                        <p><strong>Desarrollador web</strong></p>
                        <p>Lifetime Capital Financial Group · Profesional independiente</p>
                        <p>mar. 2022 - ago. 2022 · 6 meses</p>
                        <hr />
                        <div className="work-history__item-description">
                            <p>Ayude con el diseño, desarrollo e implementación de la nueva página web oficial de la empresa, usando Reat.js para mejorar hasta en un 50% el tiempo de carga y posicionamiento en los navegadores.</p>
                            <p>Manejo de Node.js para back-end, MongoDB como base de datos y React.js para interfaz de usuario.</p>
                        </div>

                    </div>


                    <div className="work-history__item">
                        <p><strong>Desarrollador full stack - Practicante</strong></p>
                        <p>Servicio Nacional de Aprendizaje (SENA) · Contrato de prácticas</p>
                        <p>sept. 2021 - mar. 2022 · 7 meses</p>
                        <hr />
                        <div className="work-history__item-description">
                            <p>Ayude con el diseño, desarrollo e implementación de la nueva página web oficial de la empresa, usando Reat.js para mejorar hasta en un 50% el tiempo de carga y posicionamiento en los navegadores.</p>
                            <p>Manejo de Node.js para back-end, MongoDB como base de datos y React.js para interfaz de usuario.</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

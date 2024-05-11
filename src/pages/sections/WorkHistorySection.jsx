
import './WorkHistorySection.css'

export const WorkHistorySection = () => {
    return (
        <section className="work-history section-100vh menu-section" id="workHistory">
            <div className="work-history__data container">
                <div className="work-history__card">
                    <h2 className="about__title2">Experiencia</h2>

                    <div className="work-history__item">
                        <p><strong>Desarrollador FullStack en Freelance</strong></p>
                        <p>Shoes Play · Profesional independiente</p>
                        <p>Jun 2023 – Actual</p>
                        <hr />
                        <div className="work-history__item-description">
                            <p>Utilicé tecnologías del stack de JavaScript, incluyendo React, Node.js, Express y MongoDB, para construir aplicaciones web personalizadas según los requisitos del cliente.</p>
                            <p>Trabajé de manera independiente, gestionando eficientemente el tiempo y las expectativas del cliente.</p>
                            <p>Desarrollé la aplicación web para la tienda Moda Sport, aumentando la visibilidad de sus productos y gracias a ello el aumento las ventas en más de un 50%.</p>
                            <p>Desarrollé la aplicación web para la tienda ShoesPlay, permitiendo mostrar su gran variedad de productos, brindando ventaja sobre sus competidores.</p>
                        </div>

                    </div>

                    <div className="work-history__item">
                        <p><strong>Desarrollador Web</strong></p>
                        <p>Lifetime Capital Financial Group</p>
                        <p>mar. 2022 - ago. 2022 · 6 meses</p>
                        <hr />
                        <div className="work-history__item-description">
                            <p>Ayudé con el rediseño, desarrollo e implementación de la página web oficial de la empresa, usando HTML, CSS, Bootstrap y React.js.</p>
                            <p>Mejoramos el posicionamiento de la página mediante la remodelación de la estructura del sitio web y la aplicación de prácticas de SEO.</p>
                        </div>

                    </div>


                    <div className="work-history__item">
                        <p><strong>Desarrollador full stack - Practicante</strong></p>
                        <p>Servicio Nacional de Aprendizaje (SENA) · Contrato de prácticas</p>
                        <p>sept. 2021 - mar. 2022 · 7 meses</p>
                        <hr />
                        <div className="work-history__item-description">
                            <p>Trabajé en equipo como desarrollador junior para el análisis, diseño y desarrollo de una aplicación que automatiza el flujo de trabajo al inscribir registro de horas mensuales para instructores del área de inglés y humanidades.</p>
                            <p>Utilizamos tecnologías como Java y React para el desarrollo de la aplicación.</p>
                            <p>Logramos un beneficio de hasta un 80% del tiempo de entrega de formatos para registrar la programación de clases día-hora, mejorando significativamente la eficiencia del proceso.</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}


import "./AcademicDescriptionSection.css"

import logoSena from '../../assets/img/academic/logo-sena.png'
import logoMisionT from '../../assets/img/academic/logo-misiontic.png'
import logoONE from '../../assets/img/academic/logo-one-alura.png'
import logoFUC from '../../assets/img/academic/logoFUC.png'

import logoOracle from '../../assets/img/academic/logoOracle.jpg'
import logoCisco from '../../assets/img/academic/logoCisco.jpg'
import logoConectaE from '../../assets/img/academic/logoConectaE.jpg'
import logoAlura from '../../assets/img/academic/logoAlura.jpg'

export const AcademicDescriptionSection = () => {
    return (
        <section className="academic-description section-100vh" id="aboutme">
            <div className="academic-description__data container">
                <div className="academic-description__card">
                    <h2 className="about__title2">Educación</h2>

                    <div className="academic-description__item">
                        <div className="academic-description__item-image">
                            <img src={logoFUC} width={70} height={60} alt="" />
                        </div>
                        <div className="academic-description_item-description">
                            <p><strong>Fundacion UniversitariaCompensar</strong></p>
                            <p>Ingenieria en sistemas</p>
                            <p>2022 - Actual ( 7 semestre )</p>
                        </div>
                    </div>

                    <div className="academic-description__item">
                        <div className="academic-description__item-image">
                            <img src={logoONE} width={70} height={60} alt="" />
                        </div>
                        <div className="academic-description_item-description">
                            <p><strong>Oracle Next Education - Alura</strong></p>
                            <p>Diplomado</p>
                            <p>2022 - 2023</p>
                        </div>
                    </div>

                    <div className="academic-description__item">
                        <div className="academic-description__item-image">
                            <img src={logoMisionT} width={70} height={60} alt="" />
                        </div>
                        <div className="academic-description_item-description">
                            <p><strong>MisionTic 2022</strong></p>
                            <p>Diplomado</p>
                            <p>2021 - 2022 </p>
                        </div>
                    </div>
                    <div className="academic-description__item">
                        <div className="academic-description__item-image">
                            <img src={logoSena} width={70} height={60} alt="" />
                        </div>
                        <div className="academic-description_item-description">
                            <p><strong>Servicio Nacional de Aprendizaje</strong></p>
                            <p>Tecnólogo en análisis y Desarrollo de sistemas de información</p>
                            <p>2019 - 2021 </p>
                        </div>
                    </div>
                    <div className="academic-description__item">
                        <div className="academic-description__item-image">
                            <img src={logoSena} width={70} height={60} alt="" />
                        </div>
                        <div className="academic-description_item-description">
                            <p><strong>Servicio Nacional de Aprendizaje</strong></p>
                            <p>Técnico de sistemas - Bachiller </p>
                            <p>2017 - 2018 </p>
                        </div>
                    </div>
                </div>

                <div className="academic-description__card">
                    <h2 className="about__title2">Licencias y certificaciones</h2>

                    <div className="academic-description__item">
                        <div className="academic-description__item-image">
                            <img src={logoOracle} width={70} height={60} alt="" />
                        </div>
                        <div className="academic-description_item-description">
                            <p><strong>Oracle</strong></p>
                            <p>Certified Database Design</p>
                            <p>Certified Database Foundations</p>
                        </div>
                    </div>

                    <div className="academic-description__item">
                        <div className="academic-description__item-image">
                            <img src={logoCisco} width={70} height={60} alt="" />
                        </div>
                        <div className="academic-description_item-description">
                            <p><strong>Cisco</strong></p>
                            <p>Introduction to Cybersecurity</p>
                        </div>
                    </div>
                    <div className="academic-description__item">
                        <div className="academic-description__item-image">
                            <img src={logoConectaE} width={70} height={60} alt="" />
                        </div>
                        <div className="academic-description_item-description">
                            <p><strong>Conecta Empleo</strong></p>
                            <p>Introducción a Power BI - FT Ed 3</p>
                        </div>
                    </div>
                    <div className="academic-description__item">
                        <div className="academic-description__item-image">
                            <img src={logoAlura} width={70} height={60} alt="" />
                        </div>
                        <div className="academic-description_item-description">
                            <p><strong>Alura Latan - Oracle ONE</strong></p>
                            <p>Formación Principiante en Programación G3 </p>
                            <p>Formación Java Orientado a Objetos G3 </p>
                            <p>Formación Front End G3 </p>
                            <p>Git y GitHub: controle y comparta su código</p>
                            <p>SQL con MYSQL SERVER de ORACLE </p>
                            <p>Formación Oracle Cloud Infrastructure </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

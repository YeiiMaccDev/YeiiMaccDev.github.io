
import "./AcademicDescriptionSection.css"

import logoSena from '../../assets/img/academic/logo-sena.webp'
import logoMisionT from '../../assets/img/academic/logo-misiontic.webp'
import logoONE from '../../assets/img/academic/logo-one-alura.webp'
import logoFUC from '../../assets/img/academic/logoFUC.webp'

import logoSM from '../../assets/img/academic/logoScrum.webp'
import logoOracle from '../../assets/img/academic/logoOracle.webp'
import logoCisco from '../../assets/img/academic/logoCisco.webp'
import logoConectaE from '../../assets/img/academic/logoConectaE.webp'
import logoAlura from '../../assets/img/academic/logoAlura.webp'

export const AcademicDescriptionSection = () => {
    const EDUCATION_DATA = [
        {
            id: 'fuc-spec',
            logo: logoFUC,
            institution: 'Fundación Universitaria Compensar',
            title: 'Especialista en Big Data',
            date: '2026 - 2027 En curso',
        },
        {
            id: 'fuc-ing',
            logo: logoFUC,
            institution: 'Fundación Universitaria Compensar',
            title: 'Ingeniería de Sistemas',
            date: '2022 - 2026',
        },
        {
            id: 'one-diploma',
            logo: logoONE,
            institution: 'Oracle Next Education - Alura',
            title: 'Diplomado Desarrollo Web / Cloud Infrastructure',
            date: '2022 - 2023',
        },
        {
            id: 'misiontic',
            logo: logoMisionT,
            institution: 'Misión TIC 2022',
            title: 'Diplomado Desarrollo de Software',
            date: '2021 - 2022',
        },
        {
            id: 'sena-adsi',
            logo: logoSena,
            institution: 'Servicio Nacional de Aprendizaje (SENA)',
            title: 'Tecnólogo en Análisis y Desarrollo de Sistemas de Información',
            date: '2019 - 2021',
        },
        {
            id: 'sena-tech',
            logo: logoSena,
            institution: 'Servicio Nacional de Aprendizaje (SENA)',
            title: 'Técnico de Sistemas - Bachiller',
            date: '2017 - 2018',
        },
    ];

    const CERTIFICATION_DATA = [
        {
            id: 'scrum',
            logo: logoSM,
            institution: 'SCRUMstudy',
            details: ['Scrum Fundamentals Certified (SFC)'],
        },
        {
            id: 'conecta-bi',
            logo: logoConectaE,
            institution: 'Conecta Empleo',
            details: ['Introducción a Power BI - FT Ed 3'],
        },
        {
            id: 'cisco-sec',
            logo: logoCisco,
            institution: 'Cisco',
            details: ['Introduction to Cybersecurity'],
        },
        {
            id: 'oracle-db',
            logo: logoOracle,
            institution: 'Oracle',
            details: [
                'Certified Database Design',
                'Certified Database Foundations'
            ],
        },
        {
            id: 'alura-path',
            logo: logoAlura,
            institution: 'Alura Latam - Oracle ONE',
            details: [
                'Formación Java Orientado a Objetos G3',
                'Formación Front End G3',
                'Git y GitHub: controle y comparta su código',
                'SQL con MYSQL SERVER de ORACLE',
                'Formación Oracle Cloud Infrastructure',
            ],
        }];

    const AcademicItem = ({ logo, institution, title, date, details }) => (
        <div className="academic-description__item">
            <div className="academic-description__item-image">
                <img src={logo} alt={`Logo de ${institution}`} loading="lazy" />
            </div>
            <div className="academic-description_item-description">
                {title && <p><strong>{title}</strong></p>}
                <p>{institution}</p>
                {details ? (
                    details.map((detail, index) => <p key={index} className="text-sm">{detail}</p>)
                ) : (
                    <p>{date}</p>
                )}
            </div>
        </div>
    );

    return (
        <>
            <section className="academic-description" id="aboutme">
                <div className="academic-description__data container">

                    <div className="academic-description__card">
                        <h2 className="about__title2">Educación</h2>
                        <div className="academic-list">
                            {EDUCATION_DATA.map((item) => (
                                <AcademicItem
                                    key={item.id}
                                    {...item}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="academic-description__card">
                        <h2 className="about__title2">Licencias y certificaciones</h2>
                        <div className="academic-list">
                            {CERTIFICATION_DATA.map((item) => (
                                <AcademicItem
                                    key={item.id}
                                    {...item}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </>

    )
}

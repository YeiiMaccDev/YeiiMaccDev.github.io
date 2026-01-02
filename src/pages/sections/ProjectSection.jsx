
import './ProjectSection.css'

import projectLT1 from '../../assets/img/proyects/LTC1.webp'
import projectLT2 from '../../assets/img/proyects/LTC2.webp'
import projectLT3 from '../../assets/img/proyects/LTC3.webp'
import projectLT4 from '../../assets/img/proyects/LTC4.webp'
import projectLT5 from '../../assets/img/proyects/LTC5.webp'
import projectLT6 from '../../assets/img/proyects/LTC6.webp'

import projectMS1 from '../../assets/img/proyects/MS1.webp'
import projectMS2 from '../../assets/img/proyects/MS2.webp'
import projectMS3 from '../../assets/img/proyects/MS3.webp'
import projectMS4 from '../../assets/img/proyects/MS4.webp'
import projectMS5 from '../../assets/img/proyects/MS5.webp'
import projectMS6 from '../../assets/img/proyects/MS6.webp'

import projectSP1 from '../../assets/img/proyects/SP1.webp'
import projectSP2 from '../../assets/img/proyects/SP2.webp'
import projectSP3 from '../../assets/img/proyects/SP3.webp'
import projectSP4 from '../../assets/img/proyects/SP4.webp'
import projectSP5 from '../../assets/img/proyects/SP5.webp'
import projectSP6 from '../../assets/img/proyects/SP6.webp'

import projectECO1 from '../../assets/img/proyects/ECO1.webp'
import projectECO2 from '../../assets/img/proyects/ECO2.webp'
import projectECO3 from '../../assets/img/proyects/ECO3.webp'
import projectECO4 from '../../assets/img/proyects/ECO4.webp'
import projectECO5 from '../../assets/img/proyects/ECO5.webp'
import projectECO6 from '../../assets/img/proyects/ECO6.webp'

import { useState } from 'react'

// --- DATA ---
const PROJECTS_DATA = [
    {
        id: 1,
        title: 'Lifetime Capital - Financial Group',
        category: 'Front-end',
        images: [
            projectLT1,
            projectLT2,
            projectLT4,
            projectLT5,
            projectLT6
        ],
        description: 'Plataforma corporativa para un grupo financiero con enfoque en gestión patrimonial y visualización de datos de inversión.',
        technologies: ['HTML', 'CSS', 'React.js', 'Bootstrap'],
        demo: 'https://lifetimecapital.com',
        github: 'https://github.com/joswald123/Lifetimews'
    },
    {
        id: 2,
        title: 'Moda Sport',
        category: 'Back-end',
        images: [
            projectMS1,
            projectMS2,
            projectMS3,
            projectMS4,
            projectMS5,
            projectMS6
        ],
        description: 'Sistema de gestión de inventarios y API para e-commerce de ropa deportiva. Incluye pasarela de pago y manejo de usuarios.',
        technologies: ['Node.js', 'Express', 'MongoDB', 'React.js'],
        demo: 'https://yeiimaccdev.github.io/ModaSport/',
        github: 'https://github.com/YeiiMaccDev/ModaSport'
    },
    {
        id: 3,
        title: 'ShoesPlay',
        category: 'Front-end',
        images: [
            projectSP1,
            projectSP2,
            projectSP3,
            projectSP4,
            projectSP5,
            projectSP6
        ],
        description: 'Tienda virtual de calzado enfocada en una interfaz de usuario fluida utilizando Material UI.',
        technologies: ['React.js', 'Material UI', 'Redux'],
        demo: 'https://yeiimaccdev.github.io/ModaSport/',
        github: 'https://github.com/YeiiMaccDev/ShoesPlay'
    },
    {
        id: 4,
        title: 'Tecno E-commerce',
        category: 'Front-end',
        images: [
            projectECO1,
            projectECO2,
            projectECO3,
            projectECO4,
            projectECO5,
            projectECO6
        ],
        description: 'Catálogo de productos tecnológicos con filtrado avanzado y carrito de compras dinámico.',
        technologies: ['JavaScript', 'HTML', 'CSS'],
        demo: 'https://yeiimaccdev.github.io/E-commerce_Js/',
        github: 'https://github.com/yeiimaccdev/E-commerce_Js'
    }
];


const Modal = ({ project, onClose }) => {
    const [currentImg, setCurrentImg] = useState(0);

    if (!project) return null;

    const nextImg = () => setCurrentImg((prev) => (prev + 1) % project.images.length);
    const prevImg = () => setCurrentImg((prev) => (prev - 1 + project.images.length) % project.images.length);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>✕</button>

                <div className="carousel">
                    <img src={project.images[currentImg]} alt={`${project.title} screenshot`} />
                    {project.images.length > 1 && (
                        <>
                            <button className="carousel-btn carousel-btn-prev" onClick={prevImg}>‹</button>
                            <button className="carousel-btn carousel-btn-next" onClick={nextImg}>›</button>
                        </>
                    )}
                </div>

                <div className="modal-body">
                    <h2 className="about__title2">{project.title}</h2>
                    <div className="modal-tags">
                        {project.technologies.map(tech => <span key={tech} className="tag">{tech}</span>)}
                    </div>
                    <p style={{ lineHeight: 1.6, opacity: 0.9 }}>{project.description}</p>

                    <div className="modal-actions">
                        <a href={project.demo} target="_blank" rel="noreferrer" className="btn-link btn-primary">Ver Demo</a>
                        <a href={project.github} target="_blank" rel="noreferrer" className="btn-link btn-outline">Repositorio</a>
                    </div>
                </div>
            </div>
        </div>
    );
};


export const ProjectSection = () => {

    const [filter, setFilter] = useState('Todos');
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = filter === 'Todos'
        ? PROJECTS_DATA
        : PROJECTS_DATA.filter(p => p.category === filter);

    return (
        <>
            <section className="projects" id="workHistory">
                <div className="container">
                    <div className="projects__card">
                        <h2 className="about__title2">Proyectos</h2>

                        <nav className="projects__menu">
                            <ul className='projects__menu-list'>
                                {['Todos', 'Front-end', 'Back-end'].map(cat => (
                                    <li
                                        key={cat}
                                        className={`projects__menu-item ${filter === cat ? 'projects__menu-item-active' : ''}`}
                                        onClick={() => setFilter(cat)}
                                    >
                                        {cat}
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="projects__list">
                            {filteredProjects.map((project) => (
                                <div
                                    className="projects__item"
                                    key={project.id}
                                    onClick={() => setSelectedProject(project)}
                                >
                                    <div className="projects__item-img">
                                        <img src={project.images[0]} alt={project.title} />
                                    </div>
                                    <div className="projects__item-description">
                                        <p><strong>{project.title}</strong></p>
                                        <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>{project.category}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal */}
            {selectedProject && (
                <Modal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </>
    );
}


import './ProjectSection.css'

import projectLT from '../../assets/img/proyects/LTC1.png'
import projectSP1 from '../../assets/img/proyects/SP1.png'
import projectMS from '../../assets/img/proyects/MS1.png'
import projectECO from '../../assets/img/proyects/ECO1.png'

export const ProjectSection = () => {
    return (
        <section className="projects section-100vh" id="workHistory">
            <div className="projects__data container">
                <div className="projects__card">
                    <h2 className="about__title2">Proyectos</h2>

                    <nav className="projects__menu">
                        <ul className='projects__menu-list'>
                            <li className='projects__menu-item projects__menu-item-active'>Todos</li>
                            <li className='projects__menu-item'>Front-end</li>
                            <li className='projects__menu-item'>Back-end</li>
                        </ul>
                    </nav>

                    <div className="projects__list">
                        <div className="projects__item">
                            <div className="projects__item-img">
                                <img src={projectLT} />
                            </div>
                            <hr />
                            <div className="projects__item-description">
                                <p><strong>Lifetime Capital - Financial Group</strong></p>
                            </div>
                        </div>

                        <div className="projects__item">
                            <div className="projects__item-img">
                                <img src={projectMS} />
                            </div>
                            <hr />
                            <div className="projects__item-description">
                                <p><strong>Moda Sport</strong></p>
                            </div>
                        </div>
                        <div className="projects__item">
                            <div className="projects__item-img">
                                <img src={projectSP1} />
                            </div>
                            <hr />
                            <div className="projects__item-description">
                                <p><strong>ShoesPlay</strong></p>
                            </div>
                        </div>
                        <div className="projects__item">
                            <div className="projects__item-img">
                                <img src={projectECO} />
                            </div>
                            <hr />
                            <div className="projects__item-description">
                                <p><strong>Moda Sport</strong></p>
                            </div>
                        </div>
                    </div>




                </div>

            </div>
        </section>
    )
}

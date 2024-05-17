
import './ProjectSection.css'

import projectLT from '../../assets/img/proyects/LTC1.png'
import projectMS from '../../assets/img/proyects/MS1.png'
import projectSP1 from '../../assets/img/proyects/SP1.png'
import projectECO from '../../assets/img/proyects/ECO1.png'

const poyects = [
    {
        title: 'Lifetime Capital - Financial Group',
        images: [projectLT],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        tecnologies: ['HTML', 'CSS', 'React.js', 'Bootstrap'],
        demo: 'https://lifetimecapital.com',
        github: 'https://github.com/joswald123/Lifetimews'
    },
    {
        title: 'Moda Sport',
        images: [projectMS],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        tecnologies: ['HTML', 'CSS', 'Bootstrap', 'React.js', 'Node.js',],
        demo: 'yeiimaccdev.github.io/ModaSport/',
        github: 'https://github.com/YeiiMaccDev/ModaSport'
    },
    {
        title: 'ShoesPlay',
        images: [projectSP1],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        tecnologies: ['HTML', 'CSS', 'Material UI', 'React.js', 'Node.js',],
        demo: 'yeiimaccdev.github.io/ModaSport/',
        github: 'https://github.com/YeiiMaccDev/ShoesPlay'
    },
    {
        title: 'Tecno',
        images: [projectECO],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        tecnologies: ['HTML', 'CSS', 'React.js', 'Node.js',],
        demo: 'yeiimaccdev.github.io/E-commerce_Js/',
        github: 'https://yeiimaccdev.github.io/E-commerce_Js/'
    }
]

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

                        {
                            poyects.map(({ title, images }) => (
                                <div className="projects__item" key={title}>
                                    <div className="projects__item-img">
                                        <img src={images[0]} />
                                    </div>
                                    <hr />
                                    <div className="projects__item-description">
                                        <p><strong>{title}</strong></p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                </div>

            </div>
        </section>
    )
}

import './AboutMeSection.css'
import profileImg2 from '../../assets/img/perfil2.png'

export const AboutMeSection = () => {
    return (
        <section className="about-me section-100vh menu-section" id="aboutme">
            <div className="about-me__data container">
                <div className="about-me__avatar">
                    <img className="about-me__img" src={profileImg2} alt="" />
                </div>
                <div className="about-me__card">
                    <h2 className="about__title2">Sobre mí ... </h2>
                    <p className="about__description">
                        Apasionado por el aprendizaje, la tecnología y el mundo del desarrollo de software. Desarrollo
                        de aplicaciones web o aplicaciones móviles.
                    </p>
                    <p className="about__description">
                        Analítico, comunicativo, empático, con iniciativa y perseverante.
                    </p>
                    <p className="about__description">
                        Me gusta aprender nuevas tecnologías y siempre estoy haciendo proyectos para mejorar mis
                        habilidades.
                    </p>
                    <p className="about__description">
                        Utilizo tecnologías web como HTML, CSS, JavaScript, React y Next.js para Front-end. Además
                        Node.js y Java
                        para back-end.
                    </p>

                    <div className="about-me__btns">
                        <a className="btn about-me__btn-contact" href="#contact" role="button"> Contáctame </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

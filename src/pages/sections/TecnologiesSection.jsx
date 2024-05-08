import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaviconPage } from '../../components/FaviconPage';
import './TecnologiesSection.css';
import { faBootstrap, faCss3, faGit, faGithub, faHtml5, faJava, faJs, faNode, faReact, faSass } from '@fortawesome/free-brands-svg-icons';

export const TecnologiesSection = () => {
    return (
        <section className="skills section-50vh" id="tecnologias">
            <div className="skills__datos container">
                <h2 className="sobre__title2  text-strong-color">Tecnologías</h2>
                <div className="skills__list">
                    <div className="skills__logos skills__html">
                        <FontAwesomeIcon icon={faHtml5} className="skills__logos__i  fa-4x" />
                        <strong className="skills__iconos__nombre">HTML </strong>
                    </div>
                    <div className="skills__logos skills__css">
                        <FontAwesomeIcon icon={faCss3} className="skills__logos__i  fa-4x" />
                        <strong className="skills__iconos__nombre">CSS </strong>
                    </div>
                    <div className="skills__logos skills__javascript">
                        <FontAwesomeIcon icon={faJs} className="skills__logos__i  fa-4x" />
                        <strong className="skills__iconos__nombre">JavaScript </strong>
                    </div>
                    <div className="skills__logos skills__react">
                        <FontAwesomeIcon icon={faReact} className="skills__logos__i  fa-4x" />
                        <strong className="skills__iconos__nombre">React.js </strong>
                    </div>
                    <div className="skills__logos skills__node">
                        <FontAwesomeIcon icon={faNode} className="skills__logos__i  fa-4x" />
                        <strong className="skills__iconos__nombre">Node.js </strong>
                    </div>
                    <div className="skills__logos skills__java">
                        <FontAwesomeIcon icon={faJava} className="skills__logos__i  fa-4x" />
                        <strong className="skills__iconos__nombre">Java </strong>
                    </div>
                    <div className="skills__logos skills__bootstrap">
                        <FontAwesomeIcon icon={faBootstrap} className="skills__logos__i  fa-4x" />
                        <strong className="skills__iconos__nombre">Bootstrap </strong>
                    </div>
                    <div className="skills__logos skills__sass">
                        <FontAwesomeIcon icon={faSass} className="skills__logos__i  fa-4x" />
                        <strong className="skills__iconos__nombre">Sass </strong>
                    </div>
                    <div className="skills__logos skills__git">
                        <FontAwesomeIcon icon={faGit} className="skills__logos__i fa-4x" />
                        <strong className="skills__iconos__nombre">Git </strong>
                    </div>
                    <div className="skills__logos skills__github">
                        <FontAwesomeIcon icon={faGithub} className="skills__logos__i fa-4x" />
                        <strong className="skills__iconos__nombre">GitHub </strong>
                    </div>

                </div>
            </div>
        </section>
    )
}

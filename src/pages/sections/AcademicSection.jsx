import './AcademicSection.css'

import logoSena from '../../assets/img/academic/logo-sena.png'
import logoONE from '../../assets/img/academic/logo-one-alura.png'
import logoFUC from '../../assets/img/academic/logoFUC.png'

export const AcademicSection = () => {
    return (
        <section className="academic section-100vh  menu-section" id="academic">
            <div className="academic__data container">
                <h2 className="academic__title">Formación académica</h2>
                <div className="academic__list">
                    <div className="academic__card">

                        <div className="academic__circulom2 academic__circulo-alura"></div>
                        <div className="academic__circulom2 academic__circulo-aluraTop"></div>
                        <div className="academic__circulo academic__circulo-aluraBottom"></div>

                        <img src={logoONE} className="academic__img academic__alura"
                            alt="" />
                        <div className="academic__descripcion">
                            <strong className="academic__icons__dates">2022 - 2023</strong>
                        </div>

                    </div>
                    <div className="academic__card">

                        <div className="academic__circulo academic__circulo-misiontic"></div>

                        <img src={logoFUC} className="academic__img academic__misiontic"
                            alt="" />
                        <div className="academic__descripcion">
                            <strong className="academic__icons__dates academic__actual">2022 - Actual ( 7 semestre )</strong>
                        </div>
                    </div>
                    <div className="academic__card">

                        <div className="academic__circulom2 academic__circulo-sena"></div>
                        <div className="academic__circulo academic__circulo-senaTop"></div>
                        <div className="academic__circulom2 academic__circulo-senaBottom"></div>

                        <img src={logoSena} className="academic__img academic__sena" alt="" />
                        <div className="academic__descripcion">
                            <strong className="academic__icons__dates">2019 - 2021</strong>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

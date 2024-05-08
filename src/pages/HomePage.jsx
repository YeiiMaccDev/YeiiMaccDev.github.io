import { Header } from "../components/Header"
import { AboutMeSection } from "./sections/AboutMeSection"
import { AboutSection } from "./sections/AboutSection"

export const HomePage = () => {
    return (
        <>
            <Header />
            <AboutSection />
            <AboutMeSection />
            <section style={{ minHeight: '100vh' }} id="tecnologias"> tecnologias </section>
            <section style={{ minHeight: '100vh' }} id="proyectos"> proyectos </section>
            <section style={{ minHeight: '100vh' }} id="formacion"> formacion</section>
            <section style={{ minHeight: '100vh' }} id="contacto"> contacto</section>
        </>
    )
}

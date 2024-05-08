import { Header } from "../components/Header"
import { AboutMeSection } from "./sections/AboutMeSection"
import { AboutSection } from "./sections/AboutSection"
import { TecnologiesSection } from "./sections/TecnologiesSection"

export const HomePage = () => {
    return (
        <>
            <Header />
            <AboutSection />
            <AboutMeSection />
            <TecnologiesSection />
            <section style={{ minHeight: '100vh' }} id="proyectos"> proyectos </section>
            <section style={{ minHeight: '100vh' }} id="formacion"> formacion</section>
            <section style={{ minHeight: '100vh' }} id="contacto"> contacto</section>
        </>
    )
}

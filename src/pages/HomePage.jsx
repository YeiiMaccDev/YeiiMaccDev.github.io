import { Header } from "../components/Header"
import { AboutMeSection } from "./sections/AboutMeSection"
import { AboutSection } from "./sections/AboutSection"
import { AcademicDescriptionSection } from "./sections/AcademicDescriptionSection"
import { AcademicSection } from "./sections/AcademicSection"
import { ContactSection } from "./sections/ContactSection"
import { TecnologiesSection } from "./sections/TecnologiesSection"

export const HomePage = () => {
    return (
        <>
            <Header />
            <AboutSection />
            <AboutMeSection />
            <TecnologiesSection />
            <section className=" menu-section" style={{ minHeight: '100vh' }} id="proyectos"> proyectos </section>
            <section style={{ minHeight: '100vh' }} id="proyectos"> proyectos </section>
            <section style={{ minHeight: '100vh' }} id="proyectos"> proyectos </section>
            <AcademicSection />
            <AcademicDescriptionSection />
            <ContactSection />
        </>
    )
}

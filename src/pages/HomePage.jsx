import { Header } from "../components/Header"
import { AboutMeSection } from "./sections/AboutMeSection"
import { AboutSection } from "./sections/AboutSection"
import { AcademicDescriptionSection } from "./sections/AcademicDescriptionSection"
import { AcademicSection } from "./sections/AcademicSection"
import { ContactSection } from "./sections/ContactSection"
import { ProjectSection } from "./sections/ProjectSection"
import { TecnologiesSection } from "./sections/TecnologiesSection"
import { WorkHistorySection } from "./sections/WorkHistorySection"

export const HomePage = () => {
    return (
        <>
            <Header />
            <AboutSection />
            <AboutMeSection />
            <TecnologiesSection />
            <WorkHistorySection />
            <ProjectSection />
            <AcademicSection />
            <AcademicDescriptionSection />
            <ContactSection />
        </>
    )
}

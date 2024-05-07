import { Header } from "./components/Header"
import { Theme } from "./components/Theme"

export const App = () => {
  console.log("App")
  return (
    <>
      <Header />
      <Theme />
      <section style={{ minHeight: '100vh' }} id="Home"> inicio </section>
      <section style={{ minHeight: '100vh' }} id="sobre-mi"> sobre-mi </section>
      <section style={{ minHeight: '100vh' }} id="tecnologias"> tecnologias </section>
      <section style={{ minHeight: '100vh' }} id="proyectos"> proyectos </section>
      <section style={{ minHeight: '100vh' }} id="formacion"> formacion</section>
      <section style={{ minHeight: '100vh' }} id="contacto"> contacto</section>
    </>
  )
}

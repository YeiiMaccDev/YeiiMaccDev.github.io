import { FaviconPage } from "./components/FaviconPage"
import { Header } from "./components/Header"
import { Theme } from "./components/Theme"
import { HomePage } from "./pages/HomePage"

export const App = () => {
  console.log("App")
  return (
    <>
      <FaviconPage />
      <HomePage />
    </>
  )
}

import { Navbar } from "./components/Navbar"
import { Header } from "./components/Header"
import { Projects } from "./components/Projects"
import { Experiences } from "./components/Experiences"
import { Contact } from "./components/Contact"

function App() {
  return (
    <>
      <Navbar/>
      <Header />
      <Projects />
      <Experiences />
      <Contact />
    </>
  )
}

export default App

import "./App.css"
import About from "./components/About"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Home from "./components/Home"
import Navbar from "./components/Navbar"


const App = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <About/>
        <Home/>
        <Footer/>
    </>
  )
}

export default App
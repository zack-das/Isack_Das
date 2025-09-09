import Navbar from './components/Navbar/Navbar'; 
import Hero from './sections/Hero/Hero';
import About from  './sections/About/About';
import Skils from './sections/Skills/Skils';
import Projects from './sections/Projects/Projects';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Skils/>
    <Projects/>
    <Footer/>
    </>
  );
   
}

export default App;

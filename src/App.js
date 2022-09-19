// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import TechStack from './Components/TechStack';
import Projects from './Components/Projects';
import Contact from './Components/Contact'
import Skills from './Components/Skills'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <TechStack/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;

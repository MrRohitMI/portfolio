// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import TechStack from './Components/TechStack';
import Projects from './Components/Projects';
import Contact from './Components/Contact'
import Skills from './Components/Skills'
import Statistics from './Components/Statistics/Statistics';
import Calendar from './Components/Calender';
import GitStatistics from './Components/GitStatistics';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <TechStack/>
      <Skills/>
      <Projects/>
      <Statistics/>
      <Calendar/>
      <Contact/>
    </div>
  );
}

export default App;

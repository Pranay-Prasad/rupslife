import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Facts from './components/Facts';
import Objectives from './components/Objectives';
import Vision from './components/Vision';
import Footer from './components/Footer';
function App() {
  return (
    <div className='Main'>
      <div className="wrapper">
        <Navbar/>
        <Hero/>
        <Facts/>
        <Objectives/>
        <Vision/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

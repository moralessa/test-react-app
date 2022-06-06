import './styles/App.css';
import Hero from './HeroSection';
import Footer from './FooterSection';
import Services from './ServicesSection';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default App;

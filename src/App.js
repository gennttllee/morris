import NavBar from './components/NavBar';
import Section1 from './components/Section1'
import Section2 from './components/section2'
import Section3 from './components/Section3';
import Section4 from './components/Sectiion4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Section7 from './components/Section7';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section5 />
      <Section6 />
      <Section4 />
      <Section7 />
      <Footer />
    </div>
  );
}

export default App;

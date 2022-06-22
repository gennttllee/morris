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
import { useState } from 'react';
import video from '../src/assets/morrisvideo.mp4'


function App() {
  const [vid, setVid] = useState(true)

  setTimeout(() => {
    setVid(false)
  }, 10000 );

  return (
    <div className="app">
      {vid ? <div className='video'>
        <video autoPlay muted width='100%' height='100%'>
          <source src={video} type="video/mp4" />
        </video>
      </div> : <div className='animator'>
        <NavBar />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section5 />
        <Section6 />
        <Section4 />
        <Section7 />
        <Footer />
      </div>}
    </div>
  );
}

export default App;

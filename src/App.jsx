// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Softskills from './components/Softskills'
import Technologies from './components/Technologies';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full'>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      
      <div className='container mx-auto px-8'>
      <Navbar />
      <Hero/>
      <About/>
      <Skills/>
      <Softskills/>
      <Technologies/>
      <Experiences/>
      <Education/>
      <Projects/>
      <Contact/>
      </div>
     
    </div>
  );
  
}

export default App;
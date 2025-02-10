import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <ParallaxProvider>
      <div className="relative text-white min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
        {/* Particle Background */}
        <ParticleBackground />
        
        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <main className="snap-y snap-mandatory h-screen overflow-y-scroll">
            <section className="snap-start min-h-screen"><Hero /></section>
            <section className="snap-start min-h-screen"><About /></section>
            <section className="snap-start min-h-screen"><Projects /></section>
            <section className="snap-start min-h-screen"><Skills /></section>
            
            <section className="snap-start min-h-screen"><Education /></section>
            <section className="snap-start min-h-screen"><Contact /></section>
          </main>
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default App;
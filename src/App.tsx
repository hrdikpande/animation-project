import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-glow';
    document.body.appendChild(cursor);

    const updateCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', updateCursor);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <>
      <div className="parallax-bg" />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-neon-blue origin-left z-50"
        style={{ scaleX }}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
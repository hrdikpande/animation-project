import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  const mascotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!mascotRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = mascotRef.current.getBoundingClientRect();
      
      const x = (clientX - left - width / 2) / 25;
      const y = (clientY - top - height / 2) / 25;
      
      mascotRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden" id="home">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809')] bg-cover bg-center opacity-20" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-text">
              Bringing Dreams to Life
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              We create magical animations and designs that capture children's imagination
              and bring stories to life.
            </p>
            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-3 rounded-full bg-neon-purple text-white neon-glow font-semibold"
              >
                Explore Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-3 rounded-full border-2 border-neon-blue text-white hover:bg-neon-blue/20 transition-colors"
              >
                Get a Quote
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            ref={mascotRef}
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088"
              alt="3D Mascot"
              className="w-full max-w-md mx-auto rounded-2xl neon-glow"
            />
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-8 -right-8"
            >
              <Sparkles className="w-16 h-16 text-neon-blue" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, Palette, Book, Video, MessageSquare, Lightbulb } from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Play,
      title: '2D Animation',
      description: 'Bringing characters to life with fluid motion and expressive animation.',
    },
    {
      icon: Video,
      title: '3D Animation',
      description: 'Creating immersive worlds and characters with cutting-edge 3D technology.',
    },
    {
      icon: Palette,
      title: 'Character Design',
      description: 'Designing memorable characters that connect with young audiences.',
    },
    {
      icon: Book,
      title: 'Storyboarding',
      description: 'Crafting compelling visual narratives that engage and inspire.',
    },
    {
      icon: MessageSquare,
      title: 'Educational Content',
      description: 'Developing educational animations that make learning fun and engaging.',
    },
    {
      icon: Lightbulb,
      title: 'Creative Direction',
      description: 'Guiding projects from concept to completion with expert vision.',
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 neon-text">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer a comprehensive range of animation and design services to bring your
            ideas to life and create engaging content for young audiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect p-8 rounded-2xl hover-card group"
              >
                <div className="mb-6 relative">
                  <div className="w-16 h-16 rounded-full bg-neon-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-neon-purple" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold mb-8 neon-text">Ready to Start Your Project?</h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-4 rounded-full bg-neon-purple text-white neon-glow font-semibold text-lg"
          >
            Get a Free Quote
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
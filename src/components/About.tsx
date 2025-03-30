import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, Users, Trophy, Sparkles } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Clock, value: '10+', label: 'Years Experience' },
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Trophy, value: '150+', label: 'Awards Won' },
    { icon: Sparkles, value: '1000+', label: 'Projects Completed' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 neon-text">Our Journey</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Since 2014, we've been crafting magical animations and designs that capture
            children's imaginations. Our passion lies in bringing stories to life through
            creative animation and innovative design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-2xl text-center hover-card"
              >
                <Icon className="w-12 h-12 text-neon-blue mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2 neon-text">{stat.value}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-6">Meet Our Creative Team</h3>
            <p className="text-gray-300 mb-6">
              Our diverse team of animators, designers, and storytellers brings together
              years of experience in children's entertainment. We're passionate about
              creating content that educates, entertains, and inspires young minds.
            </p>
            <ul className="space-y-4">
              {[
                'Expert 2D & 3D Animators',
                'Character Designers',
                'Storyboard Artists',
                'Educational Content Specialists',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <Sparkles className="w-5 h-5 text-neon-purple" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Creative Team"
              className="rounded-2xl neon-glow"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
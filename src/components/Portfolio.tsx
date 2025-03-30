import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, Eye } from 'lucide-react';

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', '2D Animation', '3D Animation', 'Character Design', 'Educational'];

  const projects = [
    {
      title: 'Adventure Time',
      category: '2D Animation',
      image: 'https://images.unsplash.com/photo-1633354931133-27c285de18c6',
      description: 'A magical journey through enchanted forests.',
    },
    {
      title: 'Space Explorers',
      category: '3D Animation',
      image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401',
      description: 'Educational series about space exploration.',
    },
    {
      title: 'Friendly Monsters',
      category: 'Character Design',
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088',
      description: "Character designs for a children's book series.",
    },
    {
      title: 'Math Adventures',
      category: 'Educational',
      image: 'https://images.unsplash.com/photo-1632571401005-458e9d244591',
      description: 'Making mathematics fun through animation.',
    },
    {
      title: 'Ocean Friends',
      category: '3D Animation',
      image: 'https://images.unsplash.com/photo-1582845512747-e42001c95638',
      description: 'Underwater adventure series.',
    },
    {
      title: 'Forest Tales',
      category: '2D Animation',
      image: 'https://images.unsplash.com/photo-1560942485-b2a11cc13456',
      description: 'Stories about forest animals and nature.',
    },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 neon-text">Our Work</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Explore our portfolio of creative animations and designs that have
            captivated young audiences and brought stories to life.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeFilter === filter
                    ? 'bg-neon-purple text-white neon-glow'
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex space-x-4">
                    <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-neon-purple/80 hover:bg-neon-purple transition-colors">
                      <Play className="w-4 h-4" />
                      <span>Play Demo</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                      <Eye className="w-4 h-4" />
                      <span>View Details</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
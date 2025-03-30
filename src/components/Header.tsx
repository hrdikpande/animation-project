import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Star } from 'lucide-react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Portfolio', to: 'portfolio' },
    { name: 'Blog', to: 'blog' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Star className="h-8 w-8 text-neon-blue" />
            <span className="text-2xl font-bold neon-text">AnimateKids</span>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className="hover:text-neon-blue transition-colors cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-2 rounded-full bg-neon-purple text-white neon-glow"
            >
              Get a Quote
            </motion.button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-neon-blue" />
            ) : (
              <Menu className="h-6 w-6 text-neon-blue" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0,
        }}
        className="md:hidden glass-effect"
      >
        <div className="container mx-auto px-4 py-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              className="block py-2 hover:text-neon-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full mt-4 px-6 py-2 rounded-full bg-neon-purple text-white neon-glow"
          >
            Get a Quote
          </motion.button>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
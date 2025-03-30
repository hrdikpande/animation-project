import React from 'react';
import { motion } from 'framer-motion';
import { Star, Facebook, Twitter, Instagram, Youtube, Send } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Portfolio', to: 'portfolio' },
    { name: 'Blog', to: 'blog' },
    { name: 'Contact', to: 'contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Youtube, href: '#' },
  ];

  return (
    <footer className="relative pt-20 pb-6">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 neon-text">
            Ready to bring your ideas to life with animation?
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-4 rounded-full bg-neon-purple text-white neon-glow font-semibold text-lg"
          >
            Get a Free Quote
          </motion.button>
        </div>

        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Star className="h-8 w-8 text-neon-blue" />
              <span className="text-2xl font-bold neon-text">AnimateKids</span>
            </div>
            <p className="text-gray-300 mb-6">
              Creating magical animations and designs that capture children's imagination
              and bring stories to life.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-neon-blue/20 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="text-gray-300 hover:text-neon-blue transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-4">
              {[
                '2D Animation',
                '3D Animation',
                'Character Design',
                'Storyboarding',
                'Educational Content',
                'Creative Direction',
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-full bg-white/10 border border-white/20 focus:border-neon-blue focus:outline-none pr-12"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-neon-purple flex items-center justify-center">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2025 AnimateKids. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 neon-text">Get in Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? We'd love to hear from you and discuss
            how we can help create amazing animations for your project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-neon-purple/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-neon-purple" />
                  </div>
                  <div>
                    <p className="text-gray-300">Email</p>
                    <p className="font-semibold">hello@animatekids.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-neon-blue/20 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-neon-blue" />
                  </div>
                  <div>
                    <p className="text-gray-300">Phone</p>
                    <p className="font-semibold">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-neon-pink/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-neon-pink" />
                  </div>
                  <div>
                    <p className="text-gray-300">Location</p>
                    <p className="font-semibold">Los Angeles, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form className="glass-effect p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-neon-blue focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-neon-blue focus:outline-none"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-neon-blue focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-neon-blue focus:outline-none"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full px-8 py-3 rounded-full bg-neon-purple text-white neon-glow font-semibold flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
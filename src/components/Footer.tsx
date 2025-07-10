import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <a href="#home" className="text-2xl font-bold text-indigo-400">
              <span className="text-3xl mr-1">Rahul</span><span className="text-white">{personalInfo.name.split(' ')[1]}</span>
            </a>
            <p className="text-gray-400 mt-2 max-w-md">
              Full Stack Developer with expertise in Java and React, building responsive and efficient web applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-4"
          >
            <a
              href={`https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/raaj-rahul"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              © {currentYear} {personalInfo.name}. All rights reserved.
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex space-x-6 text-sm text-gray-400"
            >
              <a href="#home" className="hover:text-indigo-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
              <a href="#experience" className="hover:text-indigo-400 transition-colors">Experience</a>
              <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
              <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg transition-colors z-10"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
}

import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center py-20 bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4">
                Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">{personalInfo.name.split(' ')[0]}</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
                {personalInfo.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
                {personalInfo.summary}
              </p>
              
              <div className="flex space-x-4 mb-8">
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <Mail size={18} />
                  Contact Me
                </motion.a>
                <motion.a
                  href="#about"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 border border-indigo-600 dark:border-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <ArrowDown size={18} />
                  Learn More
                </motion.a>
              </div>
              
              <div className="flex space-x-4">
                <motion.a
                  href={`https://${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="https://github.com/raaj-rahul"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </motion.div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-indigo-600 dark:bg-indigo-500 bg-opacity-10 dark:bg-opacity-20 flex items-center justify-center overflow-hidden shadow-xl">
                <img 
                  src="https://mocha-cdn.com/0197e2fd-d60a-701f-85c6-deb73a969e20/Me.jpg" 
                  alt="Rahul Raj" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 w-full py-3 bg-indigo-600 dark:bg-indigo-500 text-white text-center">
                  Full Stack Developer
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 dark:bg-yellow-500 rounded-lg flex items-center justify-center transform rotate-12 shadow-lg">
                <span className="font-bold text-gray-800 dark:text-gray-900">Java</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-400 dark:bg-blue-500 rounded-lg flex items-center justify-center transform -rotate-12 shadow-lg">
                <span className="font-bold text-gray-800 dark:text-gray-900">React</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

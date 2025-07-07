import { motion } from 'framer-motion';
import { education, certifications } from '../data/portfolioData';
import { Award, Book, CircleCheck, GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Education & Certifications</h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:w-1/2"
          >
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <GraduationCap className="mr-4 text-indigo-600 dark:text-indigo-400" size={32} />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Education</h3>
              </div>

              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="mb-8 border-l-4 border-indigo-600 dark:border-indigo-400 pl-4"
                >
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white">{edu.degree}</h4>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium">{edu.institution}</p>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mt-1">
                    <Book size={16} className="mr-2" />
                    <span>{edu.duration}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">{edu.location}</p>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-6 mt-8"
              >
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Skills Developed During Education</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CircleCheck className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-600 dark:text-gray-300">Strong foundation in computer science principles</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-600 dark:text-gray-300">Software design and architecture patterns</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-600 dark:text-gray-300">Problem-solving and algorithmic thinking</span>
                  </li>
                  <li className="flex items-start">
                    <CircleCheck className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-600 dark:text-gray-300">Team collaboration through group projects</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:w-1/2"
          >
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Award className="mr-4 text-indigo-600 dark:text-indigo-400" size={32} />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Certifications</h3>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-indigo-600 dark:border-indigo-400"
                  >
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{cert.title}</h4>
                    {cert.issuer && <p className="text-gray-600 dark:text-gray-400">{cert.issuer}</p>}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 rounded-lg p-6 text-white"
              >
                <h4 className="text-lg font-semibold mb-3">Continuous Learning</h4>
                <p className="mb-4">
                  I'm committed to lifelong learning and regularly update my skills through online courses, workshops, and self-directed projects.
                </p>
                <div className="flex justify-end">
                  <motion.a
                    href="https://www.linkedin.com/in/rahul-raj14"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    View on LinkedIn
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

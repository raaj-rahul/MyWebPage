import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Award, Calendar, Code, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:w-1/3"
          >
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 p-1 rounded-xl shadow-xl">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 rounded-full bg-indigo-100 dark:bg-indigo-900 mx-auto overflow-hidden border-4 border-indigo-200 dark:border-indigo-700">
                    <img 
                      src="https://mocha-cdn.com/0197e2fd-d60a-701f-85c6-deb73a969e20/Me.jpg" 
                      alt="Rahul Raj" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-gray-800 dark:text-white">{personalInfo.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{personalInfo.title}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-indigo-600 dark:text-indigo-400" size={18} />
                    <span className="text-gray-600 dark:text-gray-300">{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="text-indigo-600 dark:text-indigo-400" size={18} />
                    <span className="text-gray-600 dark:text-gray-300">Available for opportunities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="text-indigo-600 dark:text-indigo-400" size={18} />
                    <span className="text-gray-600 dark:text-gray-300">3+ years coding experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code className="text-indigo-600 dark:text-indigo-400" size={18} />
                    <span className="text-gray-600 dark:text-gray-300">Java & React Specialist</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:w-2/3"
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg h-full">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Professional Profile</h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I'm a passionate Full Stack Developer with expertise in Java and React. Based in Bengaluru, 
                I bring a blend of technical knowledge and problem-solving abilities to create efficient, 
                scalable applications. My journey in technology is driven by continuous learning and 
                applying programming principles to real-world challenges.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                With experience across multiple internships and projects, I've developed a strong foundation 
                in both front-end and back-end technologies. I specialize in building responsive web applications 
                and designing database architectures that meet business requirements while ensuring optimal performance.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                My technical toolkit includes Java, JavaScript, React, SQL, and various frameworks and tools 
                that enable me to deliver complete, user-friendly applications. I'm constantly exploring new 
                technologies and methodologies to enhance my skills and stay current with industry trends.
              </p>
              
              <div className="mt-8">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Get In Touch
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

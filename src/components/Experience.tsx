import { motion } from 'framer-motion';
import { experience } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Work Experience</h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] top-0 bottom-0 w-1 bg-indigo-200 dark:bg-indigo-900"></div>

          <div className="space-y-12">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="md:w-1/2"></div>
                
                <div className="absolute left-[-10px] md:left-1/2 transform md:translate-x-[-50%] w-6 h-6 rounded-full bg-indigo-600 dark:bg-indigo-400 border-4 border-white dark:border-gray-800 z-10"></div>
                
                <div className={`md:w-1/2 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 ml-6 md:ml-0 
                  ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}
                >
                  <div className="flex items-center mb-3">
                    <Briefcase className="mr-2 text-indigo-600 dark:text-indigo-400" size={20} />
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{job.role}</h3>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2">{job.company}</h4>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      <span>{job.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                  
                  {typeof job.description === 'string' ? (
                    <p className="text-gray-600 dark:text-gray-400">{job.description}</p>
                  ) : (
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                      {job.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

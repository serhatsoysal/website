import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FiExternalLink, FiGithub, FiStar } from 'react-icons/fi';
import { projects } from '../data/projects';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Projects | Serhat Soysal</title>
        <meta name="description" content="Explore my portfolio of software projects including web applications, cloud solutions, and open-source contributions." />
      </Helmet>
      
      <div className="min-h-screen pt-16">
        {/* Hero Section with Background */}
        <section className="relative py-20 bg-gradient-to-br from-primary-50 via-blue-50 to-indigo-100 dark:from-dark-900 dark:via-dark-800 dark:to-dark-700">
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-primary-200/20 to-blue-300/10 rounded-full blur-3xl"
            />
          </div>
          
          <div className="container-max relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                My Projects
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A collection of applications and solutions I've built using modern technologies
              </p>
            </motion.div>
          </div>
        </section>
        
        <section className="section-padding">
          <div className="container-max">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center mb-12"
            >
              <div className="bg-white dark:bg-dark-800 rounded-lg p-1 shadow-lg">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
                    filter === 'all'
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:text-primary-600'
                  }`}
                >
                  All Projects
                </button>
                <button
                  onClick={() => setFilter('featured')}
                  className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
                    filter === 'featured'
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:text-primary-600'
                  }`}
                >
                  Featured
                </button>
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid lg:grid-cols-2 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white dark:bg-dark-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-br from-primary-500 to-blue-600 flex items-center justify-center">
                      <div className="text-white text-center">
                        <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                        <p className="text-primary-100">Project Preview</p>
                      </div>
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <FiStar className="w-3 h-3" />
                        Featured
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                        >
                          <FiExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                      >
                        <FiGithub className="w-4 h-4" />
                        GitHub
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mt-20 bg-gray-50 dark:bg-dark-800 rounded-2xl p-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Interested in Working Together?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to collaborate.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/contact" className="btn-primary">
                  Start a Project
                </a>
                <a 
                  href="https://github.com/serhatsoysal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <FiGithub className="w-4 h-4" />
                  View GitHub
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects; 
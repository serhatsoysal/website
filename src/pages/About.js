import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  SiSpring, 
  SiPython, 
  SiReact, 
  SiOpenai, 
  SiDocker, 
  SiKubernetes,
  SiPostgresql,
  SiRedis,
  SiAmazonaws,
  SiGit,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiCplusplus
} from 'react-icons/si';

const About = () => {
  const techStack = [
    { name: 'Java', icon: SiCplusplus, color: 'text-orange-500' },
    { name: 'Spring Boot', icon: SiSpring, color: 'text-green-500' },
    { name: 'Python', icon: SiPython, color: 'text-blue-500' },
    { name: 'React', icon: SiReact, color: 'text-blue-400' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
    { name: 'OpenAI', icon: SiOpenai, color: 'text-gray-800 dark:text-gray-200' },
    { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
    { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-600' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-700' },
    { name: 'Redis', icon: SiRedis, color: 'text-red-500' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
    { name: 'AWS', icon: SiAmazonaws, color: 'text-orange-400' },
    { name: 'Git', icon: SiGit, color: 'text-red-500' }
  ];

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
        <title>About | Serhat Soysal</title>
        <meta name="description" content="Learn more about Serhat Soysal, a passionate software engineer specializing in full-stack development and cloud technologies." />
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
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-primary-200/20 to-blue-300/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                rotate: [360, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-indigo-200/20 to-primary-300/10 rounded-full blur-3xl"
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
                About Me
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Passionate about building scalable solutions and exploring emerging technologies
              </p>
            </motion.div>
          </div>
        </section>
        
        <section className="section-padding">
          <div className="container-max">

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-gradient-to-br from-primary-500 to-blue-600 rounded-2xl p-8 text-white">
                  <h2 className="text-2xl font-bold mb-4">Hello, I'm Serhat!</h2>
                  <p className="text-lg mb-6">
                    I'm a passionate software engineer with a strong focus on building scalable, efficient, and 
                    user-friendly applications. My journey in software development has led me to specialize in 
                    full-stack development with expertise in cloud-native technologies.
                  </p>
                  <p className="text-lg mb-6">
                    I enjoy solving complex problems and turning ideas into robust software solutions. 
                    Whether it's architecting microservices, optimizing database performance, or creating 
                    intuitive user interfaces, I approach every project with attention to detail and a 
                    commitment to quality.
                  </p>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-center font-medium text-lg">
                      "I drink my coffee black and write my code clean."
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                <div className="bg-white dark:bg-dark-800 rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">🎯 What I Do</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Full-stack web application development</li>
                    <li>• Cloud-native architecture design</li>
                    <li>• Microservices implementation</li>
                    <li>• DevOps and CI/CD pipeline setup</li>
                    <li>• Performance optimization</li>
                    <li>• Technical consulting</li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-dark-800 rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">🚀 Current Focus</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• AI/ML integration in applications</li>
                    <li>• Kubernetes and container orchestration</li>
                    <li>• Modern React patterns and optimization</li>
                    <li>• Serverless architecture</li>
                    <li>• Open source contributions</li>
                  </ul>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Tech Stack
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Technologies and tools I work with to build amazing applications
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-20"
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  className="bg-white dark:bg-dark-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                >
                  <tech.icon className={`w-12 h-12 mx-auto mb-3 ${tech.color}`} />
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{tech.name}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center bg-gray-50 dark:bg-dark-800 rounded-2xl p-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Let's Work Together
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                I'm always interested in new opportunities and challenging projects. 
                Let's discuss how we can bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/contact" className="btn-primary">
                  Get in Touch
                </a>
                <a href="/projects" className="btn-secondary">
                  View My Work
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About; 
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  SiSpring, 
  SiDocker, 
  SiKubernetes,
  SiPostgresql,
  SiRedis,
  SiAmazonaws,
  SiGit,
  SiMongodb,
  SiOracle,
  SiApachekafka,
  SiElasticsearch,
  SiRabbitmq,
  SiTerraform,
  SiJenkins
} from 'react-icons/si';
import { FiAward, FiTrendingUp, FiUsers, FiCpu } from 'react-icons/fi';
import { useTranslation } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: FiTrendingUp, value: '5+', label: t('about.stats.experience') },
    { icon: FiUsers, value: '50+', label: t('about.stats.projects') },
    { icon: FiAward, value: '15+', label: t('about.stats.technologies') },
    { icon: FiCpu, value: '99.9%', label: t('about.stats.uptime') }
  ];

  const skills = [
    { 
      category: t('about.skills.backend.title'), 
      items: t('about.skills.backend.items'),
      color: 'from-orange-500 to-red-500'
    },
    { 
      category: t('about.skills.cloud.title'), 
      items: t('about.skills.cloud.items'),
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      category: t('about.skills.database.title'), 
      items: t('about.skills.database.items'),
      color: 'from-green-500 to-emerald-500'
    },
    { 
      category: t('about.skills.devops.title'), 
      items: t('about.skills.devops.items'),
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const techStack = [
    { name: 'Java', icon: SiOracle, color: 'text-red-600 dark:text-red-400' },
    { name: 'Spring Boot', icon: SiSpring, color: 'text-green-600 dark:text-green-400' },
    { name: 'Kafka', icon: SiApachekafka, color: 'text-gray-900 dark:text-white' },
    { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
    { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-600' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-700 dark:text-blue-400' },
    { name: 'Redis', icon: SiRedis, color: 'text-red-500' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
    { name: 'Elasticsearch', icon: SiElasticsearch, color: 'text-teal-600 dark:text-teal-400' },
    { name: 'RabbitMQ', icon: SiRabbitmq, color: 'text-orange-500' },
    { name: 'AWS', icon: SiAmazonaws, color: 'text-orange-400' },
    { name: 'Terraform', icon: SiTerraform, color: 'text-purple-600 dark:text-purple-400' },
    { name: 'Jenkins', icon: SiJenkins, color: 'text-red-600 dark:text-red-400' },
    { name: 'Git', icon: SiGit, color: 'text-red-500' }
  ];

  const experience = [
    {
      year: 'Jan 2025 - Present',
      title: t('about.experience.senior.title'),
      company: t('about.experience.senior.company'),
      description: t('about.experience.senior.description')
    },
    {
      year: 'Aug 2023 - Oct 2024',
      title: t('about.experience.backend.title'),
      company: t('about.experience.backend.company'),
      description: t('about.experience.backend.description')
    },
    {
      year: 'Mar 2022 - Aug 2023',
      title: t('about.experience.junior.title'),
      company: t('about.experience.junior.company'),
      description: t('about.experience.junior.description')
    },
    {
      year: 'Dec 2020 - Mar 2022',
      title: t('about.experience.mepsan.title'),
      company: t('about.experience.mepsan.company'),
      description: t('about.experience.mepsan.description')
    }
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
        <title>{t('about.meta.title')}</title>
        <meta name="description" content={t('about.meta.description')} />
      </Helmet>
      
      <div className="min-h-screen pt-16">
        <section className="relative py-20 bg-white dark:bg-background-dark overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-primary-500/10 to-blue-500/5 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                rotate: [360, 0],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-indigo-500/10 to-primary-500/5 rounded-full blur-3xl"
            />
          </div>
          
          <div className="container-max relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block mb-6 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full"
              >
                <span className="text-primary-600 dark:text-primary-400 font-semibold">{t('about.hero.badge')}</span>
              </motion.div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                {t('about.hero.title')}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t('about.hero.subtitle')}
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card p-6 text-center"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary-600 dark:text-primary-400" />
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        <section className="section-padding bg-gray-50 dark:bg-background-dark/50">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-blue-600 rounded-2xl transform rotate-3"></div>
                  <div className="relative bg-gradient-to-br from-primary-500 to-blue-600 rounded-2xl p-8 text-white">
                    <h2 className="text-3xl font-bold mb-4">{t('about.intro.greeting')}</h2>
                    <p className="text-lg mb-4 leading-relaxed">
                      {t('about.intro.paragraph1')}
                    </p>
                    <p className="text-lg mb-4 leading-relaxed">
                      {t('about.intro.paragraph2')}
                    </p>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <p className="text-center font-medium text-lg">
                        {t('about.intro.quote')}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="glass-card p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="text-2xl">🎯</span> {t('about.focus.whatIDo.title')}
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    {t('about.focus.whatIDo.items').map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start"
                      >
                        <span className="text-primary-500 mr-2">▸</span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="text-2xl">🚀</span> {t('about.focus.currentFocus.title')}
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    {t('about.focus.currentFocus.items').map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start"
                      >
                        <span className="text-primary-500 mr-2">▸</span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                  {t('about.skills.title')}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {t('about.skills.subtitle')}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.category}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-6 group"
                  >
                    <div className={`inline-block px-4 py-2 bg-gradient-to-r ${skill.color} text-white rounded-lg mb-4 text-sm font-semibold`}>
                      {skill.category}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors duration-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                  {t('about.experience.title')}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {t('about.experience.subtitle')}
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-blue-500"></div>
                
                <div className="space-y-8">
                  {experience.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className="relative pl-20"
                    >
                      <div className="absolute left-6 w-5 h-5 bg-primary-500 rounded-full border-4 border-white dark:border-background-dark"></div>
                      <div className="glass-card p-6 group hover:shadow-lg transition-shadow duration-300">
                        <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-semibold mb-3">
                          {exp.year}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                          {exp.company}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                  {t('about.techStack.title')}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {t('about.techStack.subtitle')}
                </p>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6"
              >
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    className="glass-card p-6 text-center group hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300"
                  >
                    <tech.icon className={`w-12 h-12 mx-auto mb-3 ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{tech.name}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center glass-card p-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                {t('about.cta.title')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                {t('about.cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/contact" className="btn-primary group">
                  {t('about.cta.contact')}
                  <FiTrendingUp className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/projects" className="btn-secondary group">
                  {t('about.cta.projects')}
                  <FiAward className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
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

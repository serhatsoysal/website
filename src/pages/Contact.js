import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiSend, FiMapPin, FiClock } from 'react-icons/fi';
import { useTranslation } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:serhatsoysalx@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/serhatsoysal',
      icon: FiGithub,
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/soysalserhat',
      icon: FiLinkedin,
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/serhatsoysalx',
      icon: FiTwitter,
      color: 'hover:text-blue-400 dark:hover:text-blue-300'
    }
  ];

  const contactInfo = [
    {
      icon: FiMail,
      label: t('contact.info.email'),
      value: 'serhatsoysalx@gmail.com',
      link: 'mailto:serhatsoysalx@gmail.com'
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Dubai, UAE',
      link: null
    },
    {
      icon: FiClock,
      label: 'Response Time',
      value: t('contact.info.response'),
      link: null
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact | Serhat Soysal</title>
        <meta name="description" content={t('contact.subtitle')} />
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
                duration: 40,
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
                duration: 35,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-tr from-indigo-500/10 to-primary-500/5 rounded-full blur-3xl"
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
                <span className="text-primary-600 dark:text-primary-400 font-semibold">{t('contact.info.connect')}</span>
              </motion.div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                {t('contact.title')}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t('contact.subtitle')}
              </p>
            </motion.div>
          </div>
        </section>
        
        <section className="section-padding bg-gray-50 dark:bg-background-dark/50">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="glass-card p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                    {t('contact.form.name')}
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          {t('contact.form.name')}
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder={t('contact.form.placeholder.name')}
                          className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-200 hover:border-primary-300 dark:hover:border-primary-600"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          {t('contact.form.email')}
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder={t('contact.form.placeholder.email')}
                          className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-200 hover:border-primary-300 dark:hover:border-primary-600"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t('contact.form.subject')}
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder={t('contact.form.placeholder.subject')}
                        className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-200 hover:border-primary-300 dark:hover:border-primary-600"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t('contact.form.message')}
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder={t('contact.form.placeholder.message')}
                        className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-200 hover:border-primary-300 dark:hover:border-primary-600 resize-none"
                      />
                    </div>
                    
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full btn-primary group"
                    >
                      <FiSend className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      {t('contact.form.send')}
                    </motion.button>
                  </form>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="glass-card p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                    {t('contact.info.title')}
                  </h2>
                  
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{info.label}</p>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-gray-900 dark:text-white font-medium">{info.value}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="glass-card p-8">
                  <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-primary-600 to-purple-400 rounded-full"></div>
                    {t('contact.info.social')}
                  </h3>
                  <div className="grid gap-4">
                    {socialLinks.map((link) => (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        className={`flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 ${link.color} transition-all duration-200 hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-600`}
                      >
                        <link.icon className="w-6 h-6" />
                        <span className="font-medium text-gray-900 dark:text-white">{link.name}</span>
                        <FiSend className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-primary-500 via-blue-500 to-indigo-600"
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 text-white">
                    <h3 className="text-xl font-bold mb-4">Quick Response</h3>
                    <p className="mb-4 leading-relaxed">
                      {t('contact.info.response')}
                    </p>
                    <p className="text-white/80 text-sm">
                      Looking forward to hearing from you!
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;

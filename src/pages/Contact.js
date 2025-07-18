import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiSend } from 'react-icons/fi';

const Contact = () => {
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
    const mailtoLink = `mailto:serhat@serhatsoysal.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
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
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/serhatsoysalx',
      icon: FiTwitter,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      url: 'mailto:serhatsoysalx@gmail.com',
      icon: FiMail,
      color: 'hover:text-red-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact | Serhat Soysal</title>
        <meta name="description" content="Get in touch with Serhat Soysal for project collaborations, consulting, or just to say hello." />
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
                duration: 40,
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
                Get In Touch
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Have a project in mind or just want to chat? I'd love to hear from you.
              </p>
            </motion.div>
          </div>
        </section>
        
        <section className="section-padding">
          <div className="container-max">

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                    Send a Message
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white transition-colors duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white transition-colors duration-200"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white transition-colors duration-200"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white transition-colors duration-200 resize-none"
                      />
                    </div>
                    
                    <button type="submit" className="w-full btn-primary">
                      <FiSend className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-8"
              >
                <div className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                    Let's Connect
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    I'm always interested in discussing new projects, creative ideas, or opportunities to be part of your visions.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <FiMail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                      <a 
                        href="mailto:serhat@serhatsoysal.com"
                        className="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                      >
                        serhat@serhatsoysal.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                    Follow Me
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-700 ${link.color} transition-colors duration-200`}
                      >
                        <link.icon className="w-5 h-5" />
                        <span className="font-medium">{link.name}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary-500 to-blue-600 rounded-xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-4">Quick Response</h3>
                  <p className="mb-4">
                    I typically respond to emails within 24 hours. For urgent matters, feel free to reach out via LinkedIn.
                  </p>
                  <p className="text-primary-100">
                    Looking forward to hearing from you!
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact; 
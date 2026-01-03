import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiZap } from 'react-icons/fi';

const CodeVisualCard = ({ 
  codeSnippet = null,
  bgImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuC2kRYsFO6ujQRg6QpZ8C21jyHU50b0ihGDqWhz3WaCVotrxZa_BLqUJSeyGteCVodTQr3OsDH2KjrJYnKPSRj6kGzb1qWbGaX6h7f-Ez0L7lSk2r1iBvpjp0PxrgSbe5CpYWhiPXcIoWdk2OVXoWubixYmhsJ18PFSiSeC0dnlT7s6TxZRZ7UpQGLHJzM9S5nwgWUF0-m5zp6_6yn8GEidFrKzymtxmOFYqIDRh402ycmNMopOJPRiKU0WbNUt-2DnzgyfI73oG15q",
  bottomBadge = { icon: FiCheck, title: "High Performance", subtitle: "Optimized for all devices" },
  floatingBadge = { icon: FiZap, status: "Status", label: "Open to Work" }
}) => {
  
  const defaultCodeSnippet = `// Crafting the future
const Experience = () => {
  return (
    <Innovation
      design="Modern"
      performance={100}
    />
  );
};`;

  const code = codeSnippet || defaultCodeSnippet;

  return (
    <div className="relative w-full max-w-md lg:max-w-full aspect-[4/5]">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/30 to-blue-500/30 blur-[60px] rounded-full transform translate-y-10"></div>
      
      {/* Main Visual Container */}
      <motion.div 
        className="relative w-full h-full"
        initial={{ opacity: 0, scale: 0.95, rotate: -3 }}
        animate={{ opacity: 1, scale: 1, rotate: -2 }}
        transition={{ duration: 0.8 }}
      >
        {/* Abstract Texture Layer (Background) */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden transform rotate-3 scale-95 opacity-80 border border-gray-300 dark:border-white/10">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url("${bgImage}")` }}
          />
          <div className="absolute inset-0 bg-gray-700/40 dark:bg-background-dark/40"></div>
        </div>

        {/* Glassmorphic Code Card */}
        <motion.div 
          className="absolute inset-0 rounded-2xl glass-card p-4 sm:p-6 flex flex-col justify-between transform -rotate-2 hover:rotate-0 transition-transform duration-500 cursor-default bg-gray-800/90 dark:bg-gray-900/90"
          whileHover={{ rotate: 0, scale: 1.02 }}
        >
          {/* Card Top Bar (macOS style) */}
          <div className="flex items-center justify-between border-b border-gray-700 dark:border-white/10 pb-3 sm:pb-4">
            <div className="flex gap-1.5 sm:gap-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="flex items-center gap-1 opacity-50">
              <span className="text-blue-400 dark:text-blue-300 text-xs sm:text-sm">{'<>'}</span>
              <span className="text-[10px] sm:text-xs text-gray-200 dark:text-white font-mono">portfolio.v1</span>
            </div>
          </div>

          {/* Code Snippet */}
          <div className="flex-1 py-4 sm:py-6 font-mono text-xs sm:text-sm leading-relaxed overflow-hidden">
            <div className="opacity-40 select-none mb-2 text-[10px] sm:text-xs text-gray-300 dark:text-gray-400">
              {code.split('\n')[0]}
            </div>
            <div className="space-y-0.5 sm:space-y-1">
              <div className="flex gap-1 sm:gap-2 text-gray-200 dark:text-gray-300">
                <span className="text-pink-400">const</span>
                <span className="text-yellow-300">Experience</span>
                <span>=</span>
                <span className="text-blue-300">()</span>
                <span className="text-pink-400">=&gt;</span>
                <span className="text-yellow-300">{'{'}</span>
              </div>
              <div className="flex gap-1 sm:gap-2 pl-2 sm:pl-4 text-gray-200 dark:text-gray-300">
                <span className="text-pink-400">return</span>
                <span className="text-blue-300">(</span>
              </div>
              <div className="flex gap-1 sm:gap-2 pl-4 sm:pl-8 text-gray-200 dark:text-gray-300">
                <span className="text-green-400">&lt;Innovation</span>
              </div>
              <div className="flex gap-1 sm:gap-2 pl-6 sm:pl-12 text-gray-200 dark:text-gray-300">
                <span className="text-purple-300">design</span>
                <span>=</span>
                <span className="text-orange-300">"Modern"</span>
              </div>
              <div className="flex gap-1 sm:gap-2 pl-6 sm:pl-12 text-gray-200 dark:text-gray-300">
                <span className="text-purple-300">performance</span>
                <span>=</span>
                <span className="text-blue-300">{'{'}</span>
                <span className="text-blue-300">100</span>
                <span className="text-blue-300">{'}'}</span>
              </div>
              <div className="flex gap-1 sm:gap-2 pl-4 sm:pl-8 text-gray-200 dark:text-gray-300">
                <span className="text-green-400">/&gt;</span>
              </div>
              <div className="flex gap-1 sm:gap-2 pl-2 sm:pl-4 text-gray-200 dark:text-gray-300">
                <span className="text-blue-300">)</span>
                <span className="text-gray-300 dark:text-gray-400">;</span>
              </div>
              <div className="flex gap-1 sm:gap-2 text-gray-200 dark:text-gray-300">
                <span className="text-yellow-300">{'}'}</span>
                <span className="text-gray-300 dark:text-gray-400">;</span>
              </div>
            </div>
          </div>

          {/* Bottom Info Badge */}
          <div className="mt-2 p-2 sm:p-3 rounded-lg bg-black/40 dark:bg-black/40 border border-gray-700/50 dark:border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary-600/20 flex items-center justify-center text-primary-400">
                <bottomBadge.icon className="w-3 h-3 sm:w-4 sm:h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] sm:text-xs font-bold text-gray-100 dark:text-white">{bottomBadge.title}</span>
                <span className="text-[8px] sm:text-[10px] text-gray-300 dark:text-gray-400">{bottomBadge.subtitle}</span>
              </div>
            </div>
            <FiCheck className="text-green-400 w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </motion.div>

        {/* Floating Badge Element */}
        <motion.div 
          className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 glass-nav px-3 py-2 sm:px-5 sm:py-3 rounded-xl border border-gray-300 dark:border-white/10 shadow-2xl flex items-center gap-2 sm:gap-3"
          animate={{ y: [0, -8, 0] }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-green-500 rounded-full blur opacity-40 animate-pulse"></div>
            <floatingBadge.icon className="text-green-400 relative z-10 w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <p className="text-gray-500 dark:text-white/60 text-[8px] sm:text-[10px] font-bold uppercase tracking-wider">{floatingBadge.status}</p>
            <p className="text-gray-900 dark:text-white text-[10px] sm:text-xs font-bold">{floatingBadge.label}</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CodeVisualCard;


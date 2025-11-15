import React from 'react';
import { motion } from 'framer-motion';
import { Theme } from '../App';

interface HeroProps {
    theme: Theme;
}

const Hero: React.FC<HeroProps> = ({ theme }) => {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.5,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section className={`min-h-screen flex flex-col justify-center items-center text-center relative pt-20 ${theme === 'light' ? 'aurora-background-light' : 'aurora-background-dark'}`}>
             <div className="absolute inset-0 bg-slate-100/50 dark:bg-slate-900/50"></div>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-4xl z-10"
            >
                <motion.p variants={itemVariants} className="text-cyan-600 dark:text-cyan-400 font-mono text-lg mb-4">
                    Hi, my name is
                </motion.p>
                <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl md:text-7xl font-bold text-slate-800 dark:text-slate-100 bg-clip-text text-transparent bg-gradient-to-br from-slate-800 to-slate-600 dark:from-white dark:to-slate-400">
                    Victor Tandoh.
                </motion.h1>
                <motion.h2 variants={itemVariants} className="text-3xl sm:text-5xl md:text-6xl font-bold text-slate-600 dark:text-slate-400 mt-2">
                    I build bridges for digital security.
                </motion.h2>
                <motion.p variants={itemVariants} className="mt-6 max-w-2xl mx-auto text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    I'm a Cybersecurity and GRC professional specializing in vendor risk management and system compliance. I thrive on creating secure digital environments by aligning technical systems with regulatory frameworks.
                </motion.p>
                <motion.div variants={itemVariants} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <motion.button
                        onClick={scrollToContact}
                        className="px-8 py-4 bg-cyan-400/10 border border-cyan-600 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 rounded-md font-medium text-lg transition-all duration-300 shadow-lg shadow-cyan-500/10 hover:bg-cyan-400/20 hover:shadow-cyan-500/20"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get In Touch
                    </motion.button>
                    <motion.a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 border border-slate-400 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-md font-medium text-lg transition-all duration-300 hover:bg-slate-400/20 dark:hover:bg-slate-800/50 hover:border-slate-500"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Download Resume
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
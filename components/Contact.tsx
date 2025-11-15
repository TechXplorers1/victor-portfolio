import React from 'react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
    return (
        <AnimatedSection id="contact" className="text-center">
            <h2 className="text-xl text-cyan-600 dark:text-cyan-400 font-mono mb-4">
                <span className="mr-2">05.</span> What's Next?
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                Get In Touch
            </h3>
            <p className="max-w-2xl mx-auto text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities or interesting projects in the cybersecurity space. Whether you have a question or just want to say hi, feel free to reach out.
            </p>
            <motion.a
                href="mailto:victortandoh2@gmail.com"
                className="inline-block px-8 py-4 bg-cyan-400/10 border border-cyan-600 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 rounded-md font-medium text-lg transition-all duration-300 shadow-lg shadow-cyan-500/10 hover:bg-cyan-400/20 hover:shadow-cyan-500/20"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
            >
                Say Hello
            </motion.a>
        </AnimatedSection>
    );
};

export default Contact;
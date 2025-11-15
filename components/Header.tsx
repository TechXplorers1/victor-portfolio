import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../constants';
import ThemeToggle from './ThemeToggle';
import { Theme } from '../App';

interface HeaderProps {
    theme: Theme;
    toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };

    const menuVariants = {
        closed: { opacity: 0, y: -20 },
        open: { opacity: 1, y: 0 }
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-100/80 dark:bg-slate-900/80 shadow-lg dark:shadow-cyan-900/10 backdrop-blur-sm' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6 sm:px-12 md:px-24 lg:px-36 xl:px-48 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    VT
                </div>
                <div className="hidden md:flex items-center space-x-6">
                    {NAV_LINKS.map((link, i) => (
                        <motion.button
                            key={link}
                            onClick={() => scrollToSection(link)}
                            className="text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 font-medium"
                            whileHover={{ y: -2 }}
                        >
                           <span className="text-cyan-600 dark:text-cyan-400 mr-1 text-sm">0{i+1}.</span> {link}
                        </motion.button>
                    ))}
                     <motion.a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-cyan-600 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 rounded-md font-medium text-sm transition-all duration-300 hover:bg-cyan-400/10"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Resume
                    </motion.a>
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                </div>
                <div className="md:hidden flex items-center gap-4">
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                    <button onClick={() => setIsOpen(!isOpen)} className="text-cyan-600 dark:text-cyan-400 z-50 relative">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
                    </button>
                </div>
            </nav>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="md:hidden absolute top-full left-0 right-0 bg-slate-100/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-lg flex flex-col items-center p-4 border-t border-slate-200 dark:border-slate-800"
                    >
                        {NAV_LINKS.map((link, i) => (
                            <button
                                key={link}
                                onClick={() => scrollToSection(link)}
                                className="py-3 text-lg text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
                            >
                                <span className="text-cyan-600 dark:text-cyan-400 mr-2">0{i+1}.</span>{link}
                            </button>
                        ))}
                         <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 px-6 py-2 border border-cyan-600 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 rounded-md font-medium transition-all duration-300 hover:bg-cyan-400/10"
                        >
                            Download Resume
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
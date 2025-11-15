import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';
import { EXPERIENCE_DATA } from '../constants';

const Experience: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const experience = EXPERIENCE_DATA[selectedTab];

    return (
        <AnimatedSection id="experience">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 flex items-center">
                <span className="text-xl text-cyan-600 dark:text-cyan-400 font-mono mr-3">03.</span> Where I've Worked
                <span className="flex-grow h-px bg-slate-300 dark:bg-slate-700 ml-4"></span>
            </h2>

            <div className="flex flex-col md:flex-row gap-8 min-h-[300px]">
                {/* Tabs */}
                <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b-2 md:border-b-0 md:border-l-2 border-slate-300 dark:border-slate-700">
                    {EXPERIENCE_DATA.map((item, index) => (
                        <button
                            key={item.company}
                            onClick={() => setSelectedTab(index)}
                            className={`relative text-left px-4 py-3 whitespace-nowrap font-medium text-sm transition-all duration-300 font-mono ${
                                selectedTab === index ? 'text-cyan-600 dark:text-cyan-400 bg-slate-200 dark:bg-slate-800' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 hover:text-cyan-600 dark:hover:text-cyan-400'
                            }`}
                        >
                            {item.company}
                            {selectedTab === index && (
                                <motion.div className="absolute bottom-[-2px] left-0 right-0 h-0.5 md:bottom-0 md:left-[-2px] md:top-0 md:w-0.5 md:h-full bg-cyan-600 dark:bg-cyan-400" layoutId="underline" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedTab}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                                {experience.role} <span className="text-cyan-600 dark:text-cyan-400">@ {experience.company}</span>
                            </h3>
                            <p className="font-mono text-sm text-slate-500 dark:text-slate-400 mb-4">{experience.date}</p>
                            <ul className="space-y-2">
                                {experience.description.map((point, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-cyan-600 dark:text-cyan-400 mr-3 mt-1 text-xs">&#9654;</span>
                                        <span className="text-slate-700 dark:text-slate-300">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Experience;
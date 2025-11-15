import React from 'react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../constants';

const Skills: React.FC = () => {

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.05
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <AnimatedSection id="skills">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-12 text-center">
                <span className="text-xl text-cyan-600 dark:text-cyan-400 font-mono mr-3">02.</span> My Skillset
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SKILLS_DATA.map((category) => (
                    <motion.div 
                        key={category.title}
                        className="bg-white/50 dark:bg-slate-800/50 p-6 rounded-lg border border-slate-200 dark:border-slate-700 backdrop-blur-sm"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-4">{category.title}</h3>
                        <motion.ul 
                            className="flex flex-wrap gap-2"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            {category.skills.map((skill) => (
                                <motion.li 
                                    key={skill} 
                                    className="bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-300 px-3 py-1 rounded-full text-sm font-medium"
                                    variants={itemVariants}
                                >
                                    {skill}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                ))}
            </div>
        </AnimatedSection>
    );
};

export default Skills;
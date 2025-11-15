import React from 'react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../constants';
import ExternalLinkIcon from './icons/ExternalLinkIcon';
import GithubIcon from './icons/GithubIcon';

const Projects: React.FC = () => {
    return (
        <AnimatedSection id="projects">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center">
                <span className="text-xl text-cyan-600 dark:text-cyan-400 font-mono mr-3">04.</span> Things I've Built
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS_DATA.map((project, index) => (
                    <motion.div
                        key={project.title}
                        className="bg-white dark:bg-slate-800/50 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col group transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 dark:hover:shadow-cyan-900/20 hover:-translate-y-2 hover:border-cyan-400 dark:hover:border-cyan-700"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="flex justify-between items-center mb-4">
                             <svg className="w-10 h-10 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            <div className="flex items-center space-x-4">
                                {project.link && (
                                  <>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                                        <GithubIcon className="w-6 h-6" />
                                    </a>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                                        <ExternalLinkIcon className="w-6 h-6" />
                                    </a>
                                  </>
                                )}
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors mb-2">
                            {project.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 flex-grow mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 font-mono text-xs text-cyan-700 dark:text-cyan-300">
                            {project.tags.map(tag => <span key={tag} className="bg-cyan-100 dark:bg-cyan-900/50 px-2 py-1 rounded">{tag}</span>)}
                        </div>
                    </motion.div>
                ))}
            </div>
        </AnimatedSection>
    );
};

export default Projects;
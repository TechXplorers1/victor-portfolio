import React from 'react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from '../constants';

const Education: React.FC = () => {
    return (
        <AnimatedSection id="education" className="bg-slate-200/50 dark:bg-slate-900 -mx-6 sm:-mx-12 md:-mx-24 lg:-mx-36 xl:-mx-48 px-6 sm:px-12 md:px-24 lg:px-36 xl:px-48">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-12 text-center">
                Education & Certifications
            </h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Education */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 text-center md:text-left">Education</h3>
                    {EDUCATION_DATA.map(edu => (
                        <div key={edu.institution} className="bg-white dark:bg-slate-800/50 p-6 rounded-lg border border-slate-300 dark:border-slate-700 shadow-sm">
                            <p className="font-mono text-sm text-cyan-600 dark:text-cyan-400">{edu.date}</p>
                            <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mt-1">{edu.degree}</h4>
                            <p className="text-slate-600 dark:text-slate-400">{edu.institution}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 text-center md:text-left">Certifications</h3>
                    <div className="space-y-4">
                        {CERTIFICATIONS_DATA.map(cert => (
                            <div key={cert.title} className="bg-white dark:bg-slate-800/50 p-6 rounded-lg border border-slate-300 dark:border-slate-700 shadow-sm">
                                <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100">{cert.title}</h4>
                                <p className="text-slate-600 dark:text-slate-400">{cert.issuer}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </AnimatedSection>
    );
};

export default Education;
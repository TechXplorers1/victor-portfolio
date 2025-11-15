import React from 'react';
import AnimatedSection from './AnimatedSection';
import { ABOUT_TEXT } from '../constants';

const About: React.FC = () => {
    return (
        <AnimatedSection id="about">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 flex items-center">
                <span className="text-xl text-cyan-600 dark:text-cyan-400 font-mono mr-3">01.</span> About Me
                <span className="flex-grow h-px bg-slate-300 dark:bg-slate-700 ml-4"></span>
            </h2>
            <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="space-y-4 text-lg text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed">
                    <p>{ABOUT_TEXT}</p>
                </div>
                <div className="relative w-full max-w-xs mx-auto md:mx-0 group flex-shrink-0">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <img
                        src="https://picsum.photos/seed/victor-tandoh/500/500"
                        alt="Victor Tandoh"
                        className="relative w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </AnimatedSection>
    );
};

export default About;
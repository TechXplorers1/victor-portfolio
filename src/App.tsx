import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Projects from './components/Projects';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-slate-900 text-gray-700 dark:text-slate-300 min-h-screen scrollbar-hide selection:bg-sky-300/30 transition-colors duration-300">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-slate-900 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-sky-400 opacity-20 blur-[100px]"></div>
      </div>
      
      <Header />
      
      <main className="container mx-auto px-6 md:px-12 lg:px-24 pt-20">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer className="text-center py-8 text-gray-500 dark:text-gray-600 text-sm">
        <p>Built by a Techxplorers PVT limited</p>
        <p>&copy; {new Date().getFullYear()} Victor Tandoh. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
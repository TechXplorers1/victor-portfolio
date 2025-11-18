import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        <div className="text-lg text-gray-600 leading-relaxed text-center md:text-left">
          <p>
            I am a diligent Cybersecurity Professional with a robust vendor risk assessment and system administration background. My expertise lies in PCI-DSS, FISMA, FedRAMP, NIST, and Risk Management Framework (RMF) processes.
          </p>
          <p className="mt-4">
            Seasoned in assessing and managing risks in vendor and system environments, I excel at conducting comprehensive assessments, implementing risk mitigation strategies, and ensuring compliance. I am passionate about bridging the gap between technical systems and risk compliance, guaranteeing security and adherence to regulatory frameworks.
          </p>
          <a href="/victor_tandoh_resume.pdf" download className="mt-8 inline-block px-8 py-3 border-2 border-sky-500 text-sky-500 font-bold rounded-md hover:bg-sky-500/10 transition-all duration-300 transform hover:scale-105">
            Download Resume
          </a>
        </div>
        <div className="relative w-full max-w-sm mx-auto aspect-square">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-indigo-500 rounded-2xl transform -rotate-6 transition-transform duration-500 hover:rotate-0 hover:scale-105"></div>
          <div className="relative w-full h-full bg-gray-200 rounded-2xl flex items-center justify-center p-4 border-2 border-white/20">
            <p className="text-gray-400 font-mono text-center">
              // Your professional
              <br/>
              // headshot here
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
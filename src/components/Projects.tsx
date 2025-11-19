import React from 'react';
import Section from './Section';
import type { ProjectItem } from '../../types'; // Check path

const projectData: ProjectItem[] = [
  {
    title: 'Automated Compliance Auditing Tool',
    description: 'A Python-based tool that automates auditing systems against frameworks like PCI-DSS and NIST. It generates detailed reports, identifies gaps, and suggests remediation actions.',
    tags: ['Python', 'NIST', 'PCI-DSS', 'Automation', 'Reporting'],
  },
  {
    title: 'Phishing Simulation & Training Platform',
    description: 'Developed a platform for conducting internal phishing campaigns and delivering targeted security awareness training, tracking metrics on user susceptibility and training effectiveness.',
    tags: ['React', 'Node.js', 'Cybersecurity Awareness', 'SaaS'],
  },
  {
    title: 'Secure SDLC Pipeline Integration',
    description: 'Integrated Static (SAST) and Dynamic (DAST) Application Security Testing tools into the CI/CD pipeline to identify vulnerabilities early in the development lifecycle.',
    tags: ['CI/CD', 'DevSecOps', 'SAST', 'DAST', 'Jenkins'],
  },
];

const ProjectCard: React.FC<{ project: ProjectItem }> = ({ project }) => (
    <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700 hover:border-sky-500 transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
        <div className="flex-grow">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-auto pt-4">
            {project.tags.map(tag => (
                <span key={tag} className="bg-sky-100 dark:bg-sky-900/30 text-sky-800 dark:text-sky-200 text-xs font-medium px-2.5 py-1 rounded-full">{tag}</span>
            ))}
        </div>
    </div>
);

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
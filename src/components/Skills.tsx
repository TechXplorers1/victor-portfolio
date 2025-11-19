import React from 'react';
import Section from './Section';
import type { SkillCategory } from '../../types'; // Check path to types

const skillsData: SkillCategory[] = [
  {
    title: 'Compliance & Frameworks',
    skills: [
      { name: 'AICPA Standards' }, { name: 'NIST Publications' }, { name: 'PCI DSS' },
      { name: 'ISO 27001' }, { name: 'FISMA' }, { name: 'FedRAMP' },
      { name: 'Risk Management Framework (RMF)' }, { name: 'NISPOM' },
    ],
  },
  {
    title: 'Assessment & Authorization',
    skills: [
      { name: 'C&A / A&A' }, { name: 'Vulnerability Assessment' }, { name: 'Network Scanning' },
      { name: 'Information Assurance' }, { name: 'System Risk Assessment' }, { name: 'HIPAA & PRIVACY ACT' },
    ],
  },
  {
    title: 'Tools & Software',
    skills: [
      { name: 'Nessus' }, { name: 'ACAS' }, { name: 'HBSS' },
      { name: 'SCAP' }, { name: 'Splunk' }, { name: 'SharePoint' },
      { name: 'Nexpose' }, { name: 'Power BI' }, { name: 'Archer' },
    ],
  },
  {
    title: 'Documentation & Procedures',
    skills: [
      { name: 'PTA' }, { name: 'PIA' }, { name: 'SSP' }, { name: 'CP' },
      { name: 'SAR' }, { name: 'POA&M' }, { name: 'ATO' }, { name: 'ISA' }, { name: 'MOU/A' },
    ],
  },
];

const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
)

const SkillCard: React.FC<{ category: SkillCategory, index: number }> = ({ category, index }) => {
    return (
        <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700 hover:border-sky-500 transform hover:-translate-y-2 transition-all duration-300" style={{ transitionDelay: `${index * 100}ms` }}>
            <div className="flex justify-center">
                <ShieldIcon />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-6">{category.title}</h3>
            <ul className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill) => (
                    <li key={skill.name} className="bg-sky-100 dark:bg-sky-900/30 text-sky-800 dark:text-sky-200 text-sm font-medium px-4 py-2 rounded-full">
                        {skill.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="My Expertise">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {skillsData.map((category, index) => (
          <SkillCard key={category.title} category={category} index={index}/>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
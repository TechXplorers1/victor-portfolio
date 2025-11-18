import React, { useState } from 'react';
import Section from './Section';
import type { ExperienceItem } from '../types';

const experienceData: ExperienceItem[] = [
  {
    company: 'Chipotle Mexican Grill',
    role: 'Sr GRC Analyst',
    period: '01/2023 - Present',
    points: [
      'Conduct thorough reviews and assessments of SOC controls.',
      'Stay current on AICPA standards and incorporate changes into assessments.',
      'Develop security awareness training and phishing campaigns.',
      'Lead and coordinate audit-related tasks for PCI-DSS 4.0 readiness.',
      'Lead the roadmap and transition from PCI-DSS 3.2.1 to PCI-DSS 4.0.',
      'Monitor industry trends and best practices for PCI-DSS compliance.',
      'Perform risk assessments and audits for PCI-DSS, SOX, and internal policies.',
    ],
  },
  {
    company: 'Columbia Bank',
    role: 'IT Risk Manager-Third Party Vendor Risk Management',
    period: '05/2020 - 12/2023',
    points: [
      'Conducted readiness assessments of service organization controls based on SOC 2.',
      'Spearheaded vendor risk management and documentation.',
      'Conducted comprehensive 3rd Party Vendor Risk Assessments.',
      'Provided actionable recommendations for security exceptions and remediation.',
      'Identified and addressed system vulnerabilities, focusing on vulnerability management and gap analysis.',
      'Collaborated with cross-functional teams to navigate compliance issues (PCI, SOC2).',
    ],
  },
  {
    company: 'NETWORK CENTER INC',
    role: 'Senior Security Assessor (IT Risk & Compliance)',
    period: '05/2016 - 04/2020',
    points: [
      'Led comprehensive security and privacy control assessments for IT processes.',
      'Drove vulnerability/risk assessment analyses to support A&A activities.',
      'Orchestrated development of security solutions for weaknesses identified in RTM and SAR.',
      'Conducted FedRAMP assessments by analyzing cloud provider controls.',
      'Maintained comprehensive Security Authorization packages (SSP, CP, SAR).',
      'Demonstrated proficiency in NIST 800-53 security controls and RMF.',
    ],
  },
   {
    company: 'OHIO HEALTH',
    role: 'Third-Party Vendor Risk Manager',
    period: '06/2013 - 05/2016',
    points: [
      'Provided analysis and recommendations for identified security exceptions.',
      'Ensured all vendor relationships and contracts were documented and uploaded to the VRM system.',
      'Performed 3rd Party Vendor Risk Assessments and assisted in reporting.',
      'Managed the functionality of the VRM system, VCI\'s central repository for vendor contracts.',
      'Worked with Legal, Compliance, and IRM to consider third-party risk.',
      'Provided senior leadership with "Risk Based" vendor evaluation reporting.',
    ],
  },
];

const Experience: React.FC = () => {
    const [activeCompany, setActiveCompany] = useState(experienceData[0].company);
    const activeExperience = experienceData.find(exp => exp.company === activeCompany);

    return (
        <Section id="experience" title="Where I've Worked">
            <div className="flex flex-col md:flex-row max-w-5xl mx-auto">
                {/* Company Tabs */}
                <div className="flex md:flex-col md:w-1/4 mb-8 md:mb-0 overflow-x-auto scrollbar-hide">
                    {experienceData.map((exp) => (
                        <button
                            key={exp.company}
                            onClick={() => setActiveCompany(exp.company)}
                            className={`text-left px-4 py-3 whitespace-nowrap text-sm md:text-base border-b-2 md:border-b-0 md:border-l-2 transition-all duration-300 ${
                                activeCompany === exp.company
                                    ? 'border-sky-500 text-sky-500 bg-sky-500/10'
                                    : 'border-gray-200 text-gray-500 hover:bg-gray-400/10 hover:text-sky-500'
                            }`}
                        >
                            {exp.company}
                        </button>
                    ))}
                </div>

                {/* Experience Details */}
                <div className="md:w-3/4 md:pl-8">
                    {activeExperience && (
                        <div className="transition-opacity duration-500">
                            <h3 className="text-2xl font-bold text-gray-900">
                                {activeExperience.role} <span className="text-sky-500">@ {activeExperience.company}</span>
                            </h3>
                            <p className="text-gray-500 font-mono text-sm mt-1 mb-6">{activeExperience.period}</p>
                            <ul className="space-y-4">
                                {activeExperience.points.map((point, index) => (
                                    <li key={index} className="flex items-start">
                                        <svg className="w-4 h-4 mr-3 mt-1 text-sky-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="text-gray-700">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </Section>
    );
};

export default Experience;
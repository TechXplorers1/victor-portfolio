
import { ExperienceItem, SkillCategory, ProjectItem, EducationItem, CertificationItem } from './types';

export const NAV_LINKS = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

export const ABOUT_TEXT = `I am a diligent cybersecurity professional with a strong background in vendor risk assessment and system administration. My expertise lies in PCI-DSS, FISMA, FedRAMP, NIST, and RMF processes, where I am seasoned in assessing and managing risks across diverse vendor and system environments. I excel at conducting comprehensive assessments and implementing effective mitigation strategies to ensure unwavering compliance. I am passionate about bridging the gap between technical systems and risk compliance, ensuring robust security and seamless adherence to regulatory frameworks to protect organizational assets.`;

export const SKILLS_DATA: SkillCategory[] = [
    {
        title: 'Compliance & Frameworks',
        skills: ['PCI DSS', 'NIST', 'FISMA', 'FedRAMP', 'RMF', 'ISO 27001', 'SOC 2', 'HIPAA', 'NISPOM']
    },
    {
        title: 'Assessment & Authorization',
        skills: ['C&A', 'A&A', 'Vulnerability Assessment', 'Network Scanning', 'System Risk Assessment', 'Vendor Risk Management']
    },
    {
        title: 'Tools & Software',
        skills: ['Nessus', 'ACAS', 'Splunk', 'Power BI', 'Archer', 'SharePoint', 'Nexpose', 'CyberGRX', 'BitSight']
    },
    {
        title: 'Documentation & Procedures',
        skills: ['PTA', 'PIA', 'SSP', 'SAR', 'POA&M', 'ATO', 'ISA', 'MOU/A', 'IDS/IPS']
    },
    {
        title: 'Soft Skills',
        skills: ['Communication', 'Results-Oriented', 'Fast Learner', 'Critical Thinking', 'Multi-tasking', 'Team Builder']
    }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
    {
        date: '01/2023 - Present',
        role: 'Sr GRC Analyst',
        company: 'Chipotle Mexican Grill',
        description: [
            'Lead and coordinate audit-related tasks for PCI-DSS 4.0, ensuring readiness for audit testing with internal and external auditors.',
            'Drive the roadmap and transition from PCI-DSS 3.2.1 to PCI-DSS 4.0, educating stakeholders on changes.',
            'Conduct comprehensive SOC control reviews and readiness assessments based on the AICPA framework.',
            'Assist with third-party vendor management programs using tools like CyberGRX and BitSight.'
        ]
    },
    {
        date: '05/2020 - 12/2023',
        role: 'IT Risk Manager - Third Party Vendor Risk Management',
        company: 'Columbia Bank',
        description: [
            'Spearheaded vendor risk management, ensuring thorough documentation and contract management.',
            'Conducted comprehensive 3rd Party Vendor Risk Assessments, reported findings, and drove remediation strategies.',
            'Identified system vulnerabilities, recommending countermeasures for risk mitigation in vulnerability management, control mapping, and gap analysis.',
            'Collaborated with cross-functional teams (IT, HR, Legal) to navigate compliance with PCI, SOC2, and other regulations.'
        ]
    },
    {
        date: '05/2016 - 04/2020',
        role: 'Senior Security Assessor (IT Risk & Compliance)',
        company: 'NETWORK CENTER INC',
        description: [
            'Led comprehensive security and privacy control assessments for IT processes, identifying vulnerabilities across systems.',
            'Drove vulnerability/risk assessment analyses to support Assessment & Authorization (A&A) activities.',
            'Maintained comprehensive Security Authorization and Assessment packages, including SSPs, CPs, and SARs.',
            'Adhered strictly to the NIST Risk Management Framework (RMF) for A&A processes and continuous monitoring.'
        ]
    },
    {
        date: '06/2013 - 05/2016',
        role: 'Third-Party Vendor Risk Manager',
        company: 'OHIO HEALTH',
        description: [
            'Performed 3rd Party Vendor Risk Assessments and assisted in reporting risk management activities.',
            'Managed the functionality of the VRM system, the central repository for vendor contracts and due diligence records.',
            'Provided senior leadership with risk-based vendor evaluations, identifying material risks and their potential sources.',
            'Worked with Legal, Compliance, and IRM to ensure third-party risk consideration within their domains.'
        ]
    }
];


export const PROJECTS_DATA: ProjectItem[] = [
    {
        title: 'PCI-DSS 4.0 Transition Framework',
        description: 'Developed a comprehensive toolkit and roadmap to guide the organization\'s transition from PCI-DSS 3.2.1 to 4.0. The project included gap analysis, stakeholder training modules, and updated documentation templates.',
        tags: ['PCI-DSS 4.0', 'Compliance', 'Risk Management', 'Project Management'],
        link: 'https://github.com'
    },
    {
        title: 'Automated Vendor Risk Reporting Dashboard',
        description: 'Designed and implemented a Power BI dashboard to automate the reporting of vendor risk metrics from CyberGRX and BitSight. This provided real-time insights to senior leadership and reduced manual reporting efforts by 60%.',
        tags: ['Power BI', 'Vendor Risk', 'Automation', 'Data Visualization'],
        link: 'https://github.com'
    },
    {
        title: 'FedRAMP Compliance Assessment Accelerator',
        description: 'Created a standardized assessment package for cloud providers seeking FedRAMP authorization. This streamlined the process by pre-filling common controls and customer responsibility matrices, accelerating A&A timelines.',
        tags: ['FedRAMP', 'A&A', 'Cloud Security', 'NIST'],
        link: 'https://github.com'
    }
];

export const EDUCATION_DATA: EducationItem[] = [
    {
        date: 'Aug 2005 - May 2009',
        degree: 'Bachelor of Science, Computer Science',
        institution: 'Kwame Nkrumah University of Science and Technology'
    }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
    {
        title: 'CISM - Certified Information System Manager',
        issuer: 'ISACA'
    },
    {
        title: 'CompTIA Security+',
        issuer: 'CompTIA'
    }
];

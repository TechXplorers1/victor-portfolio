import React, { useState, useEffect, useRef } from 'react';

/**
 * HOOK: useOnScreen
 * Detects if an element is in the viewport
 */
function useOnScreen(ref, rootMargin = '0px') {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, rootMargin]);

  return isIntersecting;
}

/**
 * COMPONENT: Section
 * Wrapper with animation on scroll
 */
const Section = ({ id, title, children }) => {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref, '-100px');

  return (
    <section 
      id={id} 
      ref={ref}
      className={`py-20 md:py-28 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
        <span className="bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {children}
    </section>
  );
};

/**
 * COMPONENT: Header
 */
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Theme State
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        return 'dark';
      }
    }
    return 'light';
  });

  // Apply theme class
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-bold transition-colors text-gray-900 dark:text-white hover:text-sky-500">
            VT
          </a>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-300 font-medium">
                {link.label}
              </a>
            ))}
            
            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <a href="/Victor_Tandoh_Resume.pdf" download className="px-4 py-2 border-2 border-sky-500 text-sky-500 font-bold rounded-md text-sm hover:bg-sky-500/10 dark:hover:bg-sky-500/20 transition-all duration-300">
              Resume
            </a>
          </nav>

          <div className="flex items-center gap-4 md:hidden">
             {/* Mobile Theme Toggle */}
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="z-50 text-gray-600 dark:text-gray-300 hover:text-sky-500 transition-colors"
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-3/4 bg-white dark:bg-slate-900 border-l dark:border-slate-800 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden shadow-2xl`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-xl text-gray-600 dark:text-gray-300 hover:text-sky-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </a>
          ))}
           <div className="flex items-center gap-4 pt-4">
              <a href="/Victor_Tandoh_Resume.pdf" download className="px-4 py-2 border-2 border-sky-500 text-sky-500 font-bold rounded-md text-sm hover:bg-sky-500/10 dark:hover:bg-sky-500/20 transition-all duration-300">
                Resume
              </a>
           </div>
        </div>
      </div>
    </header>
  );
};

/**
 * COMPONENT: Hero
 */
const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const toRotate = ["Cybersecurity Professional", "GRC Analyst", "Risk Management Expert"];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    const ticker = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-start">
      <div className="max-w-3xl">
        <p className="text-sky-500 text-lg font-medium mb-4">Hi, my name is</p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
          Victor Tandoh.
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-600 dark:text-gray-400 mb-8">
          I am a <span className="border-b-4 border-sky-500/50">{text}</span>
          <span className="animate-ping text-gray-600 dark:text-gray-400">|</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mb-12">
          I'm a diligent Cybersecurity Professional with a robust background in vendor risk assessment, system administration, and ensuring compliance with industry standards like PCI-DSS, NIST, and FedRAMP.
        </p>
        <a href="#contact" className="px-8 py-4 bg-sky-500 text-white font-bold rounded-md hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-sky-500/30">
          Get In Touch
        </a>
      </div>
    </section>
  );
};

/**
 * COMPONENT: About
 */
const About = () => {
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center md:text-left">
          <p>
            I am a diligent Cybersecurity Professional with a robust vendor risk assessment and system administration background. My expertise lies in PCI-DSS, FISMA, FedRAMP, NIST, and Risk Management Framework (RMF) processes.
          </p>
          <p className="mt-4">
            Seasoned in assessing and managing risks in vendor and system environments, I excel at conducting comprehensive assessments, implementing risk mitigation strategies, and ensuring compliance. I am passionate about bridging the gap between technical systems and risk compliance, guaranteeing security and adherence to regulatory frameworks.
          </p>
          <a href="/Victor_Tandoh_Resume.pdf" download className="mt-8 inline-block px-8 py-3 border-2 border-sky-500 text-sky-500 font-bold rounded-md hover:bg-sky-500/10 dark:hover:bg-sky-500/20 transition-all duration-300 transform hover:scale-105">
            Download Resume
          </a>
        </div>
        <div className="relative w-full max-w-sm mx-auto aspect-square">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-indigo-500 rounded-2xl transform -rotate-6 transition-transform duration-500 hover:rotate-0 hover:scale-105"></div>
          <div className="relative w-full h-full bg-gray-200 dark:bg-slate-800 rounded-2xl flex items-center justify-center p-4 border-2 border-white/20">
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

/**
 * COMPONENT: Skills
 */
const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
)

const SkillCard = ({ category, index }) => {
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

const Skills = () => {
  const skillsData = [
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

/**
 * COMPONENT: Experience
 */
const Experience = () => {
    const experienceData = [
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
                                    ? 'border-sky-500 text-sky-500 bg-sky-500/10 dark:bg-sky-500/20'
                                    : 'border-gray-200 dark:border-slate-700 text-gray-500 dark:text-gray-400 hover:bg-gray-400/10 hover:text-sky-500'
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
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                {activeExperience.role} <span className="text-sky-500">@ {activeExperience.company}</span>
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 font-mono text-sm mt-1 mb-6">{activeExperience.period}</p>
                            <ul className="space-y-4">
                                {activeExperience.points.map((point, index) => (
                                    <li key={index} className="flex items-start">
                                        <svg className="w-4 h-4 mr-3 mt-1 text-sky-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="text-gray-700 dark:text-gray-300">{point}</span>
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

/**
 * COMPONENT: Projects
 */
const ProjectCard = ({ project }) => (
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

const Projects = () => {
  const projectData = [
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

/**
 * COMPONENT: Education
 */
const Education = () => {
  const educationData = [
    {
      institution: 'Kwame Nkrumah University of Science and Technology',
      degree: 'Bachelor of Science, Computer Science',
      period: 'August 2005 - May 2009',
    },
  ];

  const certificationData = [
    { name: 'CISM - Certified Information System Manager', issuer: 'ISACA' },
    { name: 'CompTIA Security+', issuer: 'CompTIA' },
  ];

  return (
    <Section id="education" title="Education & Certifications">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center md:text-left">Certifications</h3>
          <div className="space-y-4">
            {certificationData.map((cert) => (
              <div key={cert.name} className="bg-white/50 dark:bg-slate-800/50 p-6 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-sky-500 transition-colors duration-300">
                <h4 className="font-bold text-lg text-sky-600 dark:text-sky-400">{cert.name}</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center md:text-left">Education</h3>
          {educationData.map((edu) => (
            <div key={edu.institution} className="bg-white/50 dark:bg-slate-800/50 p-6 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-sky-500 transition-colors duration-300">
              <h4 className="font-bold text-lg text-sky-600 dark:text-sky-400">{edu.institution}</h4>
              <p className="text-gray-700 dark:text-gray-300">{edu.degree}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

/**
 * COMPONENT: Contact
 */
const Contact = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          I'm currently seeking new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-lg">
            <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:victortandoh2@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-sky-500 transition-colors">
                    victortandoh2@gmail.com
                </a>
            </div>
            <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span className="text-gray-700 dark:text-gray-300">(614) 424-2594</span>
            </div>
        </div>
        <a href="mailto:victortandoh2@gmail.com" className="mt-12 inline-block px-10 py-4 border-2 border-sky-500 text-sky-500 font-bold rounded-md hover:bg-sky-500/10 dark:hover:bg-sky-500/20 transition-all duration-300 transform hover:scale-105">
            Say Hello
        </a>
      </div>
    </Section>
  );
};

/**
 * COMPONENT: Footer
 */
const Footer = () => {
    return (
        <footer className="py-8 text-center text-gray-500 dark:text-gray-400 text-sm bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800">
            <p>&copy; {new Date().getFullYear()} Victor Tandoh. All rights reserved.</p>
            <p className="mt-2 font-medium">Built by Techxplorers PVT limited</p>
        </footer>
    );
};

/**
 * MAIN COMPONENT: App
 */
function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300 font-sans">
      <Header />
      <main className="container mx-auto px-6 md:px-12 lg:px-24">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
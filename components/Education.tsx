import React from 'react';
import Section from './Section';
import type { EducationItem, CertificationItem } from '../types';

const educationData: EducationItem[] = [
  {
    institution: 'Kwame Nkrumah University of Science and Technology',
    degree: 'Bachelor of Science, Computer Science',
    period: 'August 2005 - May 2009',
  },
];

const certificationData: CertificationItem[] = [
  { name: 'CISM - Certified Information System Manager', issuer: 'ISACA' },
  { name: 'CompTIA Security+', issuer: 'CompTIA' },
];

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education & Certifications">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center md:text-left">Certifications</h3>
          <div className="space-y-4">
            {certificationData.map((cert) => (
              <div key={cert.name} className="bg-white/50 p-6 rounded-lg border border-gray-200 hover:border-sky-500 transition-colors duration-300">
                <h4 className="font-bold text-lg text-sky-600">{cert.name}</h4>
                <p className="text-gray-500 text-sm">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center md:text-left">Education</h3>
          {educationData.map((edu) => (
            <div key={edu.institution} className="bg-white/50 p-6 rounded-lg border border-gray-200 hover:border-sky-500 transition-colors duration-300">
              <h4 className="font-bold text-lg text-sky-600">{edu.institution}</h4>
              <p className="text-gray-700">{edu.degree}</p>
              <p className="text-gray-500 text-sm mt-1">{edu.period}</p>
            </div>
          ))}
        </div>


      </div>
    </Section>
  );
};

export default Education;
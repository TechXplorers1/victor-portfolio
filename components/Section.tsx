import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, '-100px');

  return (
    <section 
      id={id} 
      ref={ref}
      className={`py-20 md:py-28 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
        <span className="bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {children}
    </section>
  );
};

export default Section;
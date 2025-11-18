import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
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
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-4">
          Victor Tandoh.
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-600 mb-8">
          I am a <span className="border-b-4 border-sky-500/50">{text}</span>
          <span className="animate-ping text-gray-600">|</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mb-12">
          I'm a diligent Cybersecurity Professional with a robust background in vendor risk assessment, system administration, and ensuring compliance with industry standards like PCI-DSS, NIST, and FedRAMP.
        </p>
        <a href="#contact" className="px-8 py-4 bg-sky-500 text-white font-bold rounded-md hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-sky-500/30">
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
import React, { useState, useEffect } from 'react';
import { ChevronDown, Terminal } from 'lucide-react';
import { HERO_TITLES } from '../constants';

export const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentTitle = HERO_TITLES[titleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentTitle) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % HERO_TITLES.length);
      } else {
        setText(currentTitle.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, titleIndex]);

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-8 max-w-4xl mx-auto">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyber-green/30 bg-cyber-green/10 text-cyber-green mb-4 animate-pulse-fast">
        <span className="w-2 h-2 rounded-full bg-cyber-green"></span>
        <span className="text-xs font-mono font-bold tracking-widest">SYSTEM ONLINE</span>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
        Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-neon to-blue-500">Bilal Uddin</span>
      </h1>

      <div className="h-12 flex items-center justify-center">
        <span className="text-2xl md:text-3xl font-mono text-gray-400">
          &gt; {text}
          <span className="animate-pulse text-cyber-neon">_</span>
        </span>
      </div>

      <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
        Security Engineer with expertise in AppSec, Cloud Security, and DevSecOps. 
        Skilled at automating workflows and embedding security into CI/CD pipelines to drive a secure development culture.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 pt-8">
        <a href="#projects" className="px-8 py-3 bg-cyber-neon text-cyber-black font-bold rounded hover:bg-cyan-300 transition-colors flex items-center justify-center gap-2">
          <Terminal className="w-5 h-5" />
          View Operations
        </a>
        <a href="#contact" className="px-8 py-3 border border-gray-600 text-white rounded hover:border-cyber-neon hover:text-cyber-neon transition-colors">
          Initialize Contact
        </a>
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <a href="#about" className="text-gray-500 hover:text-white transition-colors">
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
};
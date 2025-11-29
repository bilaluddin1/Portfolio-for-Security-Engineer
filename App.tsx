import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { TerminalBot } from './components/TerminalBot';
import { Contact } from './components/Contact';
import { ShieldCheck, Terminal, Cpu, Network, Lock } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  // Simple scroll spy to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'services', 'terminal', 'experience', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cyber-black text-white relative overflow-hidden">
      {/* Background Grid Effect */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>
      
      {/* Glowing Orbs */}
      <div className="fixed top-20 right-20 w-96 h-96 bg-cyber-neon rounded-full filter blur-[150px] opacity-5 z-0 animate-pulse"></div>
      <div className="fixed bottom-20 left-20 w-96 h-96 bg-cyber-green rounded-full filter blur-[150px] opacity-5 z-0 animate-pulse"></div>

      <Navbar activeSection={activeSection} />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-24">
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
          <Hero />
        </section>

        <section id="about" className="scroll-mt-24">
          <About />
        </section>

        <section id="skills" className="scroll-mt-24">
          <Skills />
        </section>

        <section id="services" className="scroll-mt-24">
          <Services />
        </section>

        <section id="terminal" className="scroll-mt-24">
           <div className="mb-8">
            <h2 className="text-3xl font-mono font-bold text-cyber-neon flex items-center gap-3">
              <Terminal className="w-8 h-8" />
              <span>INTERACTIVE_SESSION</span>
            </h2>
            <p className="text-gray-400 mt-2 font-mono text-sm max-w-2xl">
              Execute queries against my digital persona. Ask about my experience, specific CVEs found, or security philosophy. Powered by Gemini 2.5 Flash.
            </p>
          </div>
          <TerminalBot />
        </section>

        <section id="experience" className="scroll-mt-24">
          <Experience />
        </section>

        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>

        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>

      <footer className="border-t border-gray-800 py-8 mt-12 bg-cyber-dark text-center relative z-10">
        <p className="text-gray-500 font-mono text-sm">
          &copy; {new Date().getFullYear()} SENTINEL // SECURITY_ENGINEER. All systems nominal.
        </p>
      </footer>
    </div>
  );
};

export default App;
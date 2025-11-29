import React from 'react';
import { Mail, Linkedin, Github, Award } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-transparent to-gray-900/50 rounded-2xl border border-gray-800 p-8 md:p-16 text-center">
      <h2 className="text-3xl font-mono font-bold text-white mb-6">
        Ready to <span className="text-cyber-neon">Secure</span> Your Infrastructure?
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-10">
        I am currently open to new opportunities in Security Engineering, DevSecOps, and Cloud Security. 
        Reach out to discuss how I can help secure your organization.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <a href="mailto:bilaluddin_core@outlook.com" className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 rounded hover:bg-white hover:text-black transition-all duration-300 group">
          <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
          <span>bilaluddin_core@outlook.com</span>
        </a>
        <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 rounded hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white transition-all duration-300">
          <Linkedin className="w-5 h-5 mr-2" />
          <span>Bilal.Uddin</span>
        </a>
         <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 rounded hover:bg-[#333] hover:border-[#333] hover:text-white transition-all duration-300">
          <Github className="w-5 h-5 mr-2" />
          <span>Bilal.Uddin</span>
        </a>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col items-center">
        <div className="flex items-center gap-2 text-gray-500 font-mono text-sm mb-4">
            <Award className="w-4 h-4" />
            <span>VERIFIED CERTIFICATIONS</span>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
            <span className="bg-black/50 px-3 py-1 rounded text-xs text-cyber-green font-mono border border-cyber-green/30">
                Certified in Cyber Security (ISC2)
            </span>
             <span className="bg-black/50 px-3 py-1 rounded text-xs text-cyber-green font-mono border border-cyber-green/30">
                Microsoft Certified Trainer (MCT)
            </span>
             <span className="bg-black/50 px-3 py-1 rounded text-xs text-cyber-green font-mono border border-cyber-green/30">
                Azure Administrator
            </span>
        </div>
      </div>
    </div>
  );
};
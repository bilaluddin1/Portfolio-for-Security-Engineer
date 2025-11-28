import React from 'react';
import { Mail, Linkedin, Twitter, Key } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-transparent to-gray-900/50 rounded-2xl border border-gray-800 p-8 md:p-16 text-center">
      <h2 className="text-3xl font-mono font-bold text-white mb-6">
        Ready to <span className="text-cyber-neon">Secure</span> Your Infrastructure?
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-10">
        I am currently open to new opportunities, consulting engagements, or interesting collaborations. 
        Send an encrypted signal my way.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <a href="mailto:contact@example.com" className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 rounded hover:bg-white hover:text-black transition-all duration-300 group">
          <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
          <span>Send Email</span>
        </a>
        <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 rounded hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white transition-all duration-300">
          <Linkedin className="w-5 h-5 mr-2" />
          <span>LinkedIn</span>
        </a>
         <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 rounded hover:bg-[#1DA1F2] hover:border-[#1DA1F2] hover:text-white transition-all duration-300">
          <Twitter className="w-5 h-5 mr-2" />
          <span>Twitter</span>
        </a>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col items-center">
        <div className="flex items-center gap-2 text-gray-500 font-mono text-sm mb-2">
            <Key className="w-4 h-4" />
            <span>PGP FINGERPRINT</span>
        </div>
        <code className="bg-black/50 px-4 py-2 rounded text-xs text-cyber-green font-mono break-all max-w-full">
            8F3A 2B1C 4D5E 6F7G 8H9I 0J1K 2L3M 4N5O
        </code>
      </div>
    </div>
  );
};
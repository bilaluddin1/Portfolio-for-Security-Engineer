import React from 'react';
import { User, Shield, Lock, Fingerprint } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute -top-10 -left-10 w-20 h-20 border-t-2 border-l-2 border-cyber-neon opacity-50"></div>
      <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b-2 border-r-2 border-cyber-neon opacity-50"></div>

      <div className="bg-gray-900/40 p-8 md:p-12 rounded-lg border border-gray-800 backdrop-blur-md">
        <h2 className="text-3xl font-mono font-bold text-white mb-8 flex items-center gap-3">
          <User className="w-8 h-8 text-cyber-neon" />
          <span>ABOUT_TARGET</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4 text-gray-300">
                <p>
                    I am a security practitioner obsessed with understanding how systems break to make them unbreakable. 
                    With over 6 years of experience in the field, I have transitioned from traditional network administration 
                    to specialized roles in offensive security and cloud architecture.
                </p>
                <p>
                    My philosophy is simple: <strong className="text-white">Security must be an enabler, not a blocker.</strong> 
                    I build tools that integrate seamlessly into developer workflows, ensuring that safety is the path of least resistance.
                </p>
                <p>
                    When I'm not auditing code or designing IAM policies, I'm contributing to open-source security tools or participating in CTF competitions.
                </p>
            </div>

            <div className="space-y-4">
                <div className="p-4 bg-black/40 rounded border border-gray-700 flex items-start gap-4">
                    <Shield className="w-6 h-6 text-cyber-green shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-white">Defensive</h4>
                        <p className="text-sm text-gray-400">SIEM Implementation, Incident Response, Hardening</p>
                    </div>
                </div>
                <div className="p-4 bg-black/40 rounded border border-gray-700 flex items-start gap-4">
                    <Lock className="w-6 h-6 text-cyber-neon shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-white">Offensive</h4>
                        <p className="text-sm text-gray-400">Penetration Testing, Red Teaming, Exploit Dev</p>
                    </div>
                </div>
                <div className="p-4 bg-black/40 rounded border border-gray-700 flex items-start gap-4">
                    <Fingerprint className="w-6 h-6 text-purple-500 shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-white">Forensics</h4>
                        <p className="text-sm text-gray-400">Malware Analysis, Digital Forensics, Recovery</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
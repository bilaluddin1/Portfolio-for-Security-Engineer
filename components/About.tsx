import React from 'react';
import { User, Shield, Lock, Fingerprint, Cloud, Code } from 'lucide-react';

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
                    I am a Security Engineer passionate about driving secure development culture and evolving into a strategic security leader.
                    My work focuses on bridging the gap between DevOps and Security, ensuring that critical infrastructure is hardened without slowing down innovation.
                </p>
                <p>
                    With a strong foundation in <strong className="text-white">Java/Kotlin microservices</strong> and <strong className="text-white">Cloud Security</strong>, 
                    I specialize in automating vulnerability management and securing the SDLC.
                </p>
                <p>
                    Whether it's performing assessments with Burp Suite, managing AWS WAF rules, or deploying Kubernetes security contexts, 
                    I strive to reduce risk and improve system resilience.
                </p>
            </div>

            <div className="space-y-4">
                <div className="p-4 bg-black/40 rounded border border-gray-700 flex items-start gap-4">
                    <Shield className="w-6 h-6 text-cyber-green shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-white">AppSec</h4>
                        <p className="text-sm text-gray-400">OWASP, Burp Suite, MOBSF, Frida, Android Studio</p>
                    </div>
                </div>
                <div className="p-4 bg-black/40 rounded border border-gray-700 flex items-start gap-4">
                    <Cloud className="w-6 h-6 text-cyber-neon shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-white">Cloud Security</h4>
                        <p className="text-sm text-gray-400">AWS, Terraform, Kubernetes, Docker, Falco, IAM</p>
                    </div>
                </div>
                <div className="p-4 bg-black/40 rounded border border-gray-700 flex items-start gap-4">
                    <Code className="w-6 h-6 text-purple-500 shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-white">Automation</h4>
                        <p className="text-sm text-gray-400">Python, Bash, Java, n8n, Semgrep, Trivy</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
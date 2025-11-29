import React from 'react';
import { Network, Code, Crosshair, Cloud, Shield, Settings, Briefcase } from 'lucide-react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Network': return <Network className="w-8 h-8 text-cyber-neon group-hover:text-cyber-black transition-colors duration-300" />;
      case 'Code': return <Code className="w-8 h-8 text-cyber-neon group-hover:text-cyber-black transition-colors duration-300" />;
      case 'Crosshair': return <Crosshair className="w-8 h-8 text-cyber-neon group-hover:text-cyber-black transition-colors duration-300" />;
      case 'Cloud': return <Cloud className="w-8 h-8 text-cyber-neon group-hover:text-cyber-black transition-colors duration-300" />;
      case 'Shield': return <Shield className="w-8 h-8 text-cyber-neon group-hover:text-cyber-black transition-colors duration-300" />;
      case 'Settings': return <Settings className="w-8 h-8 text-cyber-neon group-hover:text-cyber-black transition-colors duration-300" />;
      default: return <Briefcase className="w-8 h-8 text-cyber-neon group-hover:text-cyber-black transition-colors duration-300" />;
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-12">
        <h2 className="text-3xl font-mono font-bold text-cyber-neon">
          AVAILABLE_SERVICES
        </h2>
        <div className="h-px bg-gray-800 flex-grow"></div>
        <div className="text-xs font-mono text-gray-500">SEC_OPS_ENABLED</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, index) => (
          <div 
            key={index}
            className="group relative bg-gray-900/40 border border-gray-800 p-6 rounded-lg hover:bg-cyber-neon hover:border-cyber-neon transition-all duration-300"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 pointer-events-none">
              <Shield className="w-24 h-24" />
            </div>

            <div className="mb-6 p-3 bg-gray-900/80 rounded-lg w-fit group-hover:bg-cyber-black/20 border border-gray-700 group-hover:border-cyber-black/50 transition-colors">
              {getIcon(service.icon)}
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyber-black transition-colors font-mono">
              {service.title}
            </h3>
            
            <p className="text-gray-400 group-hover:text-cyber-black/80 transition-colors leading-relaxed">
              {service.description}
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-gray-500 group-hover:text-cyber-black/60">
              <span className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></span>
              ACTIVE
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
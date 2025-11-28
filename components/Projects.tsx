import React from 'react';
import { Layers, Github, ExternalLink, Folder } from 'lucide-react';
import { PROJECTS } from '../constants';

export const Projects: React.FC = () => {
  return (
    <div>
        <h2 className="text-3xl font-mono font-bold text-cyber-neon flex items-center gap-3 mb-12">
          <Layers className="w-8 h-8" />
          <span>PROJECT_DATABASE</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {PROJECTS.map((project) => (
                <div key={project.id} className="group bg-gray-900/20 border border-gray-800 rounded-lg p-6 hover:bg-gray-900/40 hover:border-cyber-neon/50 transition-all duration-300 relative overflow-hidden">
                    {/* Hover Glow Effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-neon to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-10 transition duration-1000 group-hover:duration-200"></div>

                    <div className="relative z-10 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-gray-800 rounded-lg text-cyber-neon">
                                <Folder className="w-6 h-6" />
                            </div>
                            <div className="flex gap-3">
                                {project.github && (
                                    <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                                        <Github className="w-5 h-5" />
                                    </a>
                                )}
                                {project.link && (
                                    <a href={project.link} className="text-gray-400 hover:text-white transition-colors">
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                )}
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-neon transition-colors">
                            {project.title}
                        </h3>
                        
                        <p className="text-gray-400 mb-6 flex-grow">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.techStack.map((tech) => (
                                <span key={tech} className="text-xs font-mono text-gray-500">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};
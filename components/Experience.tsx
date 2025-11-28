import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { EXPERIENCE } from '../constants';

export const Experience: React.FC = () => {
  return (
    <div>
       <h2 className="text-3xl font-mono font-bold text-cyber-neon flex items-center gap-3 mb-12">
          <Briefcase className="w-8 h-8" />
          <span>EMPLOYMENT_LOGS</span>
        </h2>

        <div className="relative border-l border-gray-800 ml-3 md:ml-6 space-y-12">
            {EXPERIENCE.map((job, index) => (
                <div key={job.id} className="relative pl-8 md:pl-12 group">
                    {/* Timeline Dot */}
                    <div className={`absolute -left-[5px] top-2 w-3 h-3 rounded-full border border-gray-900 transition-colors duration-300 ${index === 0 ? 'bg-cyber-neon shadow-[0_0_10px_#00f3ff]' : 'bg-gray-600 group-hover:bg-cyber-neon'}`}></div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-cyber-neon transition-colors">
                            {job.role} <span className="text-gray-500">@</span> <span className="text-cyber-green">{job.company}</span>
                        </h3>
                        <div className="flex items-center text-sm font-mono text-gray-500 mt-1 sm:mt-0">
                            <Calendar className="w-4 h-4 mr-2" />
                            {job.period}
                        </div>
                    </div>

                    <div className="bg-gray-900/30 rounded border border-gray-800/50 p-6 hover:border-gray-700 transition-all">
                        <ul className="space-y-2 mb-4">
                            {job.description.map((desc, i) => (
                                <li key={i} className="text-gray-400 flex items-start">
                                    <span className="mr-2 text-cyber-neon">›</span>
                                    {desc}
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 pt-2">
                            {job.skills.map(skill => (
                                <span key={skill} className="px-2 py-1 text-xs font-mono rounded bg-gray-800 text-gray-300 border border-gray-700">
                                    {skill}
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
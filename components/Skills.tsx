import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { SKILLS_DATA } from '../constants';
import { Activity } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h2 className="text-3xl font-mono font-bold text-cyber-neon flex items-center gap-3">
          <Activity className="w-8 h-8" />
          <span>SKILL_MATRIX</span>
        </h2>
        <p className="text-gray-400 leading-relaxed">
          My expertise spans AppSec, Cloud Security, and DevSecOps. I focus on automating workflows, 
          hardening containerized applications, and enforcing least privilege to eliminate risks.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {['ISC2 Certified in Cyber Security', 'Microsoft Certified Trainer', 'Azure Administrator', 'Ignite Hackathon Winner'].map((cert) => (
            <div key={cert} className="flex items-center gap-2 text-sm font-mono text-gray-300 border border-gray-800 p-3 rounded bg-gray-900/50">
              <div className="w-2 h-2 bg-cyber-green rounded-full"></div>
              {cert}
            </div>
          ))}
        </div>
      </div>

      <div className="h-[400px] w-full bg-gray-900/30 rounded-xl border border-gray-800 backdrop-blur-sm p-4 relative">
        <div className="absolute top-4 right-4 flex gap-2">
            <span className="text-xs text-gray-500 font-mono">RADAR_VIZ_MODULE</span>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SKILLS_DATA}>
            <PolarGrid stroke="#374151" />
            <PolarAngleAxis dataKey="subject" tick={{ fill: '#9CA3AF', fontSize: 12 }} />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
            <Radar
              name="Proficiency"
              dataKey="A"
              stroke="#00f3ff"
              strokeWidth={2}
              fill="#00f3ff"
              fillOpacity={0.2}
            />
            <Tooltip 
                contentStyle={{ backgroundColor: '#111', borderColor: '#333', color: '#fff' }}
                itemStyle={{ color: '#00f3ff' }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
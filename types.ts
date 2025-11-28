export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
  category: 'AppSec' | 'Network' | 'Cloud' | 'Tooling';
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
}

export enum SkillCategory {
  OFFENSIVE = 'Offensive Security',
  DEFENSIVE = 'Defensive Security',
  CLOUD = 'Cloud Security',
  GRC = 'GRC',
}
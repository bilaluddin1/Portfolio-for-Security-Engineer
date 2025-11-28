import React from 'react';
import { Shield, Lock, Globe, Server, Code, Database, Terminal } from 'lucide-react';
import { Project, ExperienceItem } from './types';

export const HERO_TITLES = [
  "Security Engineer",
  "Penetration Tester",
  "Cloud Security Architect",
  "Threat Hunter"
];

export const SKILLS_DATA = [
  { subject: 'NetSec', A: 95, fullMark: 100 },
  { subject: 'AppSec', A: 90, fullMark: 100 },
  { subject: 'Cloud (AWS/GCP)', A: 85, fullMark: 100 },
  { subject: 'Python/Go', A: 80, fullMark: 100 },
  { subject: 'Forensics', A: 70, fullMark: 100 },
  { subject: 'Cryptography', A: 75, fullMark: 100 },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'VulnScanner Pro',
    description: 'A custom automated vulnerability scanner built with Python and Go, specifically designed to detect misconfigured S3 buckets and exposed API keys in CI/CD pipelines.',
    techStack: ['Python', 'Go', 'AWS SDK', 'Docker'],
    github: '#',
    category: 'Tooling'
  },
  {
    id: '2',
    title: 'SecureMesh',
    description: 'Zero-trust service mesh implementation using Istio and Kubernetes. Implemented mTLS and rigorous authorization policies for a microservices architecture.',
    techStack: ['Kubernetes', 'Istio', 'Terraform', 'Azure'],
    link: '#',
    category: 'Cloud'
  },
  {
    id: '3',
    title: 'Bank Heist CTF',
    description: 'Designed and deployed a Capture The Flag challenge focusing on advanced SQL injection and XSS vectors for a local security conference.',
    techStack: ['Node.js', 'React', 'PostgreSQL', 'Kali Linux'],
    github: '#',
    category: 'AppSec'
  },
  {
    id: '4',
    title: 'LogSentinel',
    description: 'Real-time SIEM dashboard integrating with ElasticSearch to visualize and alert on anomalous login patterns using Machine Learning.',
    techStack: ['ELK Stack', 'Python', 'React', 'TensorFlow'],
    category: 'Network'
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: '1',
    role: 'Senior Security Engineer',
    company: 'Cyberdyne Systems',
    period: '2021 - Present',
    description: [
      'Led the transition to a Zero Trust architecture, reducing attack surface by 40%.',
      'Managed a team of 3 junior pentesters during quarterly red team engagements.',
      'Implemented automated security scanning in GitHub Actions pipelines.'
    ],
    skills: ['AWS', 'Kubernetes', 'Python', 'Terraform']
  },
  {
    id: '2',
    role: 'Security Analyst',
    company: 'Global Corp Bank',
    period: '2018 - 2021',
    description: [
      'Monitored SIEM for potential breaches and conducted incident response.',
      'Performed vulnerability assessments on internal web applications.',
      'Co-authored the company-wide password policy and MFA rollout.'
    ],
    skills: ['Splunk', 'Burp Suite', 'Nessus', 'Linux']
  },
  {
    id: '3',
    role: 'Junior SysAdmin',
    company: 'TechStart Inc.',
    period: '2016 - 2018',
    description: [
      'Managed Linux server fleets and hardened OS configurations.',
      'Scripted daily backups and automated patch management.',
    ],
    skills: ['Bash', 'Linux', 'Networking', 'Firewalls']
  }
];
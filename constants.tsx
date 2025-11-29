import React from 'react';
import { Shield, Lock, Globe, Server, Code, Database, Terminal } from 'lucide-react';
import { Project, ExperienceItem } from './types';

export const HERO_TITLES = [
  "Security Engineer",
  "DevSecOps Specialist",
  "Cloud Security Architect",
  "AppSec Researcher"
];

export const SKILLS_DATA = [
  { subject: 'AppSec', A: 90, fullMark: 100 },
  { subject: 'Cloud Security', A: 95, fullMark: 100 },
  { subject: 'DevSecOps', A: 85, fullMark: 100 },
  { subject: 'Automation', A: 80, fullMark: 100 },
  { subject: 'Container Sec', A: 85, fullMark: 100 },
  { subject: 'Mobile Sec', A: 75, fullMark: 100 },
];

export const SERVICES = [
  {
    title: "Architecture Review",
    description: "Comprehensive security assessment of system design and infrastructure to identify structural flaws before deployment. focusing on secure design principles.",
    icon: "Network"
  },
  {
    title: "Source Code Review",
    description: "In-depth manual and automated analysis of source code (Java, Kotlin, Python) to detect logic errors, hardcoded secrets, and injection vulnerabilities.",
    icon: "Code"
  },
  {
    title: "Penetration Testing",
    description: "Offensive security testing for Web Applications, Mobile Apps (Android/iOS), and APIs to simulate real-world attacks and uncover critical risks.",
    icon: "Crosshair"
  },
  {
    title: "Cloud Security",
    description: "Hardening AWS/Kubernetes environments, IAM policy audits, configuration reviews, and implementing DevSecOps pipelines.",
    icon: "Cloud"
  },
  {
    title: "Threat Modeling",
    description: "Proactive identification of potential attack vectors and security risks using STRIDE and other methodologies for critical features.",
    icon: "Shield"
  },
  {
    title: "Tooling Strategy",
    description: "Expert recommendations on selecting and integrating the best security tools (SAST, DAST, SIEM, WAF) tailored to your specific technology stack.",
    icon: "Settings"
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Vuln Management Program',
    description: 'Deployed a comprehensive vulnerability management program by integrating Prowler with DefectDojo to automate ingestion and triage of AWS misconfigurations, reducing reporting overhead by 50%.',
    techStack: ['Prowler', 'DefectDojo', 'AWS', 'Python'],
    github: '#',
    category: 'Cloud'
  },
  {
    id: '2',
    title: 'Secure SDLC Pipeline',
    description: 'Engineered a secure SDLC within the CI/CD pipeline by embedding Dependabot, Semgrep, and Trivy for automated scanning and custom policy enforcement, boosting scan accuracy by 70%.',
    techStack: ['GitHub Actions', 'Semgrep', 'Trivy', 'Dependabot'],
    category: 'Tooling'
  },
  {
    id: '3',
    title: 'K8s Hardening & Runtime Sec',
    description: 'Hardened containerized applications by implementing Kubernetes security contexts, enforcing least privilege with RBAC, and deploying Falco for real-time runtime anomaly detection.',
    techStack: ['Kubernetes', 'Kyverno', 'OPA', 'Falco'],
    category: 'Cloud'
  },
  {
    id: '4',
    title: 'Wazuh SIEM Deployment',
    description: 'Increased incident response speed by 40% and improved Cloud visibility by deploying Wazuh SIEM, integrating diverse data sources, and automating detection with custom rule sets.',
    techStack: ['Wazuh', 'SIEM', 'ElasticSearch', 'Automation'],
    category: 'Network'
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: '1',
    role: 'Security Engineer',
    company: 'Bazaar Technologies',
    period: 'June 2024 - Present',
    description: [
      'Reduced critical security vulnerabilities by 40% in Java/Kotlin microservices APIs through hands-on code reviews.',
      'Conducted threat modeling and secure architecture reviews for critical financial integrations.',
      'Managed AWS WAF to protect web apps from OWASP Top 10 vulnerabilities.',
      'Reduced excessive IAM permissions by 40% by redesigning roles and enforcing least privilege.'
    ],
    skills: ['AWS WAF', 'Burp Suite', 'MOBSF', 'Java/Kotlin']
  },
  {
    id: '2',
    role: 'B.S. Computer Science',
    company: 'Mohammad Ali Jinnah University',
    period: '2020 - 2024',
    description: [
      'Graduated with Dean’s Honors (Faculty of Computing - 2023).',
      'Achieved 5th position in Ignite Hackathon 2023.',
      'Specialized in Security Engineering and Cloud Infrastructure.'
    ],
    skills: ['Computer Science', 'Research', 'Leadership']
  }
];
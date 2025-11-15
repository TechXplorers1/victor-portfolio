
export interface ExperienceItem {
    date: string;
    role: string;
    company: string;
    description: string[];
}

export interface SkillCategory {
    title: string;
    skills: string[];
}

export interface ProjectItem {
    title: string;
    description: string;
    tags: string[];
    link?: string;
}

export interface EducationItem {
    date: string;
    degree: string;
    institution: string;
}

export interface CertificationItem {
    title: string;
    issuer: string;
}

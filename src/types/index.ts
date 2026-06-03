export interface Skill {
    name: string;
    color: string;
    icon: string;
  }
  
  export interface Project {
    title: string;
    desc: string;
    tech: string[];
    featured: boolean;
    accent: string;
    demo : string;
  }
  
  export interface Certification {
    title: string;
    issuer: string;
    year: string;
  }
  
  export interface ContactInfo {
    label: string;
    value: string;
    href: string;
    icon: React.ReactNode;
  }
  
  export interface FormState {
    name: string;
    email: string;
    message: string;
  }
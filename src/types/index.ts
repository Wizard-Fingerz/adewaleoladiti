export interface Project {
  title: string;
  slug: string;
  category: string;
  description: string;
  problem: string;
  role: string;
  responsibilities: string[];
  technologies: string[];
  features: string[];
  architecture?: string;
  outcome?: string;
  images?: string[];
  links?: {
    live?: string;
    github?: string;
  };
  status: string;
  projectType: 'featured' | 'venture' | 'other';
}

export interface Experience {
  organization: string;
  role: string;
  startDate: string;
  endDate?: string;
  location?: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  category: string;
}

export interface Capability {
  category: string;
  capability: string;
  description: string;
  evidence?: string;
}

export interface Venture {
  name: string;
  description: string;
  status: string;
  thesis: string;
  areas: string[];
  role: string;
  website?: string;
}

export interface ContactCategory {
  id: string;
  title: string;
  description: string;
  emailSubject: string;
}

import { Experience } from '@/types';

export interface AdditionalExperience {
  title: string;
  organization: string;
  description: string;
  institutions?: string[];
  dates?: string;
}

export const experience: Experience[] = [
  {
    organization: "Xpress Access Data Solutions",
    role: "Full-Stack Developer",
    startDate: "May 2024",
    endDate: "Present",
    location: "Nigeria",
    description: "Building electronic health record systems for healthcare providers.",
    responsibilities: [
      "Full-stack development using Django and React",
      "API design and implementation",
      "Database architecture and optimization",
      "Authentication and authorization systems",
      "Payment integration with Paystack"
    ],
    technologies: ["Django", "Python", "React", "PostgreSQL", "Paystack", "JWT"],
    category: "Healthcare / EHR"
  },
  {
    organization: "Flourish Prime Technologies",
    role: "Senior Software Engineer — Contract",
    startDate: "2025",
    endDate: "2026",
    location: "Nigeria",
    description: "Leading technical delivery for learning management system development.",
    responsibilities: [
      "Senior software engineering for LMS platform",
      "Technical delivery coordination",
      "DevOps and CI/CD implementation",
      "Cloud infrastructure setup on AWS",
      "Team coordination across developers and designers"
    ],
    technologies: ["Django", "React", "PostgreSQL", "Docker", "GitHub Actions", "AWS", "Cloudflare"],
    category: "Education / LMS"
  },
  {
    organization: "Grazconcepts Limited",
    role: "Software Engineer — Contract / Freelance",
    startDate: "2025",
    endDate: "2026",
    location: "Nigeria",
    description: "End-to-end development of travel and fintech platform.",
    responsibilities: [
      "Sole developer for travel platform",
      "Requirements gathering and analysis",
      "Full-stack development",
      "Payment integration (Paystack, Flutterwave)",
      "Production deployment"
    ],
    technologies: ["Python", "React", "Paystack", "Flutterwave", "Render", "Vercel"],
    category: "Travel / FinTech"
  },
  {
    organization: "Adutem Innovation",
    role: "Frontend Developer — Contract / Freelance",
    startDate: "Jan 2024",
    endDate: "Jun 2025",
    location: "Nigeria",
    description: "Frontend development for various client projects.",
    responsibilities: [
      "Frontend development with React",
      "UI implementation from designs",
      "State management",
      "API integration"
    ],
    technologies: ["React", "TypeScript", "JavaScript", "CSS"],
    category: "Software Development"
  },
  {
    organization: "World Wide Web 2geda Technology Limited",
    role: "Full-Stack Developer",
    startDate: "Jul 2023",
    endDate: "Dec 2023",
    location: "Nigeria",
    description: "Full-stack development for web applications.",
    responsibilities: [
      "Full-stack web development",
      "Backend API development",
      "Frontend implementation",
      "Database design"
    ],
    technologies: ["Python", "Django", "React", "PostgreSQL"],
    category: "Software Development"
  },
  {
    organization: "Semaver, Inc.",
    role: "UI/UX Designer — Contract",
    startDate: "Jul 2022",
    endDate: "Dec 2022",
    location: "Lagos, Nigeria",
    description: "UI/UX design for client projects.",
    responsibilities: [
      "User interface design",
      "User experience design",
      "Wireframing and prototyping",
      "Design system development"
    ],
    technologies: ["Figma", "Adobe XD", "Sketch"],
    category: "Design"
  },
  {
    organization: "First Technical University ICT Department",
    role: "Software Engineering Intern",
    startDate: "2021",
    endDate: "2022",
    location: "Nigeria",
    description: "Software engineering internship focused on practical development experience.",
    responsibilities: [
      "Software development",
      "Learning industry best practices",
      "Collaborative development",
      "Code review and testing"
    ],
    technologies: ["Python", "Django", "JavaScript"],
    category: "Education"
  }
];

export const additionalExperience: AdditionalExperience[] = [
  {
    title: "Python & Computer Science Tutor / Mentor",
    organization: "Multiple Institutions",
    description: "Teaching Python programming and computer science concepts to students.",
    institutions: [
      "AppClick ICT Academy",
      "Erudite Group of Schools",
      "Great Messiah International School"
    ],
    dates: "2024 - 2026"
  },
  {
    title: "Google Developer Student Club Web Lead",
    organization: "First Technical University",
    description: "Leading web development initiatives and community events.",
    dates: "2022 - 2023"
  },
  {
    title: "NACOS Leadership",
    organization: "First Technical University",
    description: "Leadership role in Nigeria Association of Computing Students.",
    dates: "2022 - 2023"
  }
];

import { Project } from '@/types';

export const projects: Project[] = [
  {
    title: "Electronic Health Record Platform",
    slug: "electronic-health-record-platform",
    category: "Healthcare Technology",
    description: "A production Electronic Health Record platform supporting fertility and general medical practices with comprehensive patient management and clinical workflows.",
    problem: "Medical practices needed a unified system to manage patient records, clinical workflows, and care coordination across multiple healthcare providers.",
    role: "Full-Stack Developer",
    responsibilities: [
      "API and database architecture design",
      "Backend development with Django REST Framework",
      "Frontend development with React",
      "JWT authentication and RBAC implementation",
      "Payment integration with Paystack",
      "In-app wallet system development"
    ],
    technologies: ["Django", "Python", "React", "PostgreSQL", "NoSQL", "Paystack", "JWT"],
    features: [
      "Patient records management",
      "Clinical workflows",
      "Care coordination",
      "REST APIs",
      "Database architecture",
      "JWT authentication",
      "Role-based access control (RBAC)",
      "Multi-role support (Doctor, Nurse, Receptionist, Patient)",
      "In-app wallet",
      "Paystack payment integration"
    ],
    architecture: "Django REST Framework backend with React frontend, PostgreSQL for structured data and NoSQL for flexible clinical records, JWT-based authentication with role-based permissions.",
    outcome: "Production system supporting fertility and general medical practices with improved patient record management and care coordination.",
    projectType: "featured",
    status: "Production"
  },
  {
    title: "Learning Management System",
    slug: "learning-management-system",
    category: "Education Technology",
    description: "A comprehensive learning management system with course management, community features, organizations, and AI-assisted course generation.",
    problem: "Educational institutions needed a scalable platform to manage courses, communities, and organizational learning with advanced features like CV parsing and AI assistance.",
    role: "Senior Software Engineer / Technical Delivery",
    responsibilities: [
      "Technical delivery and coordination",
      "Backend development with Django",
      "Frontend development with React",
      "DevOps and CI/CD pipeline setup",
      "Cloud infrastructure on AWS",
      "Coordination across developers and designers"
    ],
    technologies: ["Django", "React", "PostgreSQL", "Docker", "GitHub Actions", "AWS", "Cloudflare"],
    features: [
      "Course management",
      "Community features",
      "Organizations",
      "User onboarding",
      "CV parsing",
      "AI-assisted course generation",
      "Organization-specific RBAC",
      "Docker containerization",
      "CI/CD pipeline",
      "AWS deployment",
      "Cloudflare CDN"
    ],
    architecture: "Django backend with React frontend, PostgreSQL database, Docker containerization, GitHub Actions for CI/CD, AWS cloud infrastructure with Cloudflare CDN.",
    outcome: "Fully functional LMS deployed to production with automated CI/CD pipeline and cloud infrastructure.",
    projectType: "featured",
    status: "Production"
  },
  {
    title: "Travel & FinTech Platform",
    slug: "travel-fintech-platform",
    category: "Travel / FinTech",
    description: "A travel and tour platform with hotel reservations, value-added services, and integrated payment processing for seamless travel experiences.",
    problem: "Travel agencies needed a comprehensive platform to manage tours, hotel reservations, and payments with a seamless user experience.",
    role: "Sole Developer",
    responsibilities: [
      "Client requirements gathering",
      "End-to-end development",
      "System architecture design",
      "Payment integration (Paystack, Flutterwave)",
      "Deployment to production"
    ],
    technologies: ["Python", "React", "Paystack", "Flutterwave", "Render", "Vercel"],
    features: [
      "Travel and tour platform",
      "Hotel reservations",
      "Value-added services",
      "Payment processing",
      "User management",
      "Booking system"
    ],
    architecture: "Python backend with React frontend, dual payment gateway integration (Paystack and Flutterwave), deployed on Render and Vercel.",
    outcome: "End-to-end delivery from requirements to production deployment, providing a complete travel booking solution.",
    projectType: "featured",
    status: "Production"
  },
  {
    title: "Nkowe",
    slug: "nkowe",
    category: "Education Infrastructure",
    description: "Reimagining Education as Infrastructure - A learner's educational identity that exists beyond individual schools, portals and fragmented systems.",
    problem: "Student educational data is fragmented across schools, portals, and systems, making it difficult to track longitudinal progress and provide continuity.",
    role: "Founder / Systems Designer",
    responsibilities: [
      "Concept development and systems thinking",
      "Educational infrastructure design",
      "Student identity architecture",
      "Learning journey mapping"
    ],
    technologies: ["Concept Phase", "Systems Design"],
    features: [
      "Persistent student identity",
      "Longitudinal educational history",
      "Student academic records",
      "School infrastructure",
      "Teacher infrastructure",
      "Parent participation",
      "Government/institutional stakeholder integration",
      "Computer-based testing (CBT)",
      "Assessment systems",
      "Report cards",
      "Timetabling",
      "Curriculum/scheme of work/syllabus distinction",
      "Teacher networks",
      "Practical learning",
      "Virtual laboratories",
      "Age-adaptive learning",
      "Education community"
    ],
    architecture: "Conceptual system architecture designed around persistent student identity with interconnected educational infrastructure components.",
    outcome: "Concept and systems design phase - exploring how to build educational infrastructure that transcends individual institutional boundaries.",
    projectType: "venture",
    status: "Concept Phase"
  },
  {
    title: "Electroll",
    slug: "electroll",
    category: "Business Systems",
    description: "Building systems for African businesses and institutions - A technology/business systems venture focused on operational efficiency and digital transformation.",
    problem: "Africa is blessed with resources, but many of its systems remain inefficient. Organizations need better systems, not just more software.",
    role: "Founder / Systems Architect",
    responsibilities: [
      "Venture concept development",
      "Business systems thinking",
      "Digital transformation strategy",
      "Operational systems design"
    ],
    technologies: ["Strategic Planning", "Systems Design"],
    features: [
      "Business technology consulting",
      "Digital transformation",
      "Business operations optimization",
      "Institutional systems",
      "Agro-processing systems",
      "Education technology",
      "Healthcare systems",
      "Technology infrastructure",
      "Business intelligence",
      "Operational coordination"
    ],
    architecture: "Systems thinking approach to organizational challenges, focusing on the intersection of technology, operations, and business processes.",
    outcome: "Venture concept and strategic planning phase - exploring how to build better systems for African businesses and institutions.",
    projectType: "venture",
    status: "Concept Phase"
  }
];

export const otherProjects: Project[] = [
  {
    title: "Mobile Applications",
    slug: "mobile-applications",
    category: "Software",
    description: "Various mobile applications built with Flutter and React Native for different use cases.",
    problem: "Different clients needed mobile solutions for their specific requirements.",
    role: "Mobile Developer",
    responsibilities: [
      "Mobile app development",
      "UI/UX implementation",
      "API integration",
      "Testing and deployment"
    ],
    technologies: ["Flutter", "React Native"],
    features: ["Cross-platform development", "Native performance", "API integration"],
    projectType: "other",
    status: "Various"
  },
  {
    title: "UI/UX Design Projects",
    slug: "ui-ux-design-projects",
    category: "UI/UX",
    description: "User interface and user experience design projects for various applications and platforms.",
    problem: "Products needed intuitive and visually appealing user interfaces.",
    role: "UI/UX Designer",
    responsibilities: [
      "User research",
      "Wireframing",
      "Prototyping",
      "Visual design"
    ],
    technologies: ["Figma", "Adobe XD", "Sketch"],
    features: ["User-centered design", "Responsive layouts", "Design systems"],
    projectType: "other",
    status: "Various"
  },
  {
    title: "Technical Prototypes",
    slug: "technical-prototypes",
    category: "Research / Experiments",
    description: "Experimental projects and technical prototypes exploring new technologies and approaches.",
    problem: "Exploring new technologies and solving technical challenges through experimentation.",
    role: "Developer / Researcher",
    responsibilities: [
      "Technical research",
      "Prototype development",
      "Testing and validation"
    ],
    technologies: ["Various"],
    features: ["Rapid prototyping", "Technology exploration", "Proof of concepts"],
    projectType: "other",
    status: "Experimental"
  }
];

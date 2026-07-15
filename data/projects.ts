import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Hospital E-Logbook",
    category: "Full-Stack System",
    description:
      "A web-based activity tracking system for nurses at Dr. Oen Solo Baru Hospital, built to improve logging accuracy, monitoring, and supervisor visibility.",
    stack: ["Laravel 11", "Tailwind CSS", "PostgreSQL"],
    year: "2025",
    href: "#contact",
    imageAlt: "Preview of the hospital E-Logbook project",
    metrics: ["Clinical task logging", "Scoring logic", "Excel reporting"],
  },
  {
    title: "Hospital E-Learning Platform",
    category: "Frontend System",
    description:
      "A training platform for hospital staff featuring pre- and post-tests, automated certificates, and role-based access control.",
    stack: ["Next.js", "TypeScript", "NestJS", "PostgreSQL"],
    year: "2025",
    href: "#contact",
    imageAlt: "Preview of the hospital e-learning platform",
    metrics: ["Pre/post tests", "Certificates", "Role-based access"],
  },
  {
    title: "HRIS & Recruitment Platform",
    category: "AI-Assisted Product",
    description:
      "A responsive HRIS and recruitment interface with AI-powered CV parsing, automated scoring, and candidate evaluation workflows.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Golang APIs"],
    year: "2026",
    href: "#contact",
    imageAlt: "Preview of the HRIS and recruitment platform",
    metrics: ["100+ applicants", "85% accuracy", "50% faster performance"],
  },
];

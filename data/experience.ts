import type { ExperienceItem } from "@/types/experience";

export const experience: ExperienceItem[] = [
  {
    period: "Apr 2025 - Jul 2025",
    role: "Full-Stack Web Developer Intern",
    company: "Dr. Oen Solo Baru Hospital",
    location: "Surakarta, Indonesia",
    description:
      "Worked on two internal systems: an E-Logbook for nurse activity tracking and an E-Learning platform for hospital-wide training management.",
    achievements: [
      "Built the E-Logbook with Laravel 11, Tailwind CSS, and PostgreSQL.",
      "Implemented clinical task logging, scoring logic, authentication, and Excel-based reporting.",
      "Delivered a working prototype currently being tested in the nursing department.",
    ],
  },
  {
    period: "Aug 2025 - May 2026",
    role: "Front End Developer Intern",
    company: "PT Soluix Finteknologi Indonesia",
    location: "Tangerang, Indonesia",
    description:
      "Developed a responsive HRIS and recruitment platform interface covering employee data, organizational structure, recruitment workflows, and reimbursement systems.",
    achievements: [
      "Built a career portal and online assessment platform used by 100+ applicants.",
      "Integrated AI-powered features such as CV parsing, assessment generation, automated scoring, and emotion analysis.",
      "Improved page performance by 50% through optimized state management and Golang API integration.",
    ],
  },
  {
    period: "Jan 2024 - Jan 2025",
    role: "Promotion and Aspirations Division Member",
    company: "Student Association of Information Systems, FTI UKSW",
    location: "Salatiga, Indonesia",
    description:
      "Supported documentation and managed HMPSI's TikTok and Instagram presence while helping improve student engagement.",
    achievements: [
      "Helped the new HMPSI TikTok account reach an average of 166 likes per month and 1,300+ total likes.",
      "Contributed to activity documentation and promotional content strategy.",
      "Improved visibility and involvement in both academic and non-academic activities.",
    ],
  },
];

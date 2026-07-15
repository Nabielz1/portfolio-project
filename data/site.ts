export const siteContent = {
  brand: {
    name: "Rifqi Nabil Akbar",
    role: "Full-Stack Web Developer · Frontend Engineer · Information Systems Graduate",
  },
  navigation: [
    { label: "Hero", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Tech Stack", href: "#tech-stack" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  sections: [
    { label: "Hero", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Tech Stack", href: "#tech-stack" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Software Engineer",
    title: "Hi, I'm Rifqi Nabil Akbar.",
    description:
      "Information Systems graduate at Satya Wacana Christian University with hands-on experience in full-stack development, frontend engineering, system design, business analysis, and data analysis.",
    tags: ["Full-stack Development", "Frontend Engineering", "AI-assisted Workflows"],
    primaryAction: { label: "View Projects", href: "#projects" },
    secondaryAction: { label: "Get in Touch", href: "#contact" },
    availability: "Open to internships, collaborations, and software engineering opportunities.",
  },
  about: {
    heading: "Building digital products with clarity, performance, and business context.",
    paragraphs: [
      "As a graduate in Information Systems with a 3.90/4.00 GPA, I combine engineering discipline with analytical thinking. I have built internal systems such as an E-Logbook for nurse activity tracking, an E-Learning platform for hospital-wide training, and an HRIS recruitment platform with AI-assisted workflows.",
      "My focus is on transforming business requirements into intuitive, scalable interfaces that are straightforward to maintain, performant to ship, and clear for users to understand.",
    ],
    highlight:
      "Recognized in national UI/UX competitions and trusted in internship environments where reliability, communication, and product clarity matter.",
  },
  contact: {
    heading: "Let’s build a portfolio that reflects your engineering strengths.",
    description:
      "If you want to discuss frontend engineering, full-stack products, internships, or freelance collaboration, this is the best place to reach me.",
    email: "rifqiiakbar12@gmail.com",
    availability: "Open to internships, freelance work, and remote collaboration.",
  },
  footer: {
    note: "Built with Next.js, TypeScript, and a static-first architecture that is easy to edit.",
  },
} as const;

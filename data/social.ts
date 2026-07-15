export type SocialPlatform = "github" | "linkedin" | "instagram" | "dribbble" | "mail";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
}

export const socialLinks: SocialLink[] = [
  { platform: "github", label: "GitHub", href: "https://github.com/" },
  { platform: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/rifqi-nabil-akbar/" },
  { platform: "instagram", label: "Instagram", href: "https://instagram.com/" },
  { platform: "dribbble", label: "Portfolio", href: "https://portfolio-rifqi-nabil-akbars-projects.vercel.app/" },
  { platform: "mail", label: "Email", href: "mailto:rifqiiakbar12@gmail.com" },
];

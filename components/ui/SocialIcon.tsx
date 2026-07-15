import { FaDribbble, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import type { SocialPlatform } from "@/data/social";

interface SocialIconProps {
  platform: SocialPlatform;
  className?: string;
}

const iconMap: Record<SocialPlatform, ReactNode> = {
  github: <FaGithub />,
  linkedin: <FaLinkedinIn />,
  instagram: <FaInstagram />,
  dribbble: <FaDribbble />,
  mail: <FiMail />,
};

export function SocialIcon({ platform, className }: SocialIconProps) {
  return <span className={cn("text-lg", className)}>{iconMap[platform]}</span>;
}

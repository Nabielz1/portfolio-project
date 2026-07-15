import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles/animations.css";
import "@/styles/utilities.css";
import "@/styles/scrollbar.css";

import { ThemeBackground } from "@/components/layout/ThemeBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rifqi Nabil Akbar | Software Engineer Portfolio",
  description:
    "Modern software engineer portfolio for Rifqi Nabil Akbar, featuring experience, projects, and contact details.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-transparent text-white">
        <ThemeBackground />
        {children}
      </body>
    </html>
  );
}

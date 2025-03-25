import React from "react";

interface SocialIconProps {
  children: React.ReactNode;
  href: string;
}

export function SocialIcon({ children, href }: SocialIconProps) {
  return (
    <a 
      href={href} 
      className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary/20 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
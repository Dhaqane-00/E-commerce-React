import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const SocialIcons = () => {
  const icons = [
    { Icon: Facebook, ariaLabel: "Facebook", href: "https://facebook.com" },
    { Icon: Twitter, ariaLabel: "Twitter", href: "https://twitter.com" },
    { Icon: Instagram, ariaLabel: "Instagram", href: "https://instagram.com" },
    { Icon: Linkedin, ariaLabel: "LinkedIn", href: "https://linkedin.com" },
  ];

  return (
    <div className="flex gap-6 items-start self-start mt-6">
      {icons.map(({ Icon, ariaLabel, href }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          <Icon className="w-6 h-6 text-white cursor-pointer hover:text-gray-300 transition-colors" />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;

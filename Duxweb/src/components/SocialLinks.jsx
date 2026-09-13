import { Music2 } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./BrandIcons";
import { socials } from "../data/socials";

const iconMap = {
  Linkedin: LinkedinIcon,
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  Music2,
};

export default function SocialLinks({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socials.map(({ label, icon, href }) => {
        const Icon = iconMap[icon];
        return (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-current/15 hover:border-dux-yellow hover:text-dux-yellow-dark transition-colors"
          >
            <Icon size={16} />
          </a>
        );
      })}
    </div>
  );
}

import { Linkedin, Mail, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © 2026 Muhammad Hunain Hussain. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {[
            { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-hunain-hussain-305a90382" },
            { icon: Mail, href: "mailto:hunainakramhussain12345@gmail.com" },
            { icon: Github, href: "https://github.com" },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

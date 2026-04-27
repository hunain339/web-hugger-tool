import { Linkedin, Mail, Github, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-6 relative">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © 2026 Muhammad Hunain Hussain. Crafted with care.
        </p>
        <div className="flex items-center gap-3">
          {[
            { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-hunain-hussain-305a90382", label: "LinkedIn" },
            { icon: Github, href: "https://github.com/hunain339", label: "GitHub" },
            { icon: Mail, href: "mailto:hunainakramhussain12345@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
            >
              <Icon size={14} />
            </a>
          ))}
          <a
            href="#home"
            aria-label="Back to top"
            className="ml-2 w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform shadow-glow"
          >
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

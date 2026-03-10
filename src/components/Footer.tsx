import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © 2025 M. Taha Sattar. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: "https://github.com" },
            { icon: Linkedin, href: "https://pk.linkedin.com/in/taha-arain" },
            { icon: Twitter, href: "https://twitter.com/iamfunterpie" },
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

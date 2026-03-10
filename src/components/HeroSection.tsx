import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(168 80% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(168 80% 50% / 0.3) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-6"
        >
          CS Student · Python Developer · Web Designer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-[1.05] mb-6"
        >
          <span className="text-foreground">Muhammad</span>{" "}
          <span className="text-gradient-primary">Hunain</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Computer Science student from Karachi building real-world web systems.
          Junior Web Designer at{" "}
          <span className="text-foreground font-medium">Alpha Orbit</span>.
          Exploring Python, Django, and modern frontend development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-5 mb-16"
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-glow"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-foreground font-semibold text-sm hover:bg-secondary transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="flex items-center justify-center gap-5"
        >
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
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors animate-bounce">
            <ArrowDown size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

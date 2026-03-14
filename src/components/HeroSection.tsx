import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profilePic from "@/assets/mypic.jpeg";

const roles = [
  "CS Student",
  "Python Developer",
  "Web Designer",
  "Django Enthusiast",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (displayed.length < currentRole.length) {
        timeout = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden"
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(0 72% 51% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(0 72% 51% / 0.3) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Floating shapes */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[10%] w-3 h-3 rounded-full bg-primary/20 blur-[1px]"
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 right-[15%] w-2 h-2 rounded-full bg-primary/15 blur-[1px]"
      />
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/3 left-[20%] w-4 h-4 rounded-full bg-primary/10 blur-sm"
      />

      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-6 h-5"
            >
              {displayed}
              <span className="inline-block w-[2px] h-4 bg-primary ml-0.5 animate-pulse align-middle" />
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.05] mb-6"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-foreground"
              >
                Muhammad
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-gradient-primary"
              >
                Hunain
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              Computer Science student from Karachi building real-world web systems.
              Junior Web Designer at{" "}
              <span className="text-foreground font-medium">Alpha Orbit</span>.
              Exploring Python, Django, and modern frontend development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="flex items-center justify-center md:justify-start gap-5 mb-10"
            >
              <a
                href="#about"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-glow"
              >
                Learn More
                <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-foreground font-semibold text-sm hover:bg-secondary hover:border-primary/40 hover:scale-105 transition-all duration-300"
              >
                Get in Touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex items-center justify-center md:justify-start gap-5"
            >
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-hunain-hussain-305a90382", label: "LinkedIn profile" },
                { icon: Mail, href: "mailto:hunainakramhussain12345@gmail.com", label: "Send email" },
                { icon: Github, href: "https://github.com/hunain339", label: "GitHub profile" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:scale-110 hover:shadow-glow transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <div className="relative group">
              <div className="absolute -inset-1 rounded-full bg-gradient-primary opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-primary/30 shadow-glow">
                <img
                  src={profilePic}
                  alt="Muhammad Hunain Hussain"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" aria-label="Scroll to about section" className="text-muted-foreground hover:text-primary transition-colors animate-bounce">
          <ArrowDown size={20} />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;

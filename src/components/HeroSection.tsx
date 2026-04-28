import { motion } from "framer-motion";
import { useEffect, useState, lazy, Suspense } from "react";
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles } from "lucide-react";
import profilePic from "@/assets/mypic.jpeg";

const Hero3DScene = lazy(() => import("./Hero3DScene"));

const roles = [
  "Full-Stack Developer",
  "Computer Science Student",
  "Python Engineer",
  "UI/UX Enthusiast",
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
        timeout = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 70);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
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
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-24 pb-16"
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* 3D animated scene */}
      <Suspense fallback={null}>
        <Hero3DScene />
      </Suspense>


      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/3 w-[700px] h-[700px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      {/* Floating dots */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[10%] w-2 h-2 rounded-full bg-primary/40"
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 right-[15%] w-1.5 h-1.5 rounded-full bg-primary/50"
      />
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/3 left-[20%] w-3 h-3 rounded-full bg-primary/20 blur-sm"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur text-xs font-medium text-muted-foreground mb-6"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
              </span>
              Available for opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-5 text-foreground"
            >
              Muhammad{" "}
              <span className="text-gradient-primary">Hunain</span>
              <br />
              Hussain
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-lg md:text-xl font-medium text-muted-foreground mb-6 h-7 flex items-center justify-center md:justify-start gap-2"
            >
              <Sparkles size={16} className="text-primary" />
              <span>{displayed}</span>
              <span className="inline-block w-[2px] h-5 bg-primary animate-pulse" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="text-base md:text-lg text-muted-foreground max-w-xl mb-9 leading-relaxed"
            >
              CS student from Karachi crafting scalable, user-centric web applications with
              <span className="text-foreground font-medium"> React</span>,
              <span className="text-foreground font-medium"> Python</span>, and
              <span className="text-foreground font-medium"> Django</span>. Currently a Junior Web Designer at Alpha Orbit.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-10"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 hover:scale-[1.03] transition-all duration-300 shadow-glow"
              >
                Explore My Projects
                <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card text-foreground font-semibold text-sm hover:border-primary/50 hover:bg-secondary hover:scale-[1.03] transition-all duration-300"
              >
                <Download size={14} />
                Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="flex items-center justify-center md:justify-start gap-3"
            >
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
                  className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:scale-110 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <div className="relative group">
              {/* Rotating gradient ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-full bg-gradient-primary opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500"
              />
              <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-primary/40 shadow-glow">
                <img
                  src={profilePic}
                  alt="Muhammad Hunain Hussain"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 -right-2 px-3 py-1.5 rounded-full bg-card border border-border shadow-card text-xs font-semibold text-foreground flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Karachi, PK
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ opacity: { delay: 1.2 }, y: { duration: 2, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
};

export default HeroSection;

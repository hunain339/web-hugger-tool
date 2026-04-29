import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import { ArrowDown, Github, Linkedin, Mail, Download, MapPin } from "lucide-react";
import hLogo from "@/assets/h-logo.png";
import MagneticButton from "./MagneticButton";

const Hero3DScene = lazy(() => import("./Hero3DScene"));

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-24 pb-16"
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Faint circuit / code lines vibe via 3D scene */}
      <Suspense fallback={null}>
        <Hero3DScene />
      </Suspense>

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/3 w-[700px] h-[700px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-[auto,1fr] items-center gap-10 md:gap-16">
          {/* Metallic H Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative flex-shrink-0 mx-auto md:mx-0"
            style={{ perspective: 1000 }}
          >
            {/* Glow halo */}
            <div className="absolute inset-0 rounded-[28%] bg-primary/30 blur-3xl scale-90 -z-10" />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <img
                src={hLogo}
                alt="Muhammad Hunain Hussain — H monogram"
                width={320}
                height={320}
                className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain drop-shadow-[0_20px_60px_hsl(var(--primary)/0.45)]"
              />
              {/* Reflective floor */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-gradient-to-b from-primary/30 to-transparent blur-2xl rounded-full" />
            </motion.div>
          </motion.div>

          {/* Text */}
          <div className="text-center md:text-left">
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
              Open to Internship Opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight uppercase leading-[1.05] mb-4 text-foreground text-balance"
            >
              Muhammad Hunain <span className="text-gradient-primary">Hussain</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="text-lg md:text-2xl font-semibold text-primary mb-5 tracking-tight"
            >
              Backend Developer <span className="text-muted-foreground/60 font-normal">|</span> Django &amp; DRF Specialist
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-base md:text-lg text-muted-foreground max-w-2xl mb-7 leading-relaxed"
            >
              Self-taught Backend Engineer · Building production-grade REST APIs · Currently a Junior Web Designer at Alpha Orbit, Karachi.
            </motion.p>

            {/* Meta row: Karachi + Available */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-x-5 gap-y-2 mb-8 text-sm text-muted-foreground"
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} className="text-primary" />
                Karachi, Pakistan
              </span>
              <span className="hidden md:inline-block w-1 h-1 rounded-full bg-border" />
              <span className="inline-flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                Available Immediately
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-10"
            >
              <MagneticButton
                href="/Hunain_CV_Pro.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all duration-300 shadow-glow"
              >
                <Download size={16} />
                Download CV
              </MagneticButton>
              <MagneticButton
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border bg-card text-foreground font-semibold text-sm hover:border-primary/50 hover:bg-secondary transition-all duration-300"
              >
                Explore Projects
                <ArrowDown size={14} />
              </MagneticButton>
            </motion.div>

            {/* Socials */}
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

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-28 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-medium mb-3">
            Experience & Education
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
            My <span className="text-gradient-primary">Journey</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="rounded-xl bg-card border border-border p-6 flex gap-5 hover:shadow-glow hover:border-primary/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0">
              <Briefcase size={22} className="text-primary-foreground" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <h3 className="text-lg font-bold font-display text-foreground">Junior Web Designer</h3>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">Current</span>
              </div>
              <p className="text-sm text-primary font-medium mb-2">Alpha Orbit · Karachi, Pakistan</p>
              <p className="text-xs text-muted-foreground">January 2026 – Present</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="rounded-xl bg-card border border-border p-6 flex gap-5 hover:shadow-glow hover:border-primary/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center shrink-0">
              <GraduationCap size={22} className="text-accent-foreground" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display text-foreground">Behria College</h3>
              <p className="text-sm text-primary font-medium mb-2">Matric · Computer Science</p>
              <p className="text-xs text-muted-foreground">2025 – 2032</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const items = [
  {
    icon: Briefcase,
    title: "Junior Web Designer",
    org: "Alpha Orbit · Karachi, Pakistan",
    date: "January 2026 – Present",
    badge: "Current",
    accent: "primary",
  },
  {
    icon: GraduationCap,
    title: "Bahria College (Inter)",
    org: "Intermediate · Computer Science",
    date: "2025 – 2026",
    accent: "accent",
  },
];

const ExperienceSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineScale = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <section id="experience" className="py-28 px-6 relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">
            Experience & Education
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            My <span className="text-gradient-primary">Journey</span>
          </h2>
        </motion.div>

        <div className="relative pl-8 md:pl-12">
          {/* Animated vertical line */}
          <div className="absolute left-3 md:left-5 top-2 bottom-2 w-px bg-border" aria-hidden />
          <motion.div
            aria-hidden
            style={{ scaleY: lineScale, transformOrigin: "top" }}
            className="absolute left-3 md:left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary to-transparent shadow-glow"
          />

          <div className="space-y-8">
            {items.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -30, rotateY: -15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                  style={{ transformStyle: "preserve-3d", perspective: 800 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.2, type: "spring", stiffness: 220 }}
                    className="absolute -left-8 md:-left-12 top-6 w-6 md:w-10 h-6 md:h-10 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-glow"
                  >
                    <Icon size={14} className="text-primary" />
                  </motion.div>

                  <div className="glow-border rounded-xl bg-card border border-border p-6 hover:shadow-glow hover:border-primary/40 transition-all duration-300">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                      {item.badge && (
                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/15 text-primary border border-primary/30">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-primary font-medium mb-2">{item.org}</p>
                    <p className="text-xs text-muted-foreground">{item.date}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

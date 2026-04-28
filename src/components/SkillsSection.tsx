import { motion, useInView } from "framer-motion";
import { useRef, lazy, Suspense } from "react";
import { Code2, Server, Database, Wrench } from "lucide-react";

const Skills3DOrbit = lazy(() => import("./Skills3DOrbit"));

interface SkillGroup {
  title: string;
  icon: React.ElementType;
  skills: string[];
}

const groups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "React / Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Python", "Django", "Django REST Framework", "REST APIs"],
  },
  {
    title: "Database & Services",
    icon: Database,
    skills: ["PostgreSQL", "Supabase", "SQLite"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Vercel", "VS Code", "Vite"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-28 px-6 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 mask-radial-fade pointer-events-none">
        <Suspense fallback={null}>
          {isInView && <Skills3DOrbit />}
        </Suspense>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">
            Toolkit
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Skills & <span className="text-gradient-primary">Technologies</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            The stack I use to design, build, and ship modern web experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((group, i) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="glow-border group rounded-2xl bg-card/80 backdrop-blur-sm border border-border p-6 transition-all duration-300 hover:shadow-glow hover:border-primary/40"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Icon size={22} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-4">{group.title}</h3>
                <ul className="space-y-2">
                  {group.skills.map((s) => (
                    <li
                      key={s}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {s}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

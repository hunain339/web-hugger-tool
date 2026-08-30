import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import profilePic from "@/assets/mypic.jpeg";

const stats = [
  { value: "10+", label: "API Endpoints Shipped" },
  { value: "7+ mo", label: "Django / DRF Experience" },
  { value: "BSAI", label: "Iqra University" },
];

const highlights = [
  "Built and deployed a production REST API with 10+ endpoints — self-taught in under 8 months.",
  "Documented query optimization with real, measured N+1 reduction metrics — engineering rigor, not just code.",
  "Runs a structured self-curriculum: daily learning logs, performance optimization, system-level thinking.",
  "Currently expanding into Linux systems and FastAPI toward an AI/automation engineering trajectory.",
];


const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const bgY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const bg2Y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="about" className="py-28 px-6 relative overflow-hidden" ref={ref}>
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none"
      />
      <motion.div
        aria-hidden
        style={{ y: bg2Y }}
        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none"
      />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Shipping <span className="text-gradient-primary">production systems</span>, not demos
          </h2>

        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ y: imgY }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="relative group" style={{ perspective: 1000 }}>
              <div className="absolute -inset-3 rounded-2xl bg-gradient-primary opacity-25 blur-2xl group-hover:opacity-40 transition" />
              <motion.div
                whileHover={{ rotateY: 8, rotateX: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="relative w-64 h-80 rounded-2xl overflow-hidden border border-border shadow-card"
                style={{ transformStyle: "preserve-3d" }}
              >
                <img
                  src={profilePic}
                  alt="Muhammad Hunain Hussain"
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-3 space-y-5"
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              I've shipped a full social platform, a job marketplace running on AWS EC2, and client
              sites in production — owning the parts most people avoid: schema design, REST API
              architecture, auth and security, background pipelines, and deployment.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              As <span className="text-foreground font-semibold">CTO at Alpha Orbit</span> I own the
              entire backend: system design, database modelling, data pipelines, and the security
              posture of everything we ship. Every decision is mine to defend in production.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Self-taught developer, now a{" "}
              <span className="text-foreground font-semibold">BSAI student at Iqra University</span>{" "}
              in Karachi. Python, Django and DRF are my core; I learn whatever the system needs next.
            </p>


            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="rounded-xl border border-border bg-card p-4 text-center hover:border-primary/40 hover:shadow-glow transition-all duration-300"
                >
                  <div className="text-2xl md:text-3xl font-bold text-gradient-primary">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

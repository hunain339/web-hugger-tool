import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Cpu, Shield, Rocket } from "lucide-react";

const skills = [
  { icon: Code, label: "Full-Stack Development" },
  { icon: Cpu, label: "AI & Machine Learning" },
  { icon: Shield, label: "Cybersecurity" },
  { icon: Rocket, label: "Entrepreneurship" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Left */}
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-primary font-medium mb-3">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-foreground">
              Building the future,
              <br />
              <span className="text-gradient-primary">one project at a time</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm an 18-year-old entrepreneur and developer based in Karachi, Pakistan.
              I founded <span className="text-foreground font-medium">Alpha Orbit</span> — a next-generation
              digital agency — and I'm building products like <span className="text-foreground font-medium">AlphaSend</span> and{" "}
              <span className="text-foreground font-medium">The Mart</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey spans Python, cybersecurity, AI/ML, and data science.
              I believe in learning by doing, shipping fast, and constantly iterating.
              When I'm not coding, you'll find me exploring new technologies or brainstorming the next big idea.
            </p>
          </div>

          {/* Right — Skills grid */}
          <div className="grid grid-cols-2 gap-4">
            {skills.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                className="rounded-xl bg-card border border-border p-6 hover:shadow-glow hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={20} className="text-primary-foreground" />
                </div>
                <p className="text-sm font-medium text-foreground">{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

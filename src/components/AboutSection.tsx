import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Globe, Palette, Terminal } from "lucide-react";

const skills = [
  { icon: Terminal, label: "Python & Django" },
  { icon: Code, label: "Frontend Development" },
  { icon: Palette, label: "Web Design" },
  { icon: Globe, label: "Web Systems" },
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
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-primary font-medium mb-3">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-foreground">
              Learning, building,
              <br />
              <span className="text-gradient-primary">and growing every day</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm <span className="text-foreground font-medium">Muhammad Hunain Hussain</span>, a Computer Science
              student at Behria College in Karachi, Pakistan. I've recently completed the
              basics of frontend development and Python programming.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Currently working as a <span className="text-foreground font-medium">Junior Web Designer at Alpha Orbit</span>,
              I'm continuing to explore Python and diving into Django to build
              real-world web applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm excited to apply my skills and keep learning in the ever-evolving
              field of web development. The rest? You'll see.
            </p>
          </div>

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

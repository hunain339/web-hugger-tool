import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import profilePic from "@/assets/mypic.jpeg";

const stats = [
  { value: "5+", label: "Projects Built" },
  { value: "4", label: "Certificates" },
  { value: "1+", label: "Years Coding" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 px-6" ref={ref}>
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
            Building with <span className="text-gradient-primary">curiosity</span> & care
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-primary opacity-20 blur-2xl group-hover:opacity-30 transition" />
              <div className="relative w-64 h-80 rounded-2xl overflow-hidden border border-border shadow-card">
                <img
                  src={profilePic}
                  alt="Muhammad Hunain Hussain"
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
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
              I'm <span className="text-foreground font-semibold">Muhammad Hunain Hussain</span>, a
              Computer Science student at Bahria College (Inter) in Karachi, Pakistan. My journey
              into tech started with a simple question — <em>"how do websites actually work?"</em> —
              and quickly grew into a deep passion for building clean, scalable, user-centric web applications.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              I currently work as a <span className="text-foreground font-semibold">Junior Web Designer at Alpha Orbit</span>,
              where I get to apply modern frontend practices to real client projects. Outside of work, I'm
              deep into Python, Django, and the React ecosystem — always pushing to learn one more thing
              that makes me a stronger full-stack engineer.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              I care about thoughtful UI, performant code, and shipping work I'd be proud to put my name on.
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

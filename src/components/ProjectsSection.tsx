import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AlphaSend",
    description:
      "A next-gen email automation platform designed for businesses to send, track, and optimize email campaigns at scale.",
    tags: ["SaaS", "Email", "Automation"],
    status: "Building",
  },
  {
    title: "The Mart",
    description:
      "An e-commerce platform connecting local vendors with customers, bringing the marketplace experience online.",
    tags: ["E-commerce", "Marketplace", "Pakistan"],
    status: "In Progress",
  },
  {
    title: "Alpha Orbit",
    description:
      "A digital agency empowering businesses through custom web & mobile app development, design, and strategic digital transformation.",
    tags: ["Agency", "Design", "Development"],
    status: "Active",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-medium mb-3">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
            What I'm <span className="text-gradient-primary">Working On</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
              className="group rounded-xl bg-card border border-border p-6 hover:shadow-glow hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                  {project.status}
                </span>
                <ExternalLink
                  size={16}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                />
              </div>
              <h3 className="text-xl font-bold font-display text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

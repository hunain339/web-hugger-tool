import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Code2, Globe, Terminal } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface Project {
  title: string;
  description: string;
  tech: string[];
  codeUrl: string;
  icon: React.ReactNode;
}

const pythonProjects: Project[] = [
  {
    title: "Weather Mini App",
    description: "A Python application that fetches real-time weather data using the Requests module and external APIs.",
    tech: ["Python", "Requests", "API"],
    codeUrl: "https://github.com/hunain339/python-work/blob/main/request%20module%202.py",
    icon: <Terminal size={20} />,
  },
  {
    title: "Music Playlist Manager",
    description: "A command-line music list manager built in Python for organizing and managing playlists efficiently.",
    tech: ["Python", "Data Structures"],
    codeUrl: "https://github.com/hunain339/python-work/blob/main/music%20list.py",
    icon: <Terminal size={20} />,
  },
  {
    title: "Water Intake Tracker",
    description: "A Python app that helps users track and monitor their daily water intake with smart reminders.",
    tech: ["Python", "CLI"],
    codeUrl: "https://github.com/hunain339/python-work/blob/main/water%20app.py",
    icon: <Terminal size={20} />,
  },
  {
    title: "Main Project",
    description: "A comprehensive Python project showcasing core programming concepts including OOP and file handling.",
    tech: ["Python", "OOP", "File I/O"],
    codeUrl: "https://github.com/hunain339/python-work/blob/main/main%20project.py",
    icon: <Terminal size={20} />,
  },
];

const webProjects: Project[] = [
  {
    title: "AIMS Student Portal",
    description: "A front-end clone of a student management portal built with HTML, CSS, and JavaScript fundamentals.",
    tech: ["HTML", "CSS", "JavaScript"],
    codeUrl: "https://github.com/hunain339",
    icon: <Globe size={20} />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" },
  }),
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-xl bg-card border border-border p-6 flex flex-col gap-4 transition-all duration-300 hover:shadow-glow hover:border-primary/30"
      style={{
        transform: hovered ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)",
        transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s, border-color 0.3s",
      }}
    >
      {/* Gradient border glow on hover */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, hsl(168 80% 50% / 0.08), hsl(270 60% 60% / 0.08))",
        }}
      />

      <div className="flex items-center gap-3 relative z-10">
        <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0 text-primary-foreground">
          {project.icon}
        </div>
        <h3 className="text-lg font-bold font-display text-foreground">{project.title}</h3>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 relative z-10">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-2 relative z-10">
        <a
          href={project.codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-foreground transition-colors duration-200 group/link"
        >
          <Github size={16} />
          <span>View Code</span>
          <ExternalLink
            size={14}
            className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-200"
          />
        </a>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-28 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-medium mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
            My <span className="text-gradient-primary">Projects</span>
          </h2>
        </motion.div>

        <Tabs defaultValue="python" className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-center mb-10"
          >
            <TabsList className="bg-secondary border border-border">
              <TabsTrigger value="python" className="gap-2 data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
                <Code2 size={16} />
                Python Projects
              </TabsTrigger>
              <TabsTrigger value="web" className="gap-2 data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
                <Globe size={16} />
                Web Basics
              </TabsTrigger>
            </TabsList>
          </motion.div>

          <TabsContent value="python">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pythonProjects.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="web">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {webProjects.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;

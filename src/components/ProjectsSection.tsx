import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Sparkles, Star } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { toast } from "@/hooks/use-toast";
import Tilt3D from "./Tilt3D";
import previewMain from "@/assets/preview-main.jpg";
import previewAims from "@/assets/preview-aims.jpg";
import previewTweet from "@/assets/preview-tweet.jpg";

interface Project {
  title: string;
  description: string;
  tech: string[];
  codeUrl?: string;
  liveUrl?: string;
  image: string;
  featured?: boolean;
}

const flagshipProject: Project = {
  title: "Hunain Gujjar Tweet",
  description:
    "A full-featured, production-ready social media platform inspired by Twitter/X. Users can create accounts, post tweets, and interact with content in real time. Built with a robust backend architecture for scalability, security, and a seamless user experience.",
  tech: ["Supabase", "Django REST", "Python", "PostgreSQL", "Bootstrap", "JavaScript"],
  liveUrl: "https://hunain-gujjar-tweet-prod.vercel.app/",
  image: previewTweet,
  featured: true,
};

const pythonProjects: Project[] = [
  {
    title: "Weather Mini App",
    description: "Fetches real-time weather data from external APIs using Python's Requests module — clean console output with error handling.",
    tech: ["Python", "Requests", "API"],
    codeUrl: "https://github.com/hunain339/python-work/blob/main/request%20module%202.py",
    image: previewWeather,
  },
  {
    title: "Music Playlist Manager",
    description: "A CLI music list manager built in Python for organizing, adding and managing playlists with persistent state.",
    tech: ["Python", "Data Structures", "CLI"],
    codeUrl: "https://github.com/hunain339/python-work/blob/main/music%20list.py",
    image: previewMusic,
  },
  {
    title: "Water Intake Tracker",
    description: "Helps users track their daily water intake, set goals, and monitor hydration habits with smart logic.",
    tech: ["Python", "CLI"],
    codeUrl: "https://github.com/hunain339/python-work/blob/main/water%20app.py",
    image: previewWater,
  },
  {
    title: "Core Python Project",
    description: "A comprehensive Python project showcasing OOP principles, file handling, and clean modular architecture.",
    tech: ["Python", "OOP", "File I/O"],
    codeUrl: "https://github.com/hunain339/python-work/blob/main/main%20project.py",
    image: previewMain,
  },
];

const webProjects: Project[] = [
  {
    title: "AIMS Coaching Website",
    description: "A professional coaching institute website with responsive design, smooth animations, course listings, and a modern UI built with pure HTML & CSS.",
    tech: ["HTML", "CSS", "Responsive"],
    codeUrl: "https://github.com/hunain339/Aims-caoching-website-by-M-Hunain",
    liveUrl: "https://hunain339.github.io/Aims-caoching-website-by-M-Hunain/",
    image: previewAims,
  },
];

const FlagshipCard = ({ project }: { project: Project }) => (
  <motion.article
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="glow-border group relative rounded-3xl bg-card border border-primary/30 overflow-hidden grid md:grid-cols-2 gap-0 mb-10 hover:shadow-glow transition-all duration-500"
  >
    {/* Image */}
    <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden bg-secondary">
      <img
        src={project.image}
        alt={`${project.title} preview`}
        loading="lazy"
        width={1024}
        height={640}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-card/60 via-transparent to-transparent" />
      <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider shadow-glow">
        <Sparkles size={12} />
        Production Ready
      </div>
    </div>

    {/* Content */}
    <div className="p-7 md:p-9 flex flex-col justify-center gap-5">
      <div className="flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-[0.25em]">
        <Star size={14} fill="currentColor" />
        Flagship Project
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
        {project.title}
      </h3>
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-3 pt-2">
        {project.liveUrl && (
          <TooltipProvider delayDuration={150}>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live demo of ${project.title} (opens in a new tab)`}
                  onClick={() =>
                    toast({
                      title: "Opening live demo in a new tab",
                      description: `${project.title} — if it doesn't load, please disable ad blockers or try again in a moment.`,
                    })
                  }
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all hover:shadow-glow"
                >
                  Live Demo
                  <ExternalLink size={14} />
                </a>
              </TooltipTrigger>
              <TooltipContent side="top" className="text-xs">
                Opens in a new tab ↗
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
        {project.codeUrl && (
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View source code for ${project.title}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-semibold text-foreground hover:border-primary/40 hover:text-primary transition-colors"
          >
            <Github size={14} />
            View Source
          </a>
        )}
      </div>
    </div>
  </motion.article>
);

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      style={{ perspective: 1200 }}
    >
      <Tilt3D intensity={6} className="h-full">
        <article className="glow-border group relative rounded-2xl bg-card border border-border overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-glow hover:border-primary/40 hover:-translate-y-2">

      <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          width={1024}
          height={640}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent opacity-80" />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
      </div>

      <div className="p-6 flex flex-col gap-4 flex-1">
        <h3 className="text-xl font-semibold text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-1">
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source code for ${project.title}`}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-primary transition-colors"
            >
              <Github size={14} />
              Source
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live preview of ${project.title}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
            >
              Live Demo
              <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>
        </article>
      </Tilt3D>
    </motion.div>
  );
};

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
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A selection of recent work — from a production social platform to CLI tools and responsive sites.
          </p>
        </motion.div>

        {/* Flagship */}
        <FlagshipCard project={flagshipProject} />

        <Tabs defaultValue="web" className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-center mb-10"
          >
            <TabsList className="bg-secondary border border-border p-1">
              <TabsTrigger
                value="web"
                className="gap-2 data-[state=active]:bg-primary/15 data-[state=active]:text-primary"
              >
                <Globe size={14} />
                Web
              </TabsTrigger>
              <TabsTrigger
                value="python"
                className="gap-2 data-[state=active]:bg-primary/15 data-[state=active]:text-primary"
              >
                <Code2 size={14} />
                Python
              </TabsTrigger>
            </TabsList>
          </motion.div>

          <TabsContent value="web">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {webProjects.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="python">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {pythonProjects.map((project, i) => (
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

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Sparkles, Star } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { toast } from "@/hooks/use-toast";
import Tilt3D from "./Tilt3D";

import previewTweet from "@/assets/preview-tweet.jpg";
import previewJobBoard from "@/assets/preview-jobboard.jpg";
import previewGuide from "@/assets/preview-main.jpg";

interface Project {
  title: string;
  date: string;
  description: string;
  tech: string[];
  codeUrl?: string;
  liveUrl?: string;
  image: string;
  featured?: boolean;
}

const flagshipProject: Project = {
  title: "Tweetbar — Twitter Clone REST API",
  date: "2024 — Present",
  description:
    "Built from scratch: JWT auth, tweet CRUD, comments, likes, notifications and view counters. Eliminated N+1 queries with select_related / prefetch_related — measured and documented performance gains. Integrated view-level and low-level caching, rate limiting and full-text search. Deployed live on Vercel with Supabase (PostgreSQL + storage); includes admin dashboard.",
  tech: ["Django", "DRF", "PostgreSQL", "Supabase", "Vercel"],
  liveUrl: "https://hunain-gujjar-tweet-prod.vercel.app/",
  image: previewTweet,
  featured: true,
};

const webProjects: Project[] = [
  {
    title: "Job Board Platform",
    date: "2025",
    description:
      "Deployed a full job board application to AWS EC2 with a working CI/CD pipeline. Handled infrastructure, deployment and domain configuration end-to-end.",
    tech: ["Django", "DRF", "AWS EC2", "CI/CD"],
    liveUrl: "http://13.49.209.152/",
    image: previewJobBoard,
  },
  {
    title: "DRF Reference Guide",
    date: "2025",
    description:
      "Authored a structured, multi-page technical reference covering DRF fundamentals through Docker and MySQL. Used as a personal interview-prep and study tool — doubles as a documentation-writing sample.",
    tech: ["Python", "ReportLab", "12+ pages"],
    image: previewGuide,
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
      <p className="text-xs font-semibold text-primary">{project.date}</p>
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
        <p className="text-xs font-semibold text-primary">{project.date}</p>

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
            Production systems I designed, built and deployed — backend, database and infrastructure included.
          </p>
        </motion.div>

        {/* Flagship */}
        <FlagshipCard project={flagshipProject} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {webProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

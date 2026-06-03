import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "../data/projects";
import { GithubIcon, ExternalIcon } from "../icons/index";
import type { Project } from "../types/index";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{
        y: -5,
        boxShadow: project.featured
          ? "0 32px 80px rgba(192,192,192,0.1)"
          : "0 16px 48px rgba(0,0,0,0.4)",
      }}
      className={`relative rounded-3xl border border-white/[0.08] overflow-hidden group ${
        project.featured ? "col-span-full" : ""
      }`}
      style={{ background: "rgba(255,255,255,0.03)" }}
    >
      {/* Thumbnail */}
      <div
        className={`w-full ${project.featured ? "h-64 sm:h-80" : "h-44"} flex items-center justify-center relative overflow-hidden`}
        style={{ background: `linear-gradient(135deg, ${project.accent}08 0%, rgba(15,23,42,0.5) 100%)` }}
      >
        <span className="text-6xl opacity-30">🖥️</span>
        {project.featured && (
          <span
            className="absolute top-4 left-4 text-xs px-3 py-1 rounded-full font-medium"
            style={{
              background: "rgba(192,192,192,0.15)",
              color: "#C0C0C0",
              border: "1px solid rgba(192,192,192,0.3)",
            }}
          >
            Featured Project
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
        <p className="text-sm text-gray-400 mb-4 leading-relaxed">{project.desc}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-md border border-white/10 text-gray-400"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <motion.a
            href="https://github.com/ijidamir"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 text-xs px-4 py-2 rounded-lg border border-white/15 text-gray-300 hover:text-white transition-all"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            <GithubIcon size={14} /> GitHub
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            target="_blank"
            href={project.demo}
            className="flex items-center gap-2 text-xs px-4 py-2 rounded-lg font-medium transition-all"
            style={{
              background: "linear-gradient(135deg, rgba(192,192,192,0.15) 0%, rgba(229,231,235,0.1) 100%)",
              color: "#C0C0C0",
              border: "1px solid rgba(192,192,192,0.2)",
            }}
          >
            <ExternalIcon size={14} /> Live Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" ref={ref} className="py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"}>

        <motion.div variants={fadeUp} className="mb-16 text-center">
          <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: "#C0C0C0" }}>
            My Work
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">Projects</h2>
          <div className="mt-4 mx-auto h-px w-24"
            style={{ background: "linear-gradient(90deg, transparent, #C0C0C0, transparent)" }} />
        </motion.div>

        <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((p) => <ProjectCard key={p.title} project={p} />)}
        </motion.div>
      </motion.div>
    </section>
  );
}
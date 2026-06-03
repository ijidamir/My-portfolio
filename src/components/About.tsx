import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

const tags = ["React", "TypeScript", "Tailwind CSS"];

export default function About() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" ref={ref} className="py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"}>

        <motion.div variants={fadeUp} className="mb-16 text-center">
          <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: "#C0C0C0" }}>
            Who I Am
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">About Me</h2>
          <div className="mt-4 mx-auto h-px w-24"
            style={{ background: "linear-gradient(90deg, transparent, #C0C0C0, transparent)" }} />
        </motion.div>

        <motion.div variants={fadeUp} className="max-w-3xl mx-auto">
          <div
            className="relative p-8 sm:p-12 rounded-3xl border border-white/[0.08] overflow-hidden"
            style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(10px)" }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 rounded-bl-full opacity-5"
              style={{ background: "linear-gradient(135deg, #C0C0C0, transparent)" }} />

            <div className="relative flex flex-col sm:flex-row gap-8 items-start">
              <div
                className="shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-2xl border border-white/10 flex items-center justify-center text-4xl"
                style={{ background: "rgba(192,192,192,0.06)" }}
              >
                👨‍💻
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Ijidamir Thomas Wazamda</h3>
                <p className="text-sm mb-5" style={{ color: "#C0C0C0" }}>Front-End Developer · Nigeria</p>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                  Front-End Developer with experience building web applications using{" "}
                  <span className="text-white font-medium">
                    React, JavaScript, TypeScript, Tailwind CSS, HTML, and CSS
                  </span>. Developed projects including an e-commerce platform, lecture tracking system,
                  music player, image gallery, and task management application.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs border border-white/10 text-gray-400"
                      style={{ background: "rgba(255,255,255,0.04)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
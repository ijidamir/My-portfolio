import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

const techTags = ["React", "Git", "HTML/CSS", "JavaScript"];

export default function Experience() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="experience" ref={ref} className="py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"}>

        <motion.div variants={fadeUp} className="mb-16 text-center">
          <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: "#C0C0C0" }}>
            My Journey
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">Experience</h2>
          <div className="mt-4 mx-auto h-px w-24"
            style={{ background: "linear-gradient(90deg, transparent, #C0C0C0, transparent)" }} />
        </motion.div>

        <motion.div variants={fadeUp} className="max-w-2xl mx-auto">
          <div className="relative pl-8">
            <div className="absolute left-0 top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(180deg, #C0C0C0, transparent)" }} />
            <div
              className="absolute left-[-5px] top-6 w-[10px] h-[10px] rounded-full border-2"
              style={{ borderColor: "#C0C0C0", background: "#0F172A" }}
            />

            <div
              className="p-8 rounded-3xl border border-white/[0.08]"
              style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(10px)" }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Front-End Development Intern</h3>
                  <p className="font-semibold mt-1" style={{ color: "#C0C0C0" }}>CodeAlpha</p>
                </div>
                <span
                  className="text-xs px-3 py-1 rounded-full self-start sm:self-auto"
                  style={{
                    background: "rgba(192,192,192,0.08)",
                    color: "#C0C0C0",
                    border: "1px solid rgba(192,192,192,0.2)",
                  }}
                >
                  2024
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Participated in front-end development projects using modern web technologies and Git workflows.
                Collaborated with the team to build responsive, accessible user interfaces and contributed to
                real-world web applications.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {techTags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md border border-white/10 text-gray-500"
                    style={{ background: "rgba(255,255,255,0.03)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
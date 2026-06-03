import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "../data/skills";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};
const stagger = { show: { transition: { staggerChildren: 0.08 } } };

export default function Skills() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" ref={ref} className="py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"}>

        <motion.div variants={fadeUp} className="mb-16 text-center">
          <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: "#C0C0C0" }}>
            My Stack
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">Skills</h2>
          <div className="mt-4 mx-auto h-px w-24"
            style={{ background: "linear-gradient(90deg, transparent, #C0C0C0, transparent)" }} />
        </motion.div>

        <motion.div variants={stagger} className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.04, boxShadow: `0 0 32px ${skill.color}22` }}
              className="relative group p-6 rounded-2xl border border-white/[0.08] cursor-default overflow-hidden text-center"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(circle at center, ${skill.color}08 0%, transparent 70%)` }}
              />
              <div className="text-4xl mb-3">{skill.icon}</div>
              <p className="text-sm font-semibold text-white mb-1">{skill.name}</p>
              <div
                className="w-6 h-0.5 mx-auto rounded-full transition-all duration-300 group-hover:w-12"
                style={{ background: skill.color, opacity: 0.7 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
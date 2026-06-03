import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { certifications } from "../data/certifications";
import { CertIcon } from "../icons/index";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

export default function Certifications() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="certifications" ref={ref} className="py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"}>

        <motion.div variants={fadeUp} className="mb-16 text-center">
          <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: "#C0C0C0" }}>
            Credentials
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">Certifications</h2>
          <div className="mt-4 mx-auto h-px w-24"
            style={{ background: "linear-gradient(90deg, transparent, #C0C0C0, transparent)" }} />
        </motion.div>

        <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={fadeUp}
              whileHover={{ y: -5, boxShadow: "0 20px 60px rgba(192,192,192,0.06)" }}
              className="p-7 rounded-2xl border border-white/[0.08] cursor-default"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <div
                className="mb-4 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: "rgba(192,192,192,0.08)",
                  border: "1px solid rgba(192,192,192,0.15)",
                }}
              >
                <span style={{ color: "#C0C0C0" }}><CertIcon size={24} /></span>
              </div>
              <h3 className="text-sm font-bold text-white mb-1 leading-snug">{cert.title}</h3>
              <p className="text-xs text-gray-500 mb-1">{cert.issuer}</p>
              <p className="text-xs" style={{ color: "#C0C0C0" }}>{cert.year}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
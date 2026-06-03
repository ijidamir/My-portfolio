import { motion, useScroll, useTransform } from "framer-motion";
import { GithubIcon, LinkedinIcon, DownloadIcon, ArrowDown } from "../icons/index";

const socials = [
  { icon: <GithubIcon size={20} />,   href: "https://github.com/ijidamir",                        label: "GitHub"   },
  { icon: <LinkedinIcon size={20} />, href: "https://linkedin.com/in/ijidamir-wazamda-264398336", label: "LinkedIn" },
];

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y       = useTransform(scrollYProgress, [0, 0.3], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <motion.section
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(192,192,192,0.06) 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(192,192,192,0.04) 0%, transparent 70%)" }}
      />

      <div className="relative text-center max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-xs tracking-widest uppercase"
          style={{ background: "rgba(192,192,192,0.06)", color: "#C0C0C0" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-6"
          style={{ fontFamily: "Georgia, serif" }}
        >
          <span className="block text-white">IJIDAMIR</span>
          <span className="block" style={{ color: "#C0C0C0" }}>THOMAS</span>
          <span className="block text-white">WAZAMDA</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="mb-4 text-xl sm:text-2xl font-light tracking-wide"
          style={{ color: "#94A3B8" }}
        >
          Front-End Developer
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="text-sm sm:text-base text-slate-500 max-w-md mx-auto mb-10 leading-relaxed"
        >
          Building modern web applications with React, TypeScript, and Tailwind CSS.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(192,192,192,0.25)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("projects")}
            className="px-7 py-3 rounded-xl text-sm font-semibold tracking-wide transition-all"
            style={{ background: "linear-gradient(135deg, #C0C0C0 0%, #E5E7EB 100%)", color: "#0F172A" }}
          >
            View Projects
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="px-7 py-3 rounded-xl text-sm font-semibold border border-white/15 text-gray-300 flex items-center gap-2 hover:border-white/30 transition-all"
            style={{ background: "rgba(255,255,255,0.04)" }}
            href="/resume.pdf"
            download="ijidamir-Thomas-Wazamda-resume.pdf"
          >
            <DownloadIcon /> Download Resume
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("contact")}
            className="px-7 py-3 rounded-xl text-sm font-semibold border border-white/10 text-gray-400 hover:text-white hover:border-white/25 transition-all"
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="flex items-center justify-center gap-5"
        >
          {socials.map((s) => (
            <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-sm"
              whileHover={{ scale: 1.1 }}
            >
              {s.icon} {s.label}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll arrow */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600"
        initial={{ opacity: 0 }} animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.3 }, y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
      >
        <ArrowDown />
      </motion.div>
    </motion.section>
  );
}

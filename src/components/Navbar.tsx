
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MenuIcon, CloseIcon } from "../icons/index";

const navLinks = ["about", "skills", "projects", "experience", "certifications", "contact"] as const;
type NavLink = typeof navLinks[number];

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [active, setActive]     = useState<string>("");
  const [open, setOpen]         = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.5 }
    );
    navLinks.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: NavLink) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(15,23,42,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          <motion.span
            className="text-xl font-bold cursor-pointer"
            style={{ color: "#C0C0C0", fontFamily: "Georgia, serif" }}
            whileHover={{ scale: 1.05 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            IJW
          </motion.span>

          {/* Desktop */}
          <ul className="hidden md:flex gap-8 items-center">
            {navLinks.map((id) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className="relative text-sm font-medium capitalize transition-colors duration-300 group"
                  style={{ color: active === id ? "#C0C0C0" : "#94A3B8" }}
                >
                  {id}
                  <span
                    className="absolute -bottom-1 left-0 h-px bg-current transition-all duration-300 group-hover:w-full"
                    style={{ width: active === id ? "100%" : "0%" }}
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile */}
          <button className="md:hidden text-gray-400" onClick={() => setOpen((o) => !o)}>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 border-b border-white/10"
            style={{ background: "rgba(15,23,42,0.97)", backdropFilter: "blur(20px)" }}
          >
            <ul className="flex flex-col py-4">
              {navLinks.map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="w-full text-left px-8 py-3 text-sm capitalize text-gray-300 hover:text-white hover:bg-white/5 transition-all"
                  >
                    {id}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
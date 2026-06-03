import Navbar          from "./components/Navbar";
import Hero            from "./components/Hero";
import About           from "./components/About";
import Skills          from "./components/Skills";
import Projects        from "./components/Projects";
import Experience      from "./components/Experience";
import Certifications  from "./components/Certifications";
import Contact         from "./components/Contact";
import Footer          from "./components/Footer";
import ScrollToTop     from "./components/ScrollToTop";

export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#0F172A", fontFamily: "'Helvetica Neue', system-ui, sans-serif" }}
    >
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0F172A; }
        ::-webkit-scrollbar-thumb { background: rgba(192,192,192,0.2); border-radius: 2px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(192,192,192,0.4); }
        input, textarea { color-scheme: dark; }
      `}</style>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

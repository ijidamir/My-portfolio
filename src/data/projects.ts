import type { Project } from "../types/index";

export const projects: Project[] = [
  {
    title: "Lecture Tracker Application",
    desc: "A lecture management application for organizing courses and tracking academic schedules.",
    tech: ["React", "Tailwind CSS"],
    featured: true,
    accent: "#C0C0C0",
    demo: "https://lecture-tracker-sigma.vercel.app/"
  },
  {
    title: "E-Commerce Website",
    desc: "Full-featured online store with product listings, cart management, and checkout flow.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    featured: false,
    accent: "#7DD3FC",
    demo:"https://zogor-apparel.vercel.app/"
  },
  {
    title: "Music Player",
    desc: "Sleek audio player with playlist support, progress bar, and intuitive controls.",
    tech: ["HTML", "CSS", "JavaScript"],
    featured: false,
    accent: "#A78BFA",
    demo: "https://code-alpha-music-player-chi.vercel.app/"
  },
  {
    title: "Image Gallery",
    desc: "Responsive photo gallery with lightbox view and smooth filtering animations.",
    tech: ["HTML", "CSS", "JavaScript"],
    featured: false,
    accent: "#34D399",
    demo:"https://code-alpha-image-gallery-rouge.vercel.app/",
  },
  {
    title: "Calculator",
    desc: "Responsive calculator web application featuring dynamic keyboard event listeners,live input validation,and real-time mat expression evaluation expression formulas",
    tech: ["HTML", "CSS", "JavaScript"],
    featured: false,
    accent: "#FB923C",
    demo: "https://code-alpha-calculator-rosy.vercel.app/"
  },
];
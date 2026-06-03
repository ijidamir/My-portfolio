import type { Skill } from "../types/index";
import {FaHtml5,FaCss3Alt,FaReact,FaGitAlt,FaGithub} from "react-icons/fa";
import {IoLogoJavascript} from "react-icons/io5";
import {SiTypescript,SiTailwindcss} from  "react-icons/si";

export const skills: Skill[] = [
  { name: "HTML5",        color: "#E34F26", icon: FaHtml5 },
  { name: "CSS3",         color: "#1572B6", icon: FaCss3Alt },
  { name: "JavaScript",   color: "#F7DF1E", icon: IoLogoJavascript },
  { name: "TypeScript",   color: "#3178C6", icon: SiTypescript },
  { name: "React",        color: "#61DAFB", icon: FaReact },
  { name: "Tailwind CSS", color: "#06B6D4", icon: SiTailwindcss },
  { name: "Git",          color: "#F05032", icon: FaGitAlt },
  { name: "GitHub",       color: "#C0C0C0", icon: FaGithub },
];
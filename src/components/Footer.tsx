import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, EmailIcon } from "../icons";

const socials = [
  { icon: <GithubIcon size={18} />,   href: "https://github.com/ijidamir" },
  { icon: <LinkedinIcon size={18} />, href: "https://linkedin.com/in/ijidamir-wazamda-264398336" },
  { icon: <EmailIcon size={18} />,    href: "mailto:wazamskid@gmail.com" },
];

export default function Footer() {
  return (
    <footer
      className="border-t border-white/[0.06] py-10 px-4 text-center"
      style={{ background: "rgba(0,0,0,0.2)" }}
    >
      <p className="text-lg font-bold mb-1" style={{ color: "#C0C0C0", fontFamily: "Georgia, serif" }}>
        Ijidamir Thomas Wazamda
      </p>
      <p className="text-xs text-gray-600 mb-5">Front-End Developer</p>

      <div className="flex justify-center gap-6 mb-6">
        {socials.map((s, i) => (
          <motion.a
            key={i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-white transition-colors"
            whileHover={{ scale: 1.2 }}
          >
            {s.icon}
          </motion.a>
        ))}
      </div>

      <p className="text-xs text-gray-700">
        © {new Date().getFullYear()} Ijidamir Thomas Wazamda. All rights reserved.
      </p>
    </footer>
  );
}
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PhoneIcon, EmailIcon, LinkedinIcon, GithubIcon } from "../icons";
import type { FormState } from "../types/index";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

const contactItems = [
  { icon: <PhoneIcon size={18} />,   label: "Phone",    value: "+2347030278108",          href: "tel:+2347030278108" },
  { icon: <EmailIcon size={18} />,   label: "Email",    value: "wazamskid@gmail.com",     href: "mailto:wazamskid@gmail.com" },
  { icon: <LinkedinIcon size={18}/>, label: "LinkedIn", value: "ijidamir-wazamda",         href: "https://linkedin.com/in/ijidamir-wazamda-264398336" },
  { icon: <GithubIcon size={18} />,  label: "GitHub",   value: "github.com/ijidamir",     href: "https://github.com/ijidamir" },
];

export default function Contact() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [sent, setSent] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" ref={ref} className="py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"}>

        <motion.div variants={fadeUp} className="mb-16 text-center">
          <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: "#C0C0C0" }}>
            Get In Touch
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">Contact</h2>
          <div className="mt-4 mx-auto h-px w-24"
            style={{ background: "linear-gradient(90deg, transparent, #C0C0C0, transparent)" }} />
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Info */}
          <motion.div variants={fadeUp} className="space-y-4">
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Open to front-end internships, junior developer roles, and freelance opportunities.
              Feel free to reach out!
            </p>
            {contactItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.08] transition-all hover:border-white/20"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(192,192,192,0.08)", color: "#C0C0C0" }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-500">{item.label}</p>
                  <p className="text-sm text-gray-300 font-medium">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div variants={fadeUp}>
            <div
              className="p-8 rounded-3xl border border-white/[0.08]"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              {sent ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 gap-4"
                >
                  <div className="text-5xl">✅</div>
                  <p className="text-white font-semibold">Message sent!</p>
                  <p className="text-gray-400 text-sm">I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {(["name", "email"] as const).map((field) => (
                    <div key={field}>
                      <label className="block text-xs text-gray-500 mb-1.5 capitalize">{field}</label>
                      <input
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        required
                        value={form[field]}
                        onChange={handleChange}
                        placeholder={field === "name" ? "Your name" : "your@email.com"}
                        className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none border border-white/10 focus:border-white/30 transition-all"
                        style={{ background: "rgba(255,255,255,0.05)" }}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs text-gray-500 mb-1.5">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none border border-white/10 focus:border-white/30 transition-all resize-none"
                      style={{ background: "rgba(255,255,255,0.05)" }}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: "0 0 24px rgba(192,192,192,0.2)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 rounded-xl font-semibold text-sm tracking-wide transition-all"
                    style={{
                      background: "linear-gradient(135deg, #C0C0C0 0%, #E5E7EB 100%)",
                      color: "#0F172A",
                    }}
                  >
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
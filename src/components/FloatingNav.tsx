import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Info, Zap, Briefcase, Monitor, MessageSquare, HelpCircle, Mail } from "lucide-react";

const sections = [
  { id: "home", icon: Home, label: "Home" },
  { id: "about", icon: Info, label: "About" },
  { id: "features", icon: Zap, label: "Features" },
  { id: "usecases", icon: Briefcase, label: "Use Cases" },
  { id: "pricing", icon: Zap, label: "Pricing" },
  { id: "dashboard", icon: Monitor, label: "Dashboard" },
  { id: "testimonials", icon: MessageSquare, label: "Testimonials" },
  { id: "faq", icon: HelpCircle, label: "FAQ" },
  { id: "contact", icon: Mail, label: "Contact" },
];

const FloatingNav = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3"
    >
      <div className="glass rounded-full p-2 flex flex-col gap-2">
        {sections.map(({ id, icon: Icon, label }) => (
          <a
            key={id}
            href={`#${id}`}
            title={label}
            className={`group relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
              active === id
                ? "bg-primary neon-glow"
                : "hover:bg-muted"
            }`}
          >
            <Icon
              size={16}
              className={`transition-colors ${
                active === id ? "text-primary-foreground" : "text-muted-foreground group-hover:text-foreground"
              }`}
            />
            <span className="absolute right-14 bg-card text-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {label}
            </span>
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default FloatingNav;

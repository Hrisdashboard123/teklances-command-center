import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const navLinks = ["About", "Features", "Use Cases", "Dashboard", "FAQ", "Contact"];

const HeroSection = () => {
  return (
    <section id="home" className="section-dark relative min-h-screen overflow-hidden">
      {/* Top horizontal navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 flex items-center justify-between px-8 lg:px-16 py-5"
      >
        <span className="font-heading font-black text-xl tracking-tight">
          Tek<span className="text-primary">Lances</span>
        </span>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium tracking-wide uppercase"
            >
              {link}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-bold text-sm px-5 py-2 rounded-full hover:brightness-110 transition-all"
        >
          Get Started
        </a>
      </motion.nav>

      {/* Arc / semi-circle */}
      <div className="relative flex flex-col items-center justify-center pt-8 pb-32 lg:pt-12 lg:pb-44">
        {/* The large arc shape */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140vw] md:w-[110vw] lg:w-[90vw] aspect-square rounded-full bg-primary/[0.07] border border-primary/20" style={{ top: "-30%" }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[130vw] md:w-[100vw] lg:w-[80vw] aspect-square rounded-full bg-primary/[0.04] border border-primary/10" style={{ top: "-32%" }} />
        
        {/* Neon glow behind arc */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[40vh] bg-primary/10 rounded-full blur-[120px]" />

        {/* Content inside arc */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 text-center max-w-3xl mx-auto px-6"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-sm text-muted-foreground mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Now in Beta — Join the Waitlist
          </div>

          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6">
            TekLances
            <span className="neon-text align-super text-lg md:text-xl font-bold">®</span>
            {" "}helps you
            <br />
            <span className="neon-text">build & ship</span>
          </h1>

          <p className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            Post micro-tasks, get matched with vetted tech specialists in seconds,
            and watch your backlog disappear in real time.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-foreground/80 text-foreground font-heading font-bold px-8 py-3 rounded-full hover:bg-foreground hover:text-background transition-all text-sm uppercase tracking-wider"
            >
              Start Today
            </a>
            <a
              href="#dashboard"
              className="inline-flex items-center gap-2 glass glass-hover text-foreground font-heading font-semibold px-6 py-3 rounded-full transition-all text-sm"
            >
              <Play size={14} />
              View Demo
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating glass cards at the bottom edges of the arc */}
      <div className="absolute bottom-12 left-0 right-0 z-10 pointer-events-none">
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-between items-end"
          >
            {/* Left card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="glass rounded-xl p-4 w-52 hidden md:block"
            >
              <div className="text-xs text-muted-foreground mb-1.5">New Task</div>
              <div className="font-heading font-bold text-sm mb-2">Fix authentication bug</div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-xs text-primary">Matching…</span>
              </div>
            </motion.div>

            {/* Center stats */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="glass rounded-xl p-4 w-40 hidden lg:block mx-auto"
            >
              <div className="text-xs text-muted-foreground mb-1">Avg. Match Time</div>
              <div className="font-heading font-black text-2xl neon-text">4.2s</div>
            </motion.div>

            {/* Right card */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="glass rounded-xl p-4 w-52 hidden md:block"
            >
              <div className="text-xs text-muted-foreground mb-1.5">Specialist Matched</div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-heading font-bold text-xs text-primary">
                  AK
                </div>
                <div>
                  <div className="font-heading font-bold text-sm">Alex K.</div>
                  <div className="text-xs text-muted-foreground">Backend • 4.9★</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Grid background */}
      <div className="grid-bg absolute inset-0 pointer-events-none" />
    </section>
  );
};

export default HeroSection;

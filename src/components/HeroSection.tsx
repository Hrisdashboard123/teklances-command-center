import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="section-dark relative min-h-screen flex items-center overflow-hidden">
      <div className="grid-bg absolute inset-0" />
      
      {/* Gradient orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container relative z-10 mx-auto px-6 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-sm text-muted-foreground mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Now in Beta — Join the Waitlist
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-6">
              The On-Demand
              <br />
              <span className="neon-text">Tech Talent Engine</span>
              <br />
              for Instant Task Completion
            </h1>

            <p className="text-muted-foreground text-lg max-w-lg mb-8 leading-relaxed">
              Post micro-tasks, get matched with vetted specialists in seconds,
              and watch your backlog disappear in real time. Scale your team without the overhead.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-bold px-6 py-3 rounded-lg hover:brightness-110 transition-all neon-glow"
              >
                Get Started
                <ArrowRight size={18} />
              </a>
              <a
                href="#dashboard"
                className="inline-flex items-center gap-2 glass glass-hover text-foreground font-heading font-semibold px-6 py-3 rounded-lg transition-all"
              >
                <Play size={16} />
                View Demo
              </a>
            </div>
          </motion.div>

          {/* Right — floating glass cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            {/* Task card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="glass rounded-xl p-5 w-64 absolute top-0 left-0"
            >
              <div className="text-xs text-muted-foreground mb-2">New Task</div>
              <div className="font-heading font-bold text-sm mb-3">Fix authentication bug</div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-xs text-primary">Matching…</span>
              </div>
            </motion.div>

            {/* Developer card */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="glass rounded-xl p-5 w-60 absolute top-24 right-0"
            >
              <div className="text-xs text-muted-foreground mb-2">Specialist Matched</div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-heading font-bold text-sm text-primary">
                  AK
                </div>
                <div>
                  <div className="font-heading font-bold text-sm">Alex K.</div>
                  <div className="text-xs text-muted-foreground">Backend • 4.9★</div>
                </div>
              </div>
            </motion.div>

            {/* Progress card */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="glass rounded-xl p-5 w-56 absolute top-56 left-10"
            >
              <div className="text-xs text-muted-foreground mb-2">Task Progress</div>
              <div className="w-full bg-muted rounded-full h-2 mb-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "72%" }} />
              </div>
              <div className="text-xs text-primary font-semibold">72% Complete</div>
            </motion.div>

            {/* Stats card */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="glass rounded-xl p-5 w-48 absolute top-[340px] right-8"
            >
              <div className="text-xs text-muted-foreground mb-1">Avg. Match Time</div>
              <div className="font-heading font-black text-2xl neon-text">4.2s</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

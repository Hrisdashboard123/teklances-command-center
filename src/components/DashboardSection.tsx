import { motion } from "framer-motion";
import { Activity, Cpu, GitBranch, CheckCircle2, Circle, Timer } from "lucide-react";

const DashboardSection = () => (
  <section id="dashboard" className="section-dark relative py-24 lg:py-32 overflow-hidden">
    <div className="grid-bg absolute inset-0" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[140px]" />

    <div className="container relative z-10 mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-sm font-heading font-bold uppercase tracking-widest text-primary mb-3">Live Dashboard</p>
        <h2 className="font-heading text-3xl md:text-4xl font-black mb-3">
          Your command center
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Powered by the Intelligent Matching Engine
        </p>
      </motion.div>

      {/* Dashboard mockup */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glass rounded-2xl p-1 max-w-5xl mx-auto neon-glow"
      >
        <div className="bg-background/80 rounded-xl p-6">
          {/* Top bar */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
            <div className="flex items-center gap-3">
              <Cpu size={18} className="text-primary" />
              <span className="font-heading font-bold text-sm">TekLances Dashboard</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Live
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-4">
            {/* Task queue */}
            <div className="glass rounded-lg p-4">
              <div className="text-xs text-muted-foreground mb-3 font-heading font-semibold uppercase tracking-wider">Task Queue</div>
              {["Fix OAuth redirect", "Add CSV export", "Refactor API layer"].map((task, i) => (
                <div key={task} className="flex items-center gap-2 py-2 border-b border-border last:border-0">
                  {i === 0 ? <Activity size={12} className="text-primary" /> : <Circle size={12} className="text-muted-foreground" />}
                  <span className="text-sm">{task}</span>
                </div>
              ))}
            </div>

            {/* Matching engine */}
            <div className="glass rounded-lg p-4">
              <div className="text-xs text-muted-foreground mb-3 font-heading font-semibold uppercase tracking-wider">Matching Engine</div>
              <div className="flex flex-col items-center justify-center py-4">
                <div className="relative w-20 h-20 mb-3">
                  <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping" style={{ animationDuration: "3s" }} />
                  <div className="absolute inset-2 rounded-full border border-primary/50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <GitBranch size={24} className="text-primary" />
                  </div>
                </div>
                <span className="text-sm text-primary font-heading font-bold">3 Active Matches</span>
                <span className="text-xs text-muted-foreground">Avg. 4.2s match time</span>
              </div>
            </div>

            {/* Monitoring */}
            <div className="glass rounded-lg p-4">
              <div className="text-xs text-muted-foreground mb-3 font-heading font-semibold uppercase tracking-wider">Monitoring</div>
              {[
                { label: "Tasks Completed", value: "127", icon: CheckCircle2 },
                { label: "In Progress", value: "8", icon: Timer },
                { label: "Avg. Quality", value: "4.8★", icon: Activity },
              ].map(({ label, value, icon: Icon }) => (
                <div key={label} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <div className="flex items-center gap-2">
                    <Icon size={12} className="text-primary" />
                    <span className="text-xs text-muted-foreground">{label}</span>
                  </div>
                  <span className="text-sm font-heading font-bold">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default DashboardSection;

import { motion } from "framer-motion";
import { Layers, Brain, Activity, Users, BarChart3, Workflow } from "lucide-react";

const features = [
  { icon: Layers, title: "Micro-Task Creation", text: "Break work into atomic deliverables with smart templates and auto-scoping." },
  { icon: Brain, title: "Intelligent Matching", text: "AI-driven pairing considers skill, availability, track record, and timezone." },
  { icon: Activity, title: "Real-Time Monitoring", text: "Watch progress, code commits, and quality metrics live as work happens." },
  { icon: Users, title: "Collaboration Tools", text: "In-context chat, shared environments, and seamless handoffs." },
  { icon: BarChart3, title: "Performance Analytics", text: "Deep dashboards for cost, velocity, quality, and talent utilization." },
  { icon: Workflow, title: "Workflow Automation", text: "Trigger tasks from your CI/CD, ticketing, or project management tools." },
];

const FeaturesSection = () => (
  <section id="features" className="section-dark relative py-24 lg:py-32 overflow-hidden">
    <div className="grid-bg absolute inset-0" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[160px]" />

    <div className="container relative z-10 mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm font-heading font-bold uppercase tracking-widest text-primary mb-3">Features</p>
        <h2 className="font-heading text-3xl md:text-4xl font-black mb-4">
          Everything you need to ship faster
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          A complete command center for outsourcing micro-tasks at scale.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map(({ icon: Icon, title, text }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="glass glass-hover rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 group cursor-default"
          >
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Icon size={22} className="text-primary" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;

import { motion } from "framer-motion";
import { Rocket, Wrench, Package, Building2 } from "lucide-react";

const cases = [
  { icon: Rocket, title: "Startups Scaling Fast", text: "Ship features without growing your headcount. Post tasks, get results, iterate." },
  { icon: Wrench, title: "Urgent IT Fixes", text: "Production down? Match with a specialist in seconds and resolve in real time." },
  { icon: Package, title: "Product Teams", text: "Offload micro-tasks — bug fixes, UI tweaks, integrations — to focus on strategy." },
  { icon: Building2, title: "Enterprise Workloads", text: "Manage overflow, seasonal spikes, and specialist needs at scale with full compliance." },
];

const UseCasesSection = () => (
  <section id="usecases" className="section-light relative py-24 lg:py-32">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm font-heading font-bold uppercase tracking-widest mb-3" style={{ color: "#6abf00" }}>
          Use Cases
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-black text-surface-light-foreground mb-4">
          Built for every team size
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {cases.map(({ icon: Icon, title, text }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex gap-4 p-6 rounded-xl bg-surface-light-foreground/[0.03] border border-surface-light-foreground/10 hover:border-primary/30 transition-colors group"
          >
            <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Icon size={22} style={{ color: "#6abf00" }} />
            </div>
            <div>
              <h3 className="font-heading font-bold text-surface-light-foreground mb-1">{title}</h3>
              <p className="text-sm text-surface-light-foreground/60 leading-relaxed">{text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default UseCasesSection;

import { motion } from "framer-motion";
import { Target, Clock, ShieldCheck, TrendingUp } from "lucide-react";

const points = [
  { icon: Target, title: "Precision Matching", text: "Our engine pairs your tasks with the right specialist — not the nearest one." },
  { icon: Clock, title: "Instant Execution", text: "From posting to code-complete in hours, not weeks." },
  { icon: ShieldCheck, title: "Vetted Talent", text: "Every specialist passes rigorous skill and reliability checks." },
  { icon: TrendingUp, title: "Scale On-Demand", text: "Grow and shrink your workforce without contracts or overhead." },
];

const AboutSection = () => (
  <section id="about" className="section-light relative py-24 lg:py-32">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center mb-16"
      >
        <p className="text-sm font-heading font-bold uppercase tracking-widest mb-3" style={{ color: "#6abf00" }}>
          About TekLances
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-black text-surface-light-foreground mb-4">
          The future of work is micro‑tasking
        </h2>
        <p className="text-surface-light-foreground/70 text-lg leading-relaxed">
          TekLances eliminates the friction between having a task and having it done. 
          We connect companies with pre-vetted tech specialists for bite-sized deliverables — instantly.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {points.map(({ icon: Icon, title, text }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-surface-light-foreground/[0.03] border border-surface-light-foreground/10 rounded-xl p-6 hover:border-primary/40 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Icon size={20} style={{ color: "#6abf00" }} />
            </div>
            <h3 className="font-heading font-bold text-surface-light-foreground mb-2">{title}</h3>
            <p className="text-sm text-surface-light-foreground/60 leading-relaxed">{text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;

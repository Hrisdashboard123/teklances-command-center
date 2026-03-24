import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  { name: "Sarah Chen", role: "CTO", company: "NexaFlow", text: "TekLances cut our bug resolution time by 60%. The matching engine is eerily accurate." },
  { name: "Marcus Reeves", role: "VP Engineering", company: "ShipStack", text: "We scaled from 3 to 20 active micro-tasks overnight. No recruiting, no onboarding." },
  { name: "Priya Mehta", role: "Product Lead", company: "Luminary AI", text: "The real-time dashboard changed how we manage outsourced work. Total visibility." },
  { name: "James Okafor", role: "Founder", company: "CodeBridge", text: "As a solo founder, TekLances is like having a dev team on speed-dial. Game changer." },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="section-dark relative py-24 lg:py-32 overflow-hidden">
    <div className="grid-bg absolute inset-0" />

    <div className="container relative z-10 mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-sm font-heading font-bold uppercase tracking-widest text-primary mb-3">Testimonials</p>
        <h2 className="font-heading text-3xl md:text-4xl font-black mb-4">Trusted by builders</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {testimonials.map(({ name, role, company, text }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass glass-hover rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >
            <Quote size={18} className="text-primary mb-3" />
            <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">"{text}"</p>
            <div>
              <div className="font-heading font-bold text-sm">{name}</div>
              <div className="text-xs text-muted-foreground">{role}, {company}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;

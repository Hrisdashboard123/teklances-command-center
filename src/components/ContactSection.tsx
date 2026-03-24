import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="section-dark relative py-24 lg:py-32 overflow-hidden">
      <div className="grid-bg absolute inset-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[160px]" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm font-heading font-bold uppercase tracking-widest text-primary mb-3">Contact</p>
          <h2 className="font-heading text-3xl md:text-4xl font-black mb-4">Request a demo</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            See how TekLances can accelerate your engineering output.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <div className="glass rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Send size={20} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">Message sent!</h3>
                <p className="text-sm text-muted-foreground">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="text-xs text-muted-foreground font-heading uppercase tracking-wider mb-1.5 block">Name</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground font-heading uppercase tracking-wider mb-1.5 block">Email</label>
                  <input
                    required
                    type="email"
                    className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground font-heading uppercase tracking-wider mb-1.5 block">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your needs…"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground font-heading font-bold py-3 rounded-lg hover:brightness-110 transition-all neon-glow flex items-center justify-center gap-2"
                >
                  Request Demo
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

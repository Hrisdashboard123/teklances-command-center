import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "How does the task matching engine work?", a: "Our AI analyses your task requirements — language, framework, complexity, urgency — and matches it with the highest-scoring available specialist in real time." },
  { q: "Who are the specialists?", a: "All specialists are pre-vetted engineers with verified portfolios, code assessments, and track records on the platform. We maintain a quality bar above 4.5 stars." },
  { q: "What's the pricing model?", a: "You pay per task based on scope and complexity. No subscriptions, no commitments. Enterprise plans with volume pricing are also available." },
  { q: "What's the average task turnaround time?", a: "Most micro-tasks are matched within seconds and completed in 2–6 hours depending on scope. Urgent tasks get priority matching." },
  { q: "Can I integrate TekLances into my existing workflow?", a: "Yes — we offer integrations with GitHub, Jira, Linear, Slack, and custom webhooks. Tasks can be auto-created from your existing tools." },
];

const FAQSection = () => (
  <section id="faq" className="section-dark relative py-24 lg:py-32">
    <div className="container relative z-10 mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-sm font-heading font-bold uppercase tracking-widest text-primary mb-3">FAQ</p>
        <h2 className="font-heading text-3xl md:text-4xl font-black mb-4">Common questions</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="glass rounded-xl px-5 border-none">
              <AccordionTrigger className="font-heading font-semibold text-sm hover:no-underline py-4">
                {q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;

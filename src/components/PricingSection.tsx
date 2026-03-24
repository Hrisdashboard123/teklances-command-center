import { motion } from "framer-motion";
import { Check, Zap, Crown, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    icon: Zap,
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for individuals and small projects",
    features: [
      "Up to 10 tasks/month",
      "Basic matching engine",
      "48-hour turnaround",
      "Email support",
      "1 active project",
    ],
    popular: false,
  },
  {
    icon: Crown,
    name: "Pro",
    price: "$149",
    period: "/month",
    description: "For growing teams that need speed and reliability",
    features: [
      "Up to 50 tasks/month",
      "Intelligent matching engine",
      "24-hour turnaround",
      "Priority support",
      "5 active projects",
      "Real-time monitoring",
      "Performance analytics",
    ],
    popular: true,
  },
  {
    icon: Rocket,
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with complex, high-volume needs",
    features: [
      "Unlimited tasks",
      "Advanced AI matching",
      "SLA-backed turnaround",
      "Dedicated account manager",
      "Unlimited projects",
      "Custom integrations",
      "Compliance & security",
    ],
    popular: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="section-dark relative py-24 lg:py-32 overflow-hidden">
    <div className="grid-bg absolute inset-0" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[160px]" />

    <div className="container relative z-10 mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm font-heading font-bold uppercase tracking-widest text-primary mb-3">
          Pricing
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-black mb-3">
          Simple, transparent pricing
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Choose the plan that fits your workflow. Scale up anytime.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map(({ icon: Icon, name, price, period, description, features, popular }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`glass rounded-2xl p-8 flex flex-col relative group transition-all duration-300 hover:border-primary/30 ${
              popular ? "border-primary/40 neon-glow" : ""
            }`}
          >
            {popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-heading font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                Most Popular
              </span>
            )}

            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <Icon size={22} className="text-primary" />
            </div>

            <h3 className="font-heading text-xl font-bold mb-1">{name}</h3>
            <p className="text-sm text-muted-foreground mb-5">{description}</p>

            <div className="mb-6">
              <span className="font-heading text-4xl font-black">{price}</span>
              <span className="text-muted-foreground text-sm">{period}</span>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>

            <Button
              className={`w-full font-heading font-bold ${
                popular ? "neon-glow" : "variant-outline"
              }`}
              variant={popular ? "default" : "outline"}
            >
              {name === "Enterprise" ? "Contact Sales" : "Get Started"}
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;

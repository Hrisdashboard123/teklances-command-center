const FooterSection = () => (
  <footer className="section-dark border-t border-border py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-heading font-black text-lg tracking-tight">
            Tek<span className="text-primary">Lances</span>
          </span>
          <p className="text-xs text-muted-foreground mt-1">On-Demand Tech Talent Engine</p>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          <span className="text-muted-foreground/40 cursor-default" title="Coming Soon">Docs (Coming Soon)</span>
          <a href="mailto:hello@teklances.com" className="hover:text-foreground transition-colors">hello@teklances.com</a>
        </div>
      </div>

      <div className="text-center text-xs text-muted-foreground mt-8">
        © {new Date().getFullYear()} TekLances. All rights reserved.
      </div>
    </div>
  </footer>
);

export default FooterSection;

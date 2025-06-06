import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer
      role="contentinfo"
      className="py-12 px-4 bg-card border-t border-border mt-12"
    >
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          &copy; {new Date().getFullYear()} Roberto Vilchis.
        </p>

        <a
          href="#hero"
          aria-label="Back to top"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp size={20} />
        
        </a>
      </div>
    </footer>
  );
};
import {cn} from "@/lib/utils";
import { Menu, X} from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);

    }, [])

    return (
    <nav className={cn(
      "fixed w-full z-40 transition-all duration-300",
      isScrolled ? "py-2 bg-background/80 backdrop-blur-md shadow-md" : "py-5"
    )}>
      <div className="container flex items-center justify-between px-4 md:px-8 lg:px-16">
        <a href="#hero" className="text-2xl font-bold text-primary tracking-tight flex items-center">
          <span className="relative z-20">
            <span className="text-glow text-foreground">DataScience</span> Portafolio
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary hover:underline underline-offset-4 transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile nav toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50 transition-transform"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-10 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary px-4 py-2 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
    )
}
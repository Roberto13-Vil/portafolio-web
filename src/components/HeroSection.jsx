import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center"
    >
      <div className="container max-w-4xl mx-auto z-10">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight leading-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="opacity-0 animate-fade-in-delay-1 text-primary"> Roberto </span>
            <span className="opacity-0 animate-fade-in-delay-2 text-gradient"> Vilchis</span>
          </h1>

          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I believe data has the power to change everything—from how we work to how we understand the world.
            I use data science and machine learning to build tools that make decisions smarter 
            and solutions more human.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a
              href="#approaches"
              className="cosmic-button hover:scale-105 transition-transform"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce hover:animate-none">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};


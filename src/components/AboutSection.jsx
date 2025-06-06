import { Brain, BarChart, MessageSquare } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-16 items-start">
          {/* Text Content */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-semibold">
              Aspiring Data Scientist & Problem Solver
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              I'm deeply passionate about turning raw data into meaningful insights and intelligent 
              solutions. With a solid background in mathematics and applied computing.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I work primarily with Python and tools like pandas, scikit-learn, and matplotlib to 
              explore, model, and visualize data. Constantly learning and experimenting, I'm building 
              a portfolio that reflects both analytical rigor and practical problem-solving.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button hover:scale-105 transition-transform">
                Get In Touch
              </a>

              <a
                href="/cv.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Skill Cards */}
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: <Brain className="h-6 w-6 text-primary" />,
                title: "Machine Learning",
                desc: "Building predictive models and learning from data using supervised and unsupervised algorithms.",
              },
              {
                icon: <BarChart className="h-6 w-6 text-primary" />,
                title: "Exploratory Data Analysis",
                desc: "Exploring datasets through visualization and statistics to uncover trends, patterns, and anomalies.",
              },
              {
                icon: <MessageSquare className="h-6 w-6 text-primary" />,
                title: "Natural Language Processing",
                desc: "Teaching machines to understand human language through text analysis, tokenization, and embeddings.",
              },
            ].map((card, i) => (
              <div key={i} className="gradient-border p-6 card-hover rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">{card.icon}</div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{card.title}</h4>
                    <p className="text-muted-foreground">{card.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
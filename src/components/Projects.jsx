import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Seasonal Forecasting with SARIMA",
    description:
      "Time series analysis project using real climate data from NOAA. Includes full EDA, model diagnostics, residual tests, and dynamic prediction visualization with SARIMA. Emphasis on interpretability and animated forecasting.",
    image: "/project_1.jpg",
    tags: ["Python", "Pandas", "SARIMA", "Time Series", "EDA", "Forecasting", "Statsmodels", "Visualization"],
    demoUrl: "#",
    githubUrl: "https://github.com/Roberto13-Vil/SARIMA-Forcasting",
},
  
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These are some of the projects I've worked on. Each one challenged me in different
          ways and helped shape my skills as a data scientist. I’m passionate about solving
          complex problems and turning data into meaningful insights through effort, curiosity,
          and persistence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                console.log(project.image)
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/15 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={25} />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={25} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Roberto13-Vil"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};


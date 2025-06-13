import { ArrowRight, ExternalLink } from "lucide-react";

const approaches = [
  {
    id: 1,
    title: "Predictive Modeling & Unsupervised Learning",
    description:
      "Build classification, regression, and clustering models to solve real-world problems—from sales forecasting to customer segmentation.",
    tags: ["Regression", "Classification", "Clustering", "scikit-learn", "XGBoost"],
    difficulty: "Intermediate – Advanced",
    numProjects: 10,
    demoUrl: "/approaches/predictive-modeling",
    image: "/ml_predictive.png",
  },
  {
    id: 2,
    title: "Natural Language Processing (NLP)",
    description:
      "Work with text to extract insights, detect sentiment, classify content, and build intelligent systems using embeddings and transformers.",
    tags: ["BERT", "Transformers", "spaCy", "HuggingFace", "Sentiment Analysis"],
    difficulty: "Intermediate – Advanced",
    numProjects: 10,
    demoUrl: "/approaches/nlp",
    image: "/nlp_analysis.jpg",
  },
  {
    id: 3,
    title: "Data Visualization & Communication",
    description:
      "Transform complex data into clear and powerful visuals. Ideal for dashboards, data storytelling, and executive presentations.",
    tags: ["Plotly", "Seaborn", "Streamlit", "Dashboards", "Storytelling"],
    difficulty: "Beginner – Intermediate",
    numProjects: 8,
    demoUrl: "/approaches/visualization",
    image: "/data_viz.jpg",
  },
  {
    id: 4,
    title: "Audio Processing & Intelligent Interfaces",
    description:
      "Extract audio features like spectrograms and MFCCs to classify sounds, detect keywords, or build smart interfaces like Alexa.",
    tags: ["MFCC", "Spectrogram", "CNN", "RNN", "librosa"],
    difficulty: "Intermediate – Advanced",
    numProjects: 10,
    demoUrl: "/approaches/audio",
    image: "/audio_ai.jpg",
  },
  {
    id: 5,
    title: "Geospatial Data Science",
    description:
      "Analyze spatial data to uncover geographic patterns—urban mobility, risk zones, or resource distribution.",
    tags: ["GeoPandas", "Folium", "Kepler.gl", "OpenStreetMap", "Maps"],
    difficulty: "Intermediate",
    numProjects: 8,
    demoUrl: "/approaches/geospatial",
    image: "/geospatial.jpg",
  },
  {
    id: 6,
    title: "Multifocus End-to-End Projects",
    description:
      "Projects that combine multiple techniques: from data cleaning to deployment, integrating NLP, audio, visualization, and fairness.",
    tags: ["EDA", "ML", "NLP", "Audio", "API", "Dashboard", "MLOps"],
    difficulty: "Advanced",
    numProjects: 5,
    demoUrl: "/approaches/integrated",
    image: "/multienfoque.jpg",
  },
];

export const ApproachesSection = () => {
  return (
    <section id="approaches" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Featured <span className="text-primary">Approaches</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These are the main learning paths I’ve explored as a data scientist. Each approach
          focuses on a key area of expertise and includes hands-on projects using real-world data.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approaches.map((approach) => (
            <div
              key={approach.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={approach.image}
                  alt={approach.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {approach.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/15 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{approach.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">{approach.description}</p>
                <p className="text-xs text-muted-foreground mb-1">
                  <strong>Difficulty:</strong> {approach.difficulty}
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  <strong>Suggested Projects:</strong> {approach.numProjects}
                </p>

                <div className="flex justify-between items-center">
                  <a
                    href={approach.demoUrl}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={22} />
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


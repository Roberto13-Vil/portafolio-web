import { useState, useEffect} from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Data Science Core
  { name: "Python", level: 90, category: "data-science" },
  { name: "Pandas", level: 90, category: "data-science" },
  { name: "NumPy", level: 85, category: "data-science" },
  { name: "Matplotlib / Seaborn", level: 85, category: "data-science" },
  { name: "scikit-learn", level: 85, category: "data-science" },
  { name: "Exploratory Data Analysis (EDA)", level: 85, category: "data-science" },

  // Machine Learning & NLP
  { name: "ML: Regression, Trees, SVM, KNN", level: 80, category: "ml-nlp" },
  { name: "NLP (Natural Language Processing)", level: 75, category: "ml-nlp" },
  { name: "Transformers (HuggingFace)", level: 80, category: "ml-nlp" },

  // Math & Modeling
  { name: "Time Series Analysis", level: 85, category: "math-modeling" },
  { name: "Stochastic Processes", level: 60, category: "math-modeling" },
  { name: "Optimization", level: 70, category: "math-modeling" },
  { name: "Probability & Statistics", level: 85, category: "math-modeling" },

  // Tools
  { name: "Git / GitHub", level: 80, category: "tools" },
  { name: "MySQL", level: 70, category: "tools" },

  // Complementary
  { name: "VS Code", level: 90, category: "complementary" },
  { name: "LaTeX", level: 75, category: "complementary" },
  { name: "Linux", level: 70, category: "complementary" },
];

const categories = ["all", "data-science", "ml-nlp", "math-modeling", "tools", "complementary"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const displayedSkills = isMobile && !showAllMobile
    ? filteredSkills.slice(0, 6)
    : filteredSkills;

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => {
                setActiveCategory(category);
                setShowAllMobile(false); // reset view when switching category
              }}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {displayedSkills.map((skill, key) => (
            <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>

        {isMobile && filteredSkills.length > 6 && (
          <div className="text-center">
            <button
              onClick={() => setShowAllMobile(!showAllMobile)}
              className="mt-2 px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              {showAllMobile ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
import { Link } from "react-router-dom";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Footer } from "../components/Footer";

const Project_3 = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />

      <div className="w-full h-auto mb-8">
        <img
          src="/project_3.jpg"
          alt="Text Classifier Header"
          className="w-full max-h-[400px] object-cover rounded-b-xl shadow-md"
        />
      </div>

      <main className="relative min-h-screen flex flex-col items-center justify-center px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gradient mb-6">
          Text Classifier - Suicide Reddit Posts
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl mb-4">
          <span className="text-primary font-semibold">Project 3</span> —{" "}
          <span className="text-gradient font-medium">Text classification model for suicidal content</span>
        </p>

        <p className="max-w-3xl mx-auto text-muted-foreground mb-10 leading-relaxed">
          <span className="text-primary font-semibold">Overview:</span><br />
          This project demonstrates how to clean and represent text data, using an interactive 
          dashboard built with Streamlit and a deployed web app to test the classifier. Users can 
          explore the dataset, preprocess text, and interact with the trained model to classify 
          Reddit posts for suicidal content. The pipeline includes text cleaning, feature 
          extraction with Word2Vec, and classification using XGBoost.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary">🔍 Key Highlights</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>
              <span className="font-semibold text-primary">📡 Data Source:</span>{" "}
              Dataset from Kaggle (https://www.kaggle.com/datasets/akshita0560/suicide-detection), transformed to Parquet format.
            </li>
            <li>
              <span className="font-semibold text-primary">🧰 Tech Stack:</span>{" "}
              Python, Pandas, NLP, Text Cleaning, Word2Vec, XGBoost, Flask, Streamlit.
            </li>
            <li>
              <span className="font-semibold text-primary">📊 Features:</span>{" "}
              Interactive dashboard for data cleaning, exploration, and real-time classification.
            </li>
            <li>
              <span className="font-semibold text-primary">🎨 Visualization:</span>{" "}
              KPIs, bar charts, pie charts, word clouds, confusion matrix, and ROC curve.
            </li>
            <li>
              <span className="font-semibold text-primary">💾 Data Format:</span>{" "}
              Stored and processed in Parquet format for efficiency and scalability.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary">🖼️ Visual Outputs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img
                src="/dashboard_nlp.png"
                alt="Dashboard Overview"
                className="rounded-xl shadow-lg border border-muted"
              />
              <p className="text-sm text-muted-foreground text-center mt-2">Dashboard Overview</p>
            </div>
            <div>
              <img
                src="/classifier_text.png"
                alt="Interactive Model"
                className="rounded-xl shadow-lg border border-muted"
              />
              <p className="text-sm text-muted-foreground text-center mt-2">Interactive Model</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-primary">🔗 Project Resources</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              <a
                className="underline text-blue-400 hover:text-blue-300"
                href="https://github.com/Roberto13-Vil/mental-health-text-classification"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
              </a>
            </li>
            <li>
              <a
                className="underline text-blue-400 hover:text-blue-300"
                href="https://mental-health-text-dashboard.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Streamlit Dashboard (EDA)
              </a>
            </li>
            <li>
              <a
                className="underline text-blue-400 hover:text-blue-300"
                href="https://suicidal-text-detector-production.up.railway.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deployed Model (Flask Web App)
              </a>
            </li>
            {/* Puedes agregar más recursos aquí si necesitas */}
          </ul>
        </section>

        <Link
          to="/"
          className="inline-block mt-10 text-blue-300 underline hover:text-blue-200 transition-colors"
        >
          ← Back to Portfolio
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default Project_3;
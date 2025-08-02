import { Link } from "react-router-dom";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Footer } from "../components/Footer";

const Project_4 = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />

      <div className="w-full h-auto mb-8">
        <img
          src="/project_4.jpg"
          alt="Churn Prediction Header"
          className="w-full max-h-[400px] object-cover rounded-b-xl shadow-md"
        />
      </div>

      <main className="relative min-h-screen flex flex-col items-center justify-center px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gradient mb-6">
          Churn Prediction
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl mb-4">
          <span className="text-primary font-semibold">Project 4</span> —{" "}
          <span className="text-gradient font-medium">
            Classification model for Churn on Telecom
          </span>
        </p>

        <p className="max-w-3xl mx-auto text-muted-foreground mb-10 leading-relaxed">
          <span className="text-primary font-semibold">Overview:</span><br />
          This project aims to predict customer churn using a real-world telecom dataset from Iran, obtained from the UC Irvine Machine Learning Repository.  
          The pipeline includes EDA, feature engineering, and the development of a neural network with PyTorch.  
          An interactive Streamlit dashboard allows for dynamic exploration and testing of the model.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary">🔍 Key Highlights</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>
              <span className="font-semibold text-primary">📡 Data Source:</span>{" "}
              Dataset from the{" "}
              <a
                href="https://archive.ics.uci.edu/dataset/563/iranian+churn+dataset"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-400 hover:text-blue-300"
              >
                UC Irvine Machine Learning Repository
              </a>, transformed to CSV format.
            </li>
            <li>
              <span className="font-semibold text-primary">🧰 Tech Stack:</span>{" "}
              Python, pandas, PyTorch, scikit-learn, Streamlit, matplotlib, seaborn
            </li>
            <li>
              <span className="font-semibold text-primary">📊 Features:</span>{" "}
              Interactive dashboard for data cleaning, exploration, and real-time classification.
            </li>
            <li>
              <span className="font-semibold text-primary">🎨 Visualization:</span>{" "}
              KPIs, bar charts, pie charts, confusion matrix
            </li>
            <li>
               <span className="font-semibold text-primary">💾 Data Format:</span>{" "}
               Stored and processed in CSV format for accessibility.
            </li>

          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary">🖼️ Visual Outputs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-video w-full rounded-xl shadow-lg border border-muted">
                <video
                    className="w-full h-full rounded-xl"
                    src="/dashboard_4.mp4"
                    autoPlay
                    loop
                    muted
                    controls
                >
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="aspect-video w-full rounded-xl shadow-lg border border-muted">
                <video
                    className="w-full h-full rounded-xl"
                    src="/pred_churn.mp4"
                    autoPlay
                    loop
                    muted
                    controls
                >
                    Your browser does not support the video tag.
                </video>
            </div>

          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary">📘 Learning Outcomes</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ Trained a neural network from scratch with PyTorch</li>
            <li>✓ Built an interactive dashboard for predictions using Streamlit</li>
            <li>✓ Practiced modular ML workflows: preprocessing, modeling, UI integration</li>
            <li>✓ Learned to balance recall vs precision in business-critical classification</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-primary">🔗 Project Resources</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              <a
                className="underline text-blue-400 hover:text-blue-300"
                href="https://github.com/Roberto13-Vil/churn_predictive"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
              </a>
            </li>
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

export default Project_4;

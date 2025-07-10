import { Link } from "react-router-dom";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Footer } from "../components/Footer";

const Project_2 = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />

      <div className="w-full h-auto mb-8">
        <img
          src="/project_2.jpg"
          alt="Interactive Dashboard Header"
          className="w-full max-h-[400px] object-cover rounded-b-xl shadow-md"
        />
      </div>

      <main className="relative min-h-screen flex flex-col items-center justify-center px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gradient mb-6">
          Interactive Dashboard - Incidents in Mexico
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl mb-4">
          <span className="text-primary font-semibold">Project 2</span> —{" "}
          <span className="text-gradient font-medium">Interactive Dashboard for Exploring Incident Data in Mexico</span>
        </p>

        <p className="max-w-3xl mx-auto text-muted-foreground mb-10 leading-relaxed">
          <span className="text-primary font-semibold">Overview:</span><br />
          This project demonstrates the use of Dask for handling large datasets (~22 million rows) that cannot be easily managed with pandas or polars in memory. It features an interactive dashboard built with Streamlit to explore incident data by state, municipality, and type of crime. 
          Built with a focus on data processing, visualization, and deployment, this project showcases my ability to create scalable and user-friendly data applications. And in the dashboard, users can filter incidents by date, state, municipality, type of crime, and modality, providing a comprehensive view of public security incidents in Mexico. 
          The dataset on the dashboard is reduced to 1 million rows for performance, but the full dataset is available in the GitHub repository.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary">🔍 Key Highlights</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>
              <span className="font-semibold text-primary">📡 Data Source:</span>{" "}
              Mexican public security incident datasets in Parquet format.
            </li>
            <li>
              <span className="font-semibold text-primary">🧰 Tech Stack:</span>{" "}
              Python, Dask, Streamlit, Plotly, Pandas.
            </li>
            <li>
              <span className="font-semibold text-primary">📊 Features:</span>{" "}
              Interactive filtering by date, state, municipality, incident type, and modality.
            </li>
            <li>
              <span className="font-semibold text-primary">🎨 Visualization:</span>{" "}
              Time series, bar charts, and KPI cards to explore trends and summaries.
            </li>
            <li>
              <span className="font-semibold text-primary">💾 Data Format:</span>{" "}
              Stored and processed in Parquet for efficiency.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary">🖼️ Visual Outputs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img
                src="/dashboard_screenshot_1.png"
                alt="Dashboard Overview"
                className="rounded-xl shadow-lg border border-muted"
              />
              <p className="text-sm text-muted-foreground text-center mt-2">Dashboard Overview</p>
            </div>
            <div>
              <img
                src="/dashboard_screenshot_2.png"
                alt="Interactive Filters"
                className="rounded-xl shadow-lg border border-muted"
              />
              <p className="text-sm text-muted-foreground text-center mt-2">Interactive Filters</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-primary">🔗 Project Resources</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              <a
                className="underline text-blue-400 hover:text-blue-300"
                href="https://github.com/Roberto13-Vil/Interactive-Dashboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
              </a>
            </li>
            <li>
              <a
                className="underline text-blue-400 hover:text-blue-300"
                href="https://interactive-dashboard-robert.streamlit.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo (Streamlit)
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

export default Project_2;

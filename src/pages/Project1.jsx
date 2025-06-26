import { Link } from "react-router-dom";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "../components/Navbar";

const Project_1 = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <Navbar />

      <main className="p-8 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient mb-6">
          📈 Forecasting Climate with SARIMA
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl mb-8">
          This project applies time series analysis to NOAA climate data. From exploratory
          analysis and statistical testing to modeling and forecasting, the entire process
          is captured with visual tools and animations.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-primary">🔍 Key Highlights</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>EDA with custom visual themes</li>
            <li>Variance and stationarity testing (Levene & ADF)</li>
            <li>STL decomposition to separate trend/seasonality</li>
            <li>SARIMA model training and evaluation</li>
            <li>Prediction visualization as animated GIF</li>
            <li>Data stored in Parquet format for reproducibility</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-primary">🖼️ Visuals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src="/sarima-gif.gif"
              alt="Animated Forecast"
              className="rounded-xl shadow-lg border border-muted"
            />
            <img
              src="/stl-decomposition.png"
              alt="STL Decomposition"
              className="rounded-xl shadow-lg border border-muted"
            />
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-primary">🔗 Resources</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              <a
                className="underline text-blue-400 hover:text-blue-300"
                href="https://github.com/tuusuario/sarima-project"
                target="_blank"
              >
                GitHub Repository
              </a>
            </li>
            <li>
              <a
                className="underline text-blue-400 hover:text-blue-300"
                href="/notebooks/predicciones.html"
                target="_blank"
              >
                View Notebook (HTML)
              </a>
            </li>
          </ul>
        </section>

        <Link
          to="/"
          className="inline-block mt-8 text-blue-300 underline hover:text-blue-200 transition-colors"
        >
          ← Back to Portfolio
        </Link>
      </main>
    </div>
  );
};

export default Project_1;

import { Link } from "react-router-dom";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "../components/Navbar";

const Project_1 = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />

      <div className="w-full h-auto mb-8">
        <img
          src="/project_1.jpg"
          alt="Climate Forecasting Header"
          className="w-full max-h-[400px] object-cover rounded-b-xl shadow-md"
        />
      </div>

      <main className="relative min-h-screen flex flex-col items-center justify-center px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gradient mb-6">
          🌦 Forecasting Climate with SARIMA
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl mb-4">
          <span className="text-primary font-semibold">Project 1</span> —{" "}
          <span className="text-gradient font-medium">Time Series Forecasting with NOAA Data</span>
        </p>

        <p className="max-w-3xl mx-auto text-muted-foreground mb-10 leading-relaxed">
          <span className="text-primary font-semibold">Overview:</span><br />
          This project leverages climate data from NOAA to build a SARIMA model capable of detecting
          seasonal patterns and making future climate forecasts. From EDA and statistical tests
          to model training and animation, it offers a full pipeline of time series forecasting.
          Results are visualized using an animated GIF and stored in efficient Parquet format
          for reproducibility. The model helps illustrate how temperature evolves over time, making it
          a useful tool for climate-related insights.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary">🔍 Key Highlights</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>
              <span className="font-semibold text-primary">📡 Data Source:</span>{" "}
              NOAA (National Oceanic and Atmospheric Administration) via API.
            </li>
            <li>
              <span className="font-semibold text-primary">🧰 Tech Stack:</span>{" "}
              Python, Pandas, Statsmodels, Matplotlib.
            </li>
            <li>
              <span className="font-semibold text-primary">📊 Modeling:</span>{" "}
              SARIMA (Seasonal ARIMA) with automated residual testing and validation.
            </li>
            <li>
              <span className="font-semibold text-primary">🎞️ Visualization:</span>{" "}
              Forecast animation (GIF) and decomposition plots.
            </li>
            <li>
              <span className="font-semibold text-primary">💾 Data Format:</span>{" "}
              Stored in Parquet for efficiency and compatibility.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary">🖼️ Visual Outputs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img
                src="/animated_prediction.gif"
                alt="Animated Forecast"
                className="rounded-xl shadow-lg border border-muted"
              />
              <p className="text-sm text-muted-foreground text-center mt-2">Forecast Evolution (Animated)</p>
            </div>
            <div>
              <img
                src="/stl_decomposition.png"
                alt="STL Decomposition"
                className="rounded-xl shadow-lg border border-muted"
              />
              <p className="text-sm text-muted-foreground text-center mt-2">STL Time Series Decomposition</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-primary">🔗 Project Resources</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              <a
                className="underline text-blue-400 hover:text-blue-300"
                href="https://github.com/Roberto13-Vil/SARIMA-Forcasting"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
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
    </div>
  );
};

export default Project_1;

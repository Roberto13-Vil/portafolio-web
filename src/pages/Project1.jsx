import { Link } from 'react-router-dom';
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";

const Project_1 = () => {
  return (
    <>
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main className="p-8 max-w-4xl mx-auto text-white">
        <h1 className="text-3xl font-bold mb-4">Forecasting with SARIMA</h1>
        <p className="mb-4">
          This project uses time series analysis on climate data from NOAA to build and validate a SARIMA model.
          I conducted EDA, decomposition, stationarity tests, and animated the forecast evolution over time.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Key Highlights:</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>📊 Exploratory Data Analysis (EDA)</li>
          <li>🧪 Levene & ADF stationarity tests</li>
          <li>🧠 STL Decomposition</li>
          <li>📈 Model fitting and prediction</li>
          <li>🎞️ Animated GIF forecast visualization</li>
          <li>📁 Data saved in Parquet format</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">Screenshots / Visuals</h2>
        <img src="/sarima-gif.gif" alt="Animated Forecast" className="rounded-xl shadow-lg my-4" />
        <img src="/stl-decomposition.png" alt="STL Decomposition" className="rounded-xl shadow-lg my-4" />

        <h2 className="text-xl font-semibold mt-6 mb-2">Links</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><a className="text-blue-400 underline" href="https://github.com/tuusuario/sarima-project" target="_blank">GitHub Repo</a></li>
          <li><a className="text-blue-400 underline" href="/notebooks/predicciones.html" target="_blank">Notebook (HTML version)</a></li>
        </ul>

        <Link className="inline-block mt-6 text-blue-300 underline" to="/">← Back to Portfolio</Link>
      </main>
    </>
  );
};

export default Project_1;
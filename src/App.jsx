// ...existing code...
import React from "react";
import GraficoPizza from "./Components/GraficoPizza";
import GraficoBarra from "./Components/GraficoBarra";
import GraficoLinha from "./Components/GraficoLinha";
import Mapa from "./Components/Mapa"; // <-- novo import
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Trabalhando com Maps</h1>
      </header>
      <main className="chart-grid">
        <div className="chart-card full">
          {" "}
          {/* mostra o mapa em largura total */}
          <h2>Localização: Universidade de Rio Verde (Bloco 1)</h2>
          <Mapa />
        </div>
      </main>
      //{" "}
    </div>
  );
}

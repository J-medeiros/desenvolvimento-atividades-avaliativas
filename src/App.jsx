import React from "react";
import GraficoPizza from "./Components/GraficoPizza";
import GraficoBarra from "./Components/GraficoBarra";
import GraficoLinha from "./Components/GraficoLinha";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Gráficos de Dados Fictícios</h1>
      </header>

      <main className="chart-grid">
        <section className="chart-card">
          <h2>Pizza</h2>
          <GraficoPizza />
        </section>

        <section className="chart-card">
          <h2>Barras</h2>
          <GraficoBarra />
        </section>

        <section className="chart-card full">
          <h2>Linha</h2>
          <GraficoLinha />
        </section>
      </main>
    </div>
  );
}

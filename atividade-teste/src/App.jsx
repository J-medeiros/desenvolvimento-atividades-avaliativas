import { useState } from 'react';
import PieChart from './components/PieChart';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>Gráficos de Dados Fictícios</h1>
      <div className="chart-container">
        <h2>Gráfico de Pizza</h2>
        <PieChart />
      </div>
      <div className="chart-container">
        <h2>Gráfico de Barras</h2>
        <BarChart />
      </div>
      <div className="chart-container">
        <h2>Gráfico de Linha</h2>
        <LineChart />
      </div>
    </div>
  );
}

export default App;
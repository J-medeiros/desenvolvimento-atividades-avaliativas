import React from "react";
import { Chart } from "react-google-charts";
const data = [
  ["x", "Sales"],
  [0, 65],
  [1, 59],
  [2, 80],
  [3, 81],
  [4, 56],
  [5, 55],
  [6, 40],
  [7, 50],
  [8, 60],
  [9, 72],
  [10, 68],
  [11, 75],
];

const options = {
  title: "Vendas ao longo do tempo",
  hAxis: { title: "Período" },
  vAxis: { title: "Vendas", minValue: 0 },
  legend: "none",
  curveType: "function", 
  colors: ["4BC0C0"], 
  chartArea: { width: "80%", height: "70%" },
};

export default function GraficoLinha() {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="360px"
      data={data}
      options={options}
      loader={<div>Carregando gráfico de linha...</div>}
    />
  );
}

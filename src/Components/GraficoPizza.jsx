import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Categoria", "Quantidade"],
  ["Produto A", 45],
  ["Produto B", 26],
  ["Produto C", 15],
  ["Produto D", 14],
];

const options = {
  title: "Distribuição por Produto",
  pieHole: 0.15,
  legend: { position: "right" },
  chartArea: { width: "90%", height: "75%" },
};

export default function GraficoPizza() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="320px"
      data={data}
      options={options}
      loader={<div>Carregando gráfico de pizza...</div>}
    />
  );
}

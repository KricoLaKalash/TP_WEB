const donnees = [
  { Championnat: "Serie A", Moy_Distance_Progression_Carries: 34335.75, Moy_Fautes_Comises: 466.85, Moy_Taux_Succes_Tacle_Pct: 45.41 },
  { Championnat: "La Liga", Moy_Distance_Progression_Carries: 39075.75, Moy_Fautes_Comises: 449.65, Moy_Taux_Succes_Tacle_Pct: 43.83 },
  { Championnat: "Bundesliga", Moy_Distance_Progression_Carries: 35835.44, Moy_Fautes_Comises: 427.78, Moy_Taux_Succes_Tacle_Pct: 46.22 },
  { Championnat: "Ligue 1", Moy_Distance_Progression_Carries: 40994.50, Moy_Fautes_Comises: 422.30, Moy_Taux_Succes_Tacle_Pct: 45.47 },
  { Championnat: "Premier League", Moy_Distance_Progression_Carries: 34862.95, Moy_Fautes_Comises: 384.35, Moy_Taux_Succes_Tacle_Pct: 44.64 }
];

const ligues = donnees.map(d => d.Championnat);

Plotly.newPlot("DProgFautes", [{
  x: donnees.map(d => d.Moy_Distance_Progression_Carries),
  y: donnees.map(d => d.Moy_Fautes_Comises),
  text: ligues,
  mode: "markers+text",
  textposition: "top center",
  marker: { size: 14, color: "#4facfe" },
  type: "scatter"
}], {
  title: "Distance parcourue totale par match selon le total de Fautes par saison",
  xaxis: { title: "Distance parcourue (m)" },
  yaxis: { title: "Fautes commises" }
}, { responsive: true });

Plotly.newPlot("pressingFautes", [{
  x: donnees.map(d => d.Moy_Taux_Succes_Tacle_Pct),
  y: donnees.map(d => d.Moy_Fautes_Comises),
  text: ligues,
  mode: "markers+text",
  textposition: "top center",
  marker: { size: 14, color: "#3b82f6" },
  type: "scatter"
}], {
  title: "Taux de tacles réussis selon le total des fautes par saison",
  xaxis: { title: "Taux de tacles réussis (%)" },
  yaxis: { title: "Fautes commises" }
}, { responsive: true });

Plotly.newPlot("fautesligue", [{
  x: ligues,
  y: donnees.map(d => d.Moy_Fautes_Comises),
  type: "bar",
  marker: { color: "#ff4d4f" },
  text: donnees.map(d => d.Moy_Fautes_Comises),
  textposition: "outside"
}], {
  title: "Fautes commises par toutes les équipes de chaque ligue",
  xaxis: { title: "Ligues" },
  yaxis: { title: "Fautes commises" }
}, { responsive: true });

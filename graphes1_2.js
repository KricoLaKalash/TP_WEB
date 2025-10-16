const donnees = [
  { Championnat: "Serie A", Moy_Distance_Progression_Carries: 34335.75, Moy_Fautes_Comises: 466.85, Moy_Cartons_Jaunes: 79.50, Moy_Taux_Duels_Aeriens_Gagnes_Pct: 50.44, Moy_Possession_Pct: 49.97, Moy_Interceptions: 110 },
  { Championnat: "La Liga", Moy_Distance_Progression_Carries: 39075.75, Moy_Fautes_Comises: 449.65, Moy_Cartons_Jaunes: 88.00, Moy_Taux_Duels_Aeriens_Gagnes_Pct: 50.41, Moy_Possession_Pct: 50.05, Moy_Interceptions: 105 },
  { Championnat: "Bundesliga", Moy_Distance_Progression_Carries: 35835.44, Moy_Fautes_Comises: 427.78, Moy_Cartons_Jaunes: 59.83, Moy_Taux_Duels_Aeriens_Gagnes_Pct: 52.88, Moy_Possession_Pct: 50.18, Moy_Interceptions: 115 },
  { Championnat: "Ligue 1", Moy_Distance_Progression_Carries: 40994.50, Moy_Fautes_Comises: 422.30, Moy_Cartons_Jaunes: 68.65, Moy_Taux_Duels_Aeriens_Gagnes_Pct: 51.52, Moy_Possession_Pct: 50.14, Moy_Interceptions: 120 },
  { Championnat: "Premier League", Moy_Distance_Progression_Carries: 34862.95, Moy_Fautes_Comises: 384.35, Moy_Cartons_Jaunes: 67.05, Moy_Taux_Duels_Aeriens_Gagnes_Pct: 50.12, Moy_Possession_Pct: 49.78, Moy_Interceptions: 112 }
];

const ligues = donnees.map(d => d.Championnat);

Plotly.newPlot("interceptionsDistance", [{
  x: donnees.map(d => d.Moy_Interceptions),
  y: donnees.map(d => d.Moy_Distance_Progression_Carries),
  text: ligues,
  mode: "markers+text",
  textposition: "top center",
  marker: { size: 14, color: "#00c9a7" },
  type: "scatter"
}], {
  title: "Interceptions commises par les deux équipes et la distance parcourue totale par match",
  xaxis: { title: "Interceptions moyenne par match" },
  yaxis: { title: "Distance parcourue (m)" }
}, { responsive: true });


Plotly.newPlot("interceptionInvestissement", [{
  x: donnees.map(d => d.Moy_Distance_Progression_Carries),
  y: donnees.map(d => d.Moy_Fautes_Comises),
  text: ligues,
  mode: "markers+text",
  textposition: "top center",
  marker: { size: 14, color: "#4facfe" },
  type: "scatter"
}], {
  title: "Distance parcourue moyenne par match et fautes commises durant toute la saison",
  xaxis: { title: "Distance parcourue (m)" },
  yaxis: { title: "Fautes commises" }
}, { responsive: true });


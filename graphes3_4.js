const donnees = [
  { Championnat: "Serie A", Moy_Buts: 54.40, Moy_xG: 53.68, Moy_Possession_Pct: 49.97, Moy_Distance_Progression_Carries: 34335.75 },
  { Championnat: "La Liga", Moy_Buts: 48.05, Moy_xG: 50.15, Moy_Possession_Pct: 50.05, Moy_Distance_Progression_Carries: 39075.75 },
  { Championnat: "Bundesliga", Moy_Buts: 51.56, Moy_xG: 50.83, Moy_Possession_Pct: 50.18, Moy_Distance_Progression_Carries: 35835.44 },
  { Championnat: "Ligue 1", Moy_Buts: 53.05, Moy_xG: 53.64, Moy_Possession_Pct: 50.14, Moy_Distance_Progression_Carries: 40994.50 },
  { Championnat: "Premier League", Moy_Buts: 51.83, Moy_xG: 46.06, Moy_Possession_Pct: 49.78, Moy_Distance_Progression_Carries: 34862.95 }
];

const ligues = donnees.map(d => d.Championnat);

Plotly.newPlot("multiIndicateurs", [
  { x: ligues, y: donnees.map(d => d.Moy_Buts), name: "Buts moyens", type: "bar" },
  { x: ligues, y: donnees.map(d => d.Moy_xG), name: "xG moyens", type: "bar" },
], {
  title: "Buts moyen par équipe de chaque ligue par saison et leurs prévisions",
  barmode: "group",
  xaxis: { title: "Ligues" },
  yaxis: { title: "Valeurs moyennes" }
}, { responsive: true });


Plotly.newPlot("sprintsLigue", [{
  x: ligues,
  y: donnees.map(d => (d.Moy_Distance_Progression_Carries / 1000).toFixed(1)),
  type: "bar",
  marker: { color: "#ff7f50" },
  text: donnees.map(d => (d.Moy_Distance_Progression_Carries / 1000).toFixed(1) + " km"),
  textposition: "outside"
}], {
  title: "Moyenne des distances parcourues des équipes de chaque ligue durant la saison",
  xaxis: { title: "Ligues" },
  yaxis: { title: "Distance (km)" }
}, { responsive: true });


Plotly.newPlot("distanceTirs", [{
  x: donnees.map(d => d.Moy_Buts),
  y: donnees.map(d => d.Moy_Distance_Progression_Carries),
  text: ligues,
  mode: "markers+text",
  textposition: "top center",
  marker: { size: 14, color: "#00bfff" },
  type: "scatter"
}], {
  title: "Distance parcourue totale et tirs totaux des deux équipes par match",
  xaxis: { title: "Tirs totaux" },
  yaxis: { title: "Distance parcourue (m)" }
}, { responsive: true });

const numberOfSeries = prompt("Nechta serial kordingiz", "");

const seriesDB = {
  count: numberOfSeries,
  series: {},
  actors: {},
  genres: {},
  privat: false,
};

const a = prompt("Oxirgi korgan serialingiz?"),
  b = prompt("Nechi baxo berasiz?"),
  c = prompt("Oxirgi korgan serialingiz?"),
  d = prompt("Nechi baxo berasiz?");
seriesDB.series[a] = b;
seriesDB.series[c] = d;

console.log(seriesDB);

// Random Country Page Generator

// Generates a page on a suggested location in North America
let nAmericaCountries = [
  "./countries/Kanab.html",
  "./countries/Orleans.html",
  "./countries/emeraldLake.html",
];

function randomNACountry() {
  let location =
    nAmericaCountries[Math.floor(Math.random() * nAmericaCountries.length)];
  document.getElementById("na").setAttribute("href", `${location}`);
  document.getElementById("nAmericaMap").setAttribute("href", `${location}`);
}

// Generates a page on a suggested location in South America

let sAmericaCountries = [
  "./countries/Bogota.html",
  "./countries/Nicaragua.html",
  "./countries/rainbowMountains.html",
];

function randomSACountry() {
  let location =
    sAmericaCountries[Math.floor(Math.random() * sAmericaCountries.length)];
  document.getElementById("sa").setAttribute("href", `${location}`);
  document.getElementById("sAmericaMap").setAttribute("href", `${location}`);
}

// Generates a page on a suggested location in Africa

let africaCountries = [
  "./countries/Mauritius.html",
  "./countries/Gonarezhou.html",
  "./countries/Mozambique.html",
];

function randomAfricaCountry() {
  let location =
    africaCountries[Math.floor(Math.random() * africaCountries.length)];
  document.getElementById("afri").setAttribute("href", `${location}`);
  document.getElementById("africaMap").setAttribute("href", `${location}`);
}

// Generates a page on a suggested location in Europe

let europeCountries = [
  "./countries/slovenia.html",
  "./countries/Portmeirion.html",
  "./countries/Chioggia.html",
  "./countries/Baleal.html",
  "./countries/Ticino.html",
];

function randomEuropeanCountry() {
  let location =
    europeCountries[Math.floor(Math.random() * europeCountries.length)];
  document.getElementById("Eur").setAttribute("href", `${location}`);
  document.getElementById("europeMap").setAttribute("href", `${location}`);
}

// Generates a page on a suggested location in Asia

let asiaCountries = [
  "./countries/Kyoto.html",
  "./countries/Coron.html",
  "./countries/Pamukkale.html",
];

function randomAsiaCountry() {
  let location =
    asiaCountries[Math.floor(Math.random() * asiaCountries.length)];
  document.getElementById("asia").setAttribute("href", `${location}`);
  document.getElementById("asiaMap").setAttribute("href", `${location}`);
}

// Generates a page on a suggested location in Australia

let australiaCountries = [
  "./countries/blueMountains.html",
  "./countries/Bungle.html",
  "./countries/Cairnes.html",
  "./countries/Hobart.html",
  "./countries/melbourne.html",
];

function randomAustralianCountry() {
  let location =
    australiaCountries[Math.floor(Math.random() * australiaCountries.length)];
  document.getElementById("aus").setAttribute("href", `${location}`);
  document.getElementById("ausMap").setAttribute("href", `${location}`);
}

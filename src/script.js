// Adds users name to the homepage
let homepageName = document.getElementById("username");
let customName = prompt(
  "Welcome! We hope we can help you find your next adventure. To begin please enter your name:"
);
homepageName.innerText = `Are you ready for your next adventure ${customName}?`;

// Random Country Page Generator

// Generates a page on a suggested location in North America
let nAmericaCountries = [
  "https://www.bbc.co.uk/iplayer",
  "https://www.channel4.com",
  "https://www.itv.com",
];

function randomNACountry() {
  window.location =
    nAmericaCountries[Math.floor(Math.random() * nAmericaCountries.length)];
}

// Generates a page on a suggested location in South America

let sAmericaCountries = [
  "https://www.bbc.co.uk/iplayer",
  "https://www.channel4.com",
  "https://www.itv.com",
];

function randomSACountry() {
  window.location =
    sAmericaCountries[Math.floor(Math.random() * sAmericaCountries.length)];
}

// Generates a page on a suggested location in Africa

let africaCountries = [
  "https://www.bbc.co.uk/iplayer",
  "https://www.channel4.com",
  "https://www.itv.com",
];

function randomAfricaCountry() {
  window.location =
    africaCountries[Math.floor(Math.random() * africaCountries.length)];
}

// Generates a page on a suggested location in Europe

let europeCountries = [
  "countries/slovenia.html",
  "countries/croatia.html",
  "countries/italy.html",
  "countries/switzerland.html",
];

function randomEuropeanCountry() {
  let location =
    europeCountries[Math.floor(Math.random() * europeCountries.length)];
  document.getElementById("Eur").setAttribute("href", `${location}`);
  document.getElementById("europeMap").setAttribute("href", `${location}`);
}

// Generates a page on a suggested location in Asia

let asiaCountries = [
  "https://www.bbc.co.uk/iplayer",
  "https://www.channel4.com",
  "https://www.itv.com",
];

function randomAsiaCountry() {
  window.location =
    asiaCountries[Math.floor(Math.random() * asiaCountries.length)];
}

// Generates a page on a suggested location in Australia

let australiaCountries = [
  "https://www.bbc.co.uk/iplayer",
  "https://www.channel4.com",
  "https://www.itv.com",
];

function randomAustralianCountry() {
  window.location =
    australiaCountries[Math.floor(Math.random() * australiaCountries.length)];
}

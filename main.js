const countries = [
    "japan.html",
    "france.html",
    "Italy.html",
    "United States.html",
    "canada.html",
    "brazil.html",
    "russia.html",
    "china.html",
    "Mexico.html",
    "Portugal.html",
    "Saudi Arabia.html",
    "Spain.html"
];

document.getElementById("randomCountry").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * countries.length);
    window.location.href = countries[randomIndex];
});
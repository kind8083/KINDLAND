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




const cards = document.querySelectorAll(
    '.geo-sea-card, .color-card, .fr-sea-card, .fr-color-card'
);

cards.forEach(card => {
    card.addEventListener('click', () => {

        cards.forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.remove('active');
            }
        });

        card.classList.toggle('active');
    });
});
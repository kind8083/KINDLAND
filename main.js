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


/*глобус*/
function glb_countryCentroid(feature) {
    var geom = feature.geometry;
    var coordsList = geom.type === "Polygon" ? [geom.coordinates] : geom.coordinates; // MultiPolygon
    var minLng = Infinity, maxLng = -Infinity, minLat = Infinity, maxLat = -Infinity;

    coordsList.forEach(function (polygon) {
        polygon[0].forEach(function (pt) { // внешнее кольцо каждого куска страны
            var lng = pt[0], lat = pt[1];
            if (lng < minLng) minLng = lng;
            if (lng > maxLng) maxLng = lng;
            if (lat < minLat) minLat = lat;
            if (lat > maxLat) maxLat = lat;
        });
    });

    return { lat: (minLat + maxLat) / 2, lng: (minLng + maxLng) / 2 };
}

.labelsData([])
    .labelLat(function (d) { return d.lat; })
    .labelLng(function (d) { return d.lng; })
    .labelText(function (d) { return d.text; })
    .labelSize(1.1)
    .labelDotRadius(0)
    .labelColor(function () { return "rgba(243,237,225,0.85)"; })
    .labelResolution(2)
    .labelAltitude(0.008)

     world.labelsData(countries.features.map(function (f) {
        var c = glb_countryCentroid(f);
        return {
            lat: c.lat,
            lng: c.lng,
            text: f.properties.ADMIN || f.properties.NAME || ""
        };
    }));

     .labelColor(function () { return "#f3ede1"; })   // светлый, как остальной текст на сайте
    .labelSize(1.4)
    .labelAltitude(0.012)
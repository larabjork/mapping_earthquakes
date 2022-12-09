console.log("working");

// Create the map object with a center and zoom level for SFO
// let map = L.map("mapid").setView([37.5, -122.5], 10);
// Center of the Earth
// let map = L.map("mapid").setView([30, 30], 2);
// Grab geoJSON data - basic
// L.geoJSON(sanFranAirport).addTo(map);

// Create map object with alternative method


// Grab geoJSON data + turn each feature into marker
// L.geoJSON(sanFranAirport, {
//     pointToLayer: function(feature, latlng) {
//         console.log(feature);
//         return L.marker(latlng).bindPopup("<h2>" + feature.properties.city + "</h2>")
//     }
// }).addTo(map);

// // Skill drill for pointToLayer: change popup information
// L.geoJSON(sanFranAirport, {
//     pointToLayer: function(feature, latlng) {
//         console.log(feature);
//         return L.marker(latlng).bindPopup("<h2>" + feature.properties.name + "</h2>" + "<hr>" + "<h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>")
//     }


// onEachFeature instead
// L.geoJSON(sanFranAirport, {
//     onEachFeature: function(feature, layer) {
//         console.log(layer);
//         layer.bindPopup("<h2>" + "Airport Code: " + feature.properties.faa + "</h2>" + "<hr>" + "<h3>" + "Airport Name: " + feature.properties.name +  "</h3>");
//     }
// }).addTo(map);

// // We create the tile layer that will be the background of our map. original version
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: API_KEY
});

// Create dark tile layer
let dark = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
    });

// Create base layer that holds both maps
let baseMaps = {
    Streets: streets,
    Dark: dark
};

let map = L.map("mapid", {
    center: [30, 30],
    zoom: 2,
    layers: [streets]
});

L.control.layers(baseMaps).addTo(map);


let airportData = "https://raw.githubusercontent.com/larabjork/mapping_earthquakes/main/majorAirports.json"

d3.json(airportData).then(function(data){
    console.log(data);
    L.geoJSON(data, {
        onEachFeature: function(feature, layer) {
                    console.log(layer);
                    layer.bindPopup("<h2>" + "Airport Code: " + feature.properties.faa + "</h2>" + "<hr>" + "<h3>" + "Airport Name: " + feature.properties.name +  "</h3>");
                }
    }
        ).addTo(map)
 })




 // onEachFeature instead
// L.geoJSON(sanFranAirport, {
//     onEachFeature: function(feature, layer) {
//         console.log(layer);
//         layer.bindPopup("<h2>" + "Airport Code: " + feature.properties.faa + "</h2>" + "<hr>" + "<h3>" + "Airport Name: " + feature.properties.name +  "</h3>");
//     }
// }).addTo(map);

// An array of cities
// let cityData = cities;

//   loop throug the cities array and create one marker for each city - original version
// cityData.forEach(function(city){
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population/100000
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
// }
// );

//   loop throug the cities array and create one marker for each city - skill drill 
// cityData.forEach(function(city){
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population/200000,
//         weight: 4,
//         color: "orange",
//         fillColor: "orange",
//         fillOpacity: 0.5,

//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
// }
// );


//     radius: 1300,
//     color: "black",
//     fillColor: "#ffffa1"
// }).addTo(map);
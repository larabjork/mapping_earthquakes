console.log("working");

// Create the map object with a center and zoom level
// let map = L.map("mapid").setView([40.7, -94.5], 4);

let map = L.map("mapid").setView([34.0522, -118.243], 14);

// Alternate code that would do same thing; useful when we need multiple tile layers or a background image for a map
// let map = L.map("mapid",{
    // center: [
    //     40.7, -94.5
    // ],
    // zoom: 4
// });
// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     // id: 'mapbox/streets-v11',
//     // tileSize: 512,
//     // zoomOffset: -1,
//     accessToken: API_KEY
// });

// Skill drill: change map background to dark
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    // id: 'mapbox/streets-v11',
    // tileSize: 512,
    // zoomOffset: -1,
    accessToken: API_KEY
});


// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Add a marker to the map for Los Angeles
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Use a circle as a marker, also for Los Angeles
// L.circle([34.0522, -118.2437],
//     {
//         radius: 100
//     }).addTo(map);

// Skill drill (my version): light yellow circle, black outline, radius 300 - still LA
// L.circle([34.0522, -118.2437],
//         { color: 'black',
//         fillColor: 'yellow',
//         fillOpacity: 0.5,
//         radius: 300
//         }).addTo(map);

// SKill drill: module's code, using circleMarker - I didn't get the right results with a radius of 300 (compared to their code?)
L.circle([34.0522, -118.2437],{ 
    radius: 1300,
    color: "black",
    fillColor: "#ffffa1"
}).addTo(map);
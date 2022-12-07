console.log("working");

// Create the map object with a center and zoom level
let map = L.map('mapid').setView([40.7, -94.5],4);


// // Original version: We create the tile layer that will be the background of our map. original version
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     // id: 'mapbox/streets-v11',
//     // tileSize: 512,
//     // zoomOffset: -1,
//     accessToken: API_KEY
// });


// Skill drill version with light tile
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    // opacity: 0.5,
    // id: 'mapbox/streets-v11',
    // tileSize: 512,
    // zoomOffset: -1,
    accessToken: API_KEY
});

// Original/module version: Coordinates for each point to be used in the line (LA, SFO, SLC, SEA)
// let line = [
//     [33.9416, -118.4085],
//     [37.6214, -122.3790],
//     [40.7899, -111.9791],
//     [47.4502, -122.3088]
//   ];

//   L.polyline(line, {
//     color: "yellow"
//   }).addTo(map);


// Skill drill version
let line = [
    [37.6214, -122.3790],
    [30.1975, -97.6664],
    [43.6777, -79.6248],
    [40.6413, -73.7781]
  ];

  L.polyline(line, {
    color: "blue",
    weight: 4,
    opacity: 0.5,
    dashArray: 10
  }).addTo(map);

// // Then we add our 'graymap' tile layer to the map.
streets.addTo(map);




console.log("working");

// Create satellite tile layer
let satellite = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-v9',
    accessToken: API_KEY
});

// Create satellite-streets tile layer
let satelliteStreets = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/satellite-streets-v12',
        accessToken: API_KEY
    });

// Create streets tile layer
let streets = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v12',
        accessToken: API_KEY
    });


// Create base layer that holds both maps
let baseMaps = {
    "Satellite": satellite,
    "Satellite Streets": satelliteStreets,
    "Streets": streets
};

// Center map on Toronto, default to street layer
let map = L.map("mapid", {
    center: [43.7, -79.3],
    zoom: 11,
    layers: [streets]
});

L.control.layers(baseMaps).addTo(map);


let torontoHoods = "https://raw.githubusercontent.com/larabjork/mapping_earthquakes/main/torontoNeighborhoods.json"

let myStyle = {         
    fillColor: "#ffffa1",
    weight: 2,
    color: "#3366ff"
};

d3.json(torontoHoods).then(function(data){
    console.log(data);
    L.geoJSON(data, {
        style: myStyle,
        onEachFeature: function(feature, layer) {
                    layer.bindPopup("<h3>" + "Neighborhood: " + feature.properties.AREA_NAME+ "</h3>");
                }
    }
        ).addTo(map)
 });



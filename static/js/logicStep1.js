console.log("working");

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
    "Satellite": satelliteStreets,
    "Streets": streets
};

// Center map on Toronto, default to street layer
let map = L.map("mapid", {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
});

L.control.layers(baseMaps).addTo(map);


let myStyle = {         
    fillColor: "#ffffa1",
    weight: 2,
    color: "#3366ff"
};

d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data){
    console.log(data);
    L.geoJSON(data
    //     , {
    //     style: myStyle,
    //     onEachFeature: function(feature, layer) {
    //                 layer.bindPopup("<h3>" + "Neighborhood: " + feature.properties.AREA_NAME+ "</h3>");
    //             }
    // }
        ).addTo(map)
 });



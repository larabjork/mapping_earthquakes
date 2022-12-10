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


function styleInfo(feature) {
    function getRadius(magnitude) {
        magnitude = feature.properties.mag; 
        if (magnitude === 0) {
            return 1;
        }
        return magnitude * 4
    };
    return {
        opacity: 1,
        fillOpacity: 1, 
        fillColor: "#ffae42",
        color: "#000000",
        radius: getRadius(),
        stroke: true,
        weight: 0.5
    };
};




d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data){
    L.geoJSON(data, {
        pointToLayer: function(feature, latlng) {

            return L.circleMarker(latlng);
            console.log(data);},
        style: styleInfo
    }).addTo(map)
 });



console.log("working");

// Create light tile layer
let light = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    accessToken: API_KEY
});

// Create dark tile layer
let dark = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/dark-v10',
        accessToken: API_KEY
    });


// Create night navigation tile layer
let nightNavigation = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/navigation-night-v1',
        accessToken: API_KEY
    });

// Create day navigation layer
let dayNavigation = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/navigation-day-v1',
        accessToken: API_KEY
    });

// Create base layer that holds both maps
let baseMaps = {
    Light: light,
    Dark: dark,
    DayNavigation: dayNavigation,
    NightNavigation: nightNavigation
};

// Center map on Toronto, default to light layer
let map = L.map("mapid", {
    center: [40, -80],
    zoom: 2,
    layers: [dark]
});

L.control.layers(baseMaps).addTo(map);


let torontoData = "https://raw.githubusercontent.com/larabjork/mapping_earthquakes/main/torontoRoutes.json"

let myStyle = {         
    color: "#ffffa1",
    weight: 2
};

d3.json(torontoData).then(function(data){
    console.log(data);
    L.geoJSON(data, {
        style: myStyle,
        onEachFeature: function(feature, layer) {
                    layer.bindPopup("<h3>" + "Airline: " + feature.properties.airline+ "</h3>" + "<hr>" + "<h3>" + "Destination: " + feature.properties.dst +  "</h3>");
                }
    }
        ).addTo(map)
 });



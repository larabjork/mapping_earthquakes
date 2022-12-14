# Mapping Earthquakes
Data Bootcamp week 14 - GeoJSON, APIs, Leaflet

# Overview of Project
This exercise involved using JavaScript, D3, Mapbox, and Leaflet to create map layers from geoJSON data,showing earthquake locations/magnitudes and tectonic plate boundaries.

The guided homework portion of the exercise involved building a map; adding single points, multiple points, lines, linestrings, and polygons; creating layers with different background maps; adding styling to data points (color/size variation depending on earthquake magnitude, as well as popups with text data); and accessing geoJSON data about earthquake activity in the past seven days from the US Geological Survey .

The independent challenge portion of the exercise involved loading tectonic plate data from another developer's GitHub repository and representing plate boundaries on the map of earthquake data. The challenge also required building a map layer that showed major earthquakes as a subset of the seven-day data. Finally, the challenge required adding a third map background option.

# Results
The code can be hosted locally by entering the following into the terminal:

python -m http.server

After this step is completed, in a browser tab, go to localhost:8000.

There, you should see a default image similar to this one:

![world map with circles showing earthquake locations](https://github.com/larabjork/mapping_earthquakes/blob/earthquake_challenge/earthquake_challenge/static/images/eq_map_on_loading.png)

At the top left corner, different options can be selected, as shown below.

Background changed to "satellite streets" and all other map layers selected

![dark world map with circles and plate boundaries](https://github.com/larabjork/mapping_earthquakes/blob/earthquake_challenge/earthquake_challenge/static/images/satellite_streets_all_options.png)

Background changed to "outdoors" and all other map layers selected
![light world map with circles and plate boundaries](https://github.com/larabjork/mapping_earthquakes/blob/earthquake_challenge/earthquake_challenge/static/images/outdoors_view_all_options.png)

Background changed to "streets" and only the two map layers created in this challenge selected (tectonic plates and major earthquakes)
![light world map with plate boundaries and fewer circles](https://github.com/larabjork/mapping_earthquakes/blob/earthquake_challenge/earthquake_challenge/static/images/streets_view_plates_and_major_eq.png)

## Ideas for Improvements
Additions to this project could include:
* Adding a title to the legend, to indicate that it shows earthquake magnitudes
* Adding a second legend, only visible if the major earthquake layer is selected, to explain the associated color scale
* Improving the visual appearance of the map by ensuring that users don't see areas at the edge of map  that look like they have no data when, in fact, the same location repeats at the other side of the map.


// Check to see if code is working
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map("mapid").setView([37.6214, -122.379], 5);

// Coordinates for each point to be used in the polyline.
let line = [
  [33.9416, -118.4085],
  [37.6214, -122.379],
  [40.7899, -111.9791],
  [47.4502, -122.3088],
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "yellow",
}).addTo(map);

// Create tile layer that is background of map
let streets = L.tileLayer(
  "https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY,
  }
);

// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cities.forEach(function (city) {
  console.log(city);
});

// Loop through the cities array and create one marker for each city.
cityData.forEach(function (city) {
  console.log(city);
  L.circleMarker(city.location, {
    radius: city.population / 100000,
  })
    .bindPopup(
      "<h2>" +
        city.city +
        ", " +
        city.state +
        "</h2> <hr> <h3>Population " +
        city.population.toLocaleString() +
        "</h3>"
    )
    .addTo(map);
});

// Add layer to the map
streets.addTo(map);

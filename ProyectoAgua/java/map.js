// Initialize the map
const map = L.map('map').setView([-45.459908, -72.814236], 20);

// Add a tile layer from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker to the map
const marker = L.marker([-45.459908, -72.814236]).addTo(map);

// Center the map on the marker
map.setView(marker.getLatLng(), 20);
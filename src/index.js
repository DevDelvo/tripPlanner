const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
const { marker } = require("./marker");

mapboxgl.accessToken = "pk.eyJ1Ijoia2V2ZGVsdm8iLCJhIjoiY2pnbzRvNGpoMGg5ajMzcXZmZ2l6Z3Q2NyJ9.WGNvwX9VLhLAdp1PLkn6Jw";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


let mark = marker('activity', [-74.009, 40.705]);
mark.addTo(map);
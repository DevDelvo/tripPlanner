const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
// const { map } = require('./');

const marker = (place, coords) => {
    let markerDomEl = document.createElement("div");
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    
    if (place === 'hotel') {
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
    } else if (place === 'activity') {
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)"
    } else if (place === "restaurant") {
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)"
    } 
    // else {
    //     throw 'Invalid place type.';
    // }

    return new mapboxgl.Marker(markerDomEl).setLngLat(coords);
}

module.exports = { marker }
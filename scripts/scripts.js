function initMap() {
    var options = {
        center: {
            lat: 38.132153,
            lng: -121.273985
        },
        zoom: 19
    }

    map = new google.maps.Map(document.getElementById("map"),options);
}
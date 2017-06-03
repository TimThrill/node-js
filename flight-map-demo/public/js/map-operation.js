function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: {lat: 0, lng: -180},
        mapTypeId: 'terrain'
    });

    var flightPlanCoordinates = [
        {lat: 37.772, lng: -122.214},
        {lat: 21.291, lng: -157.821},
        {lat: -18.142, lng: 178.431},
        {lat: -27.467, lng: 153.027}
    ];
    var flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });

    var infowindow = new google.maps.InfoWindow({
      content: 'flight path'
    });
    flightPath.addListener('click', function(event){onClickFlightPath(infowindow, map, event);});
    flightPath.setMap(map);
}

function onClickFlightPath(infowindow, map, event) {
    if(infowindow.open) {
        infowindow.close();
    }
    infowindow.setPosition({lat:event.latLng.lat(), lng:event.latLng.lng()});
    infowindow.open(map);
}
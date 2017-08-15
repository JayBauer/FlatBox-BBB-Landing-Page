google.maps.event.addDomListener(window, 'load', function() {
  var map;
  var currentLocation;
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: new google.maps.LatLng(43.653226, -79.3831843),
    zoom: 11,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      currentLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      map.setCenter(currentLocation);
    },
    function() {
      handleLocationError(true, infoWindow, map.getCenter());
      var currentLocationMark = new google.maps.Marker({
        position:currentLocation,
        map:map,
        title:'You are here',
        icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
      });
    });
  }
  else {
    handleLocationError(false, infoWindow, map.getCenter());
  }

  var panelDiv = document.getElementById('panel');

  var data = new StoreLocatorDataSource;

  var view = new storeLocator.View(map, data, {
    geolocation: false,
    //features: data.getFeatures()
  });

  new storeLocator.Panel(panelDiv, {
    view: view
  });
});

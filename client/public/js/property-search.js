function initMap() {
  // The location of Uluru
  var tampa = { lat: 27.9506, lng: -82.4572 };
  // The map, centered at Tampa
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: tampa
  });
  // The marker, positioned at Tampa
  var marker = new google.maps.Marker({ position: tampa, map: map });
}

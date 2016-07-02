var overlay;
USGSOverlay.prototype = new google.maps.OverlayView();

function USGSOverlay(bounds, image, map) {
    // Initialize all properties.
    this.bounds_ = bounds;
    this.image_ = image;
    this.map_ = map;

    // Define a property to hold the image's div. We'll
    // actually create this div upon receipt of the onAdd()
    // method so we'll leave it null for now.
    this.div_ = null;

    // Explicitly call setMap on this overlay.
    this.setMap(map);
}  
USGSOverlay.prototype.onAdd = function() {

  var div = document.createElement('div');
  div.style.borderStyle = 'none';
  div.style.borderWidth = '0px';
  div.style.position = 'absolute';

  // Create the img element and attach it to the div.
  var img = document.createElement('img');
  img.src = this.image_;
  img.style.width = '100%';
  img.style.height = '100%';
  img.style.position = 'absolute';
  div.appendChild(img);

  this.div_ = div;

  // Add the element to the "overlayLayer" pane.
  var panes = this.getPanes();
  panes.overlayLayer.appendChild(div);
};
// [END region_attachment]

// [START region_drawing]
USGSOverlay.prototype.draw = function() {

  // We use the south-west and north-east
  // coordinates of the overlay to peg it to the correct position and size.
  // To do this, we need to retrieve the projection from the overlay.
  var overlayProjection = this.getProjection();

  // Retrieve the south-west and north-east coordinates of this overlay
  // in LatLngs and convert them to pixel coordinates.
  // We'll use these coordinates to resize the div.
  var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
  var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

  // Resize the image's div to fit the indicated dimensions.
  var div = this.div_;
  div.style.left = sw.x + 'px';
  div.style.top = ne.y + 'px';
  div.style.width = (ne.x - sw.x) + 'px';
  div.style.height = (sw.y - ne.y) + 'px';
};

class MapController {
    constructor($scope, $state) {

    }
    initMap() {
        var latLng = new google.maps.LatLng(49.276308, -123.104591)        
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 18,
            center: latLng,
            panControl: false,
            disableDefaultUI: true,
            zoomControl: true,
            scrollwheel: false,
            panControl: false,            
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var Item_1 = new google.maps.LatLng(49.275356, -123.107949);
        var Item_2 = new google.maps.LatLng(49.277624, -123.102284);

        var bounds = new google.maps.LatLngBounds(Item_1, Item_2);

        // The photograph is courtesy of the U.S. Geological Survey.
        var srcImage = 'assets/images/map.png';

        // The custom USGSOverlay object contains the USGS image,
        // the bounds of the image, and a reference to the map.
        overlay = new USGSOverlay(bounds, srcImage, map);

        var bounds2 = new google.maps.LatLngBounds();
        var bound_1 = new google.maps.LatLng(49.275795, -123.106538);
        var bound_2 = new google.maps.LatLng(49.277377, -123.102783);        
        bounds2.extend(bound_2);
        bounds2.extend(bound_1);
        map.fitBounds(bounds2);
        // google.maps.event.addDomListener(map, 'idle', function() {

        //     var marker = new google.maps.Marker({
        //         map: map,
        //         animation: google.maps.Animation.DROP,
        //         position: latLng
        //     });

        //     var infoWindow = new google.maps.InfoWindow({
        //         content: "Here I am!"
        //     });

        //     google.maps.event.addListener(marker, 'click', function() {
        //         infoWindow.open(map, marker);
        //     });

        // });

    }
}
MapController.$inject = ['$scope', '$state'];
export default MapController;

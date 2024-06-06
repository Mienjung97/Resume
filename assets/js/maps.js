function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    var locations = [{
            lat: 50.81629213944109,
            lng: 7.17685195998578
        },
        {
            lat: 50.88412570261548,
            lng: 6.920747094526645
        },
        {
            lat: 51.052513694339694,
            lng: -114.06708585599274
        },
        {
            lat: 49.874940879543196,
            lng: 8.656756806093487
        },
        {
            lat: 49.973199342819434,
            lng: 8.954461437705083
        },
        {
            lat: 47.665760029830864,
            lng: 9.447021276084955
        },
        {
            lat: 49.46939232264922,
            lng: 8.482835154987214
        },
        {
            lat: 49.35612256657705,
            lng: 8.531898931583832
        },
        {
            lat: 49.498168203014046,
            lng: 8.508890329910608
        },
        {
            lat: 53.298174990317726,
            lat: -6.178633087704716
        }
    ];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    var markerClusterer = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}
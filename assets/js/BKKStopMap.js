/**
 * MapBox terkep a BKK megallohelyek megjelenitesehez.
 *
 * @constructor
 */
var BKKStopMap = function () {

    /**
     * BKKStopMap.
     *
     * @type {BKKStopMap}
     */
    var that = this;

    /**
     * Leaflet terkep.
     *
     * @type {L.Map}
     */
    this.map = null;

    /**
     * Leaflet FeatureGroup a megalloknak.
     *
     * @type {L.FeatureGroup}
     */
    this.markers = new L.FeatureGroup();

    /**
     * Megallohely Leaflet ikon.
     *
     * @type {*}
     */
    this.bkkIcon = L.icon({
        iconUrl: 'images/marker.png',

        iconSize:     [32, 32],
        iconAnchor:   [15, 15],
        popupAnchor:  [0, -15]
    });

    /**
     * Beallitja es betolti a terkepet.
     *
     * @param {float} lon
     * @param {float} lat
     */
    this.init = function (lon, lat) {
        L.mapbox.accessToken = "pk.eyJ1IjoibWVmaWJsb2dnZXIiLCJhIjoiall0a1FFQSJ9.jZrldQE2zWdAhNgVxb6e5A";

        that.map = L.map("map", "mefiblogger.l8obi34e");

        L.tileLayer('http://{s}.tiles.mapbox.com/v4/mefiblogger.l8obi34e/{z}/{x}/{y}.png?access_token={token}', {
            token: L.mapbox.accessToken,
            attribution: '<a href="http://osm.org/">OpenStreetMap</a> | <a href="http://mapbox.com/">MapBox</a> | <a href="http://futar.bkk.hu/">BKK Futár</a>'
        }).addTo(that.map);

        that.subscribeEventListeners();

        that.map.options.minZoom = 15;
        that.map.setView([lat, lon], 15);
    };

    /**
     * Feliratkozik a terkep esemenyeire.
     */
    this.subscribeEventListeners = function () {
        that.map.on("load", that.loadStops);
        that.map.on("moveend", that.loadStops);
    };

    this.loadStops = function (e) {
        var bounds = that.map.getBounds(),
            data = [
                bounds._southWest.lng, // minLon
                bounds._northEast.lng, // maxLon
                bounds._southWest.lat, // minLat
                bounds._northEast.lat  // maxLat
            ];

        $("#title").text("Megállók betöltése…");

        $.ajax({
            dataType: "json",
            url: "/stops/" + data.join(","),
            success: that.drawStops,
            error: that.handleError
        });
    };

    /**
     * Felrajzolja a terkepre a megallohelyeket.
     *
     * @param {Object} data
     */
    this.drawStops = function (data) {
        var i,
            content,
            template = "<a href='/stop/:id' class='stop-link'>:name</a>";

        that.map.removeLayer(that.markers);
        that.markers = new L.FeatureGroup();

        for (i in data) {
            content = template.replace(":id", data[i]["id"]).replace(":name", data[i]["name"]);
            L.marker([data[i]["lat"], data[i]["lon"]], { icon: that.bkkIcon }).bindPopup(content).addTo(that.markers);
        }

        that.map.addLayer(that.markers);

        $("#title").text("Válassz megállót!");
    };

    /**
     * Hibauzenetet jelenit meg.
     */
    this.handleError = function () {
        alert("Nem sikerült betölteni a megállóhelyeket. :(")
    };
};
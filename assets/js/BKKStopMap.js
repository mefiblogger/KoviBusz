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
     * @param {Number} lon
     * @param {Number} lat
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
     * Beallitja az oldal cimsorat.
     *
     * @param {String}  title
     */
    this.setTitle = function (title) {
        $("#title").text(title);
    }

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

        that.setTitle("Megállók betöltése…");

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
            marker;

        that.map.removeLayer(that.markers);
        that.markers = new L.FeatureGroup();

        for (i in data) {
            marker = L.marker([data[i]["lat"], data[i]["lon"]], { icon: that.bkkIcon });
            marker._kovibusz = {};
            marker._kovibusz.stopId = data[i]["id"];
            marker._kovibusz.stopName = data[i]["name"];
            marker.on("click", that.showPopup);
            marker.addTo(that.markers);
        }

        that.map.addLayer(that.markers);

        that.setTitle("Válassz megállót!");
    };

    /**
     * Megjelenit egy popupot.
     *
     * @param {L.Event} e
     */
    this.showPopup = function (e) {
        var stopId = e.target._kovibusz.stopId,
            stopName = e.target._kovibusz.stopName,
            popup = new L.Popup();

        popup.setLatLng(e.target._latlng);
        popup.setContent("<div class='popup-load'></div>");

        that.map.openPopup(popup);

        $.ajax({
            dataType: "html",
            url: "/select-route/" + stopId,
            error: that.handleError,
            success: function (data) {
                popup.setContent(data.replace("{ title }", stopName));
            }
        });
    };

    /**
     * Hibauzenetet jelenit meg.
     */
    this.handleError = function (msg) {
        alert("Nem sikerült betölteni a megállóhelyeket. :(")
    };
};
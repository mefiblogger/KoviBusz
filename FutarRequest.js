/*global require, module, console, __dirname */
/*jslint unparam: true, sloppy: true, vars: true */

var request = require("request");

module.exports = function () {

    /**
     * Lekeri a kovetkezo busz indulasat es visszaadja
     * a sablonnal szukseges adatokat.
     *
     * @param {String}      id
     * @param {Function}    callback
     *
     * @returns {null}
     */
    var getNextArrival = function (id, callback) {
        var requestOptions = {
            url: "http://futar.bkk.hu/bkk-utvonaltervezo-api/ws/otp/api/where/arrivals-and-departures-for-stop.json?stopId=BKK_" + id + "&onlyDepartures=1&minutesBefore=0&minutesAfter=20",
            json: true
        };

        // Adatok lekerese a Futartol.
        request(requestOptions, function (error, response, data) {
            // hibas API valasz
            if (200 != response.statusCode) {
                console.error("Hibas valasz erkezett a BKK Futartol:\n");
                console.error(new Error(response.body));
                callback(response.body, null);
                return;
            }

            // nincs menetrend
            if (!data.data || 1 > data.data.entry.stopTimes.length) {
                console.log("[api] - nincs menetrendinfo: " + id);
                callback(false, null);
                return;
            }

            // adatok osszeallitasa
            var stoptime = data.data.entry.stopTimes[0],
                timestamp = (stoptime.predictedArrivalTime || stoptime.arrivalTime) * 1000,
                date = new Date(timestamp),
                m = "0" + date.getMinutes(),
                time = date.getHours() + ':' + m.substr(m.length-2),
                routeId = Object.keys(data.data.references.routes)[0],
                route = data.data.references.routes[routeId];

            callback(false, {
                route: route.shortName,
                time: time,
                timestamp: timestamp,
                type: route.type.toString().toLowerCase()
            });
        });
    };

    return {
        getNextArrival: getNextArrival
    };
}

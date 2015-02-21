/*global require, module, console, __dirname, parseInt */
/*jslint unparam: true, sloppy: true, vars: true */

var request = require("request");

module.exports = function () {

    /**
     * A Futar API-jan keresztul lekerdezi egy megallo adatait.
     *
     * @param {String}      id
     * @param {Function}    callback
     */
    var getFutarDataForStop = function (id, callback) {
        var requestOptions = {
            url: "http://futar.bkk.hu/bkk-utvonaltervezo-api/ws/otp/api/where/arrivals-and-departures-for-stop.json?stopId=BKK_" + id + "&onlyDepartures=1&minutesBefore=0&minutesAfter=20",
            json: true
        };

        // Adatok lekerese a Futartol.
        request(requestOptions, function (error, response, data) {
            // hibas API valasz
            if (200 != response.statusCode) {
                console.error("[api] - hibas valasz erkezett a BKK Futartol:\n");
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

            callback(false, data.data);
        });
    };

    /**
     * Lekeri egy megallohely jaratait
     * es a sablonnak szukseges adatokat adja vissza.
     *
     * Az adatokat a jarat viszonylata
     * szerint rendezve adja vissza.
     *
     * Egy jarat csak egyszer jelenik meg.
     *
     * @param {String}      id
     * @param {Function}    callback
     */
    var getTripsInStop = function (id, callback) {
        getFutarDataForStop(id, function (error, data) {
            var i,
                errorMsg,
                trips,
                routes,
                routeIds = {},
                tripsInStop = [];

            if (error || null == data || !data.hasOwnProperty("references")) {
                errorMsg = error || new Error("Nincsenek jaratinformaciok.")
                console.log("[api] - nincsenek jaratinformaciok");
                callback(errorMsg, null);
                return;
            }

            trips = data.references.trips;
            routes = data.references.routes;

            for (i in trips) {
                if (routes.hasOwnProperty(trips[i]["routeId"])) {
                    if (!routeIds.hasOwnProperty(trips[i]["routeId"])) {
                        routeIds[trips[i]["routeId"]] = 1;
                        tripsInStop.push({
                            routeId : trips[i]["routeId"],
                            tripId : trips[i]["id"],
                            shortName : routes[trips[i]["routeId"]]["shortName"],
                            tripHeadsign : trips[i]["tripHeadsign"]
                        });
                    }
                }
            }

            tripsInStop = tripsInStop.sort(function(a, b) {
                var x = parseInt(a["shortName"]),
                    y = parseInt(b["shortName"]);
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });

            callback(false, tripsInStop);
        });
    };

    /**
     * Lekeri a kovetkezo busz indulasat es visszaadja
     * a sablonnak szukseges adatokat.
     *
     * @param {String}      stopId
     * @param {String}      tripId
     * @param {Function}    callback
     *
     * @returns {null}
     */
    var getNextArrival = function (stopId, tripId, callback) {
        getFutarDataForStop(stopId, function (error, data) {
            var stoptime,
                timestamp,
                date,
                m,
                time,
                routeId,
                route,
                i;

            if (error) {
                callback(error, null);
                return;
            }

            for (i in data.entry.stopTimes) {
                if (tripId == data.entry.stopTimes[i]["tripId"]) {
                    stoptime = data.entry.stopTimes[i];
                    timestamp = (stoptime.predictedArrivalTime || stoptime.arrivalTime) * 1000,
                    date = new Date(timestamp),
                    m = "0" + date.getMinutes(),
                    time = date.getHours() + ':' + m.substr(m.length-2),
                    routeId = data.references.trips[tripId]["routeId"],
                    route = data.references.routes[routeId];

                    callback(false, {
                        route: route.shortName,
                        time: time,
                        timestamp: timestamp,
                        type: route.type.toString().toLowerCase()
                    });

                    return;
                }
            }

            callback(new Error("Nincs menetrend info az adott megallo-viszonylat parosra."), null);
        });
    };

    return {
        getTripsInStop: getTripsInStop,
        getNextArrival: getNextArrival
    };
}

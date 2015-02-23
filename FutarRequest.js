/*global require, module, console, __dirname, parseInt, Date */
/*jslint unparam: true, sloppy: true, vars: true */

var request = require("request"),
    strftime = require("strftime");

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
    var getRoutesInStop = function (id, callback) {
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

            // jaratok osszegyujtese
            for (i in trips) {
                if (routes.hasOwnProperty(trips[i]["routeId"])) {
                    if (!routeIds.hasOwnProperty(trips[i]["routeId"])) {
                        routeIds[trips[i]["routeId"]] = 1;
                        tripsInStop.push({
                            routeId : trips[i]["routeId"],
                            shortName : routes[trips[i]["routeId"]]["shortName"],
                            tripHeadsign : trips[i]["tripHeadsign"]
                        });
                    }
                }
            }

            // jaratnev szerinti rendezes
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
     * @param {String}      routeId
     * @param {Function}    callback
     *
     * @returns {null}
     */
    var getNextArrival = function (stopId, routeId, callback) {
        getFutarDataForStop(stopId, function (error, data) {
            var stoptime,
                timestamp = null,
                time,
                tripId,
                tripIds = {},
                route,
                i;

            if (error) {
                callback(error, null);
                return;
            }

            // kovetkezo jaratok tripId-ja
            for (i in data.references.trips) {
                if (routeId == data.references.trips[i]["routeId"]) {
                    tripIds[data.references.trips[i]["id"]] = 1;
                }
            }

            // kovetkezo jaratok indulasa
            if (Object.keys(tripIds).length) {
                for (i in data.entry.stopTimes) {
                    if (tripIds.hasOwnProperty(data.entry.stopTimes[i]["tripId"])) {
                        stoptime = data.entry.stopTimes[i];
                        time = (stoptime.predictedArrivalTime || stoptime.arrivalTime) * 1000;

                        if (null === timestamp || time < timestamp) {
                            timestamp = time;
                            tripId = data.entry.stopTimes[i]["tripId"];
                        }
                    }
                }
            }

            // a legkorabbi indulast visszaadjuk
            if (timestamp) {
                time = strftime("%H:%M", new Date(timestamp));
                route = data.references.routes[data.references.trips[tripId]["routeId"]];

                callback(false, {
                    route: route.shortName,
                    time: time,
                    timestamp: timestamp,
                    type: route.type.toString().toLowerCase()
                });

                return;
            }

            callback(new Error("Nincs menetrend info az adott megallo-viszonylat parosra."), null);
        });
    };

    return {
        getRoutesInStop: getRoutesInStop,
        getNextArrival: getNextArrival
    };
}

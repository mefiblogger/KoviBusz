/*global require, module, console, __dirname */
/*jslint unparam: true, sloppy: true, vars: true */

var swig = require("swig"),
    request = require("request")

/**
 * Lekeri a buszmenetrendet es osszallitja a sablont.
 *
 * @returns {{getResponse: getResponse}}
 */
module.exports = function () {

    /**
     * Lekeri a kovetkezo busz indulasat es visszaadja
     * a feldolgozott sablonfajlt.
     *
     * @param function callback
     *
     * @return String
     */
    var getResponse = function (callback) {
        var requestOptions = {
            url: "http://futar.bkk.hu/bkk-utvonaltervezo-api/ws/otp/api/where/arrivals-and-departures-for-stop.json?stopId=BKK_F00002&onlyDepartures=1&minutesBefore=0&minutesAfter=20",
            json: true
        };

        // Adatok lekerese a Futartol.
        request(requestOptions, function (error, response, data) {
            if (200 != response.statusCode) {
                console.error("Hibas valasz erkezett a BKK Futartol:\n");
                console.error(response.body);
                return;
            }

            var timestamp = data.data.entry.stopTimes[0].arrivalTime * 1000,
                date = new Date(timestamp),
                m = "0" + date.getMinutes(),
                time = date.getHours() + ':' + m.substr(m.length-2),
                template = swig.compileFile(__dirname + '/assets/templates/index.html'),
                output = template({
                    route: data.data.references.routes.BKK_1780.shortName,
                    time: time,
                    timestamp: timestamp
                });
            callback(output);
        });
    };

    return {
        getResponse: getResponse
    };
}

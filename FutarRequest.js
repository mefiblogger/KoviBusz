/*global require, module, console, */
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
            url: "http://futar.bkk.hu/0/w/pt?showIntermediateStops=true&maxTransfers=5&fromCoord=47.490695%2C19.03066&fromName=M%C3%A9sz%C3%A1ros%20utca%2058a.&toCoord=47.492988%2C19.055909&toName=Ferenciek%20tere&fromSubName=1016%20Budapest&toSubName=Budapest&mode=WALK%2CBUS&optimize=WALK&maxWalkDistance=300&fromPlace=M%C3%A9sz%C3%A1ros%20utca%2058a.%3A%3A47.490695%2C19.03066&toPlace=Ferenciek%20tere%3A%3A47.492988%2C19.055909&appVersion=1.1.3-20150121144643&key=bkk-web&a=m78264",
            headers: {
                "Accept":"application/json, text/javascript, */*; q=0.01",
                "Accept-Encoding":"deflate",
                "Accept-Language":"en-US,en;q=0.8,hu;q=0.6",
                "Connection":"keep-alive",
                "Cookie":"ga=GA1.2.232464926.1422891849; A=pf7e87a89acm4a7e; _gat=1,",
                "Host":"futar.bkk.hu",
                "Referer":"http://futar.bkk.hu/trip-plan/?fromCoord=47.488476%2C19.031323&fromName=M%C3%A9sz%C3%A1ros%20utca&toCoord=47.492818%2C19.055736&toName=Ferenciek%20tere&fromPlace=M%C3%A9sz%C3%A1ros%20utca%3A%3A47.488476%2C19.031323&toPlace=Ferenciek%20tere%3A%3A47.492818%2C19.055736&selectedItinerary=0&map=13/47.501/19.053&layers=SVB",
                "User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.93 Safari/537.36",
                "X-Requested-With":"XMLHttpRequest"
            },
            json: true
        };

        // Adatok lekerese a Futartol.
        request(requestOptions, function (error, response, data) {
            if (200 != response.statusCode) {
                console.error("Hibas valasz erkezett a BKK Futartol: 405 Not Allowed");
                console.error(response.body);
                return;
            }

            var itinerary = data.data.entry.plan.itineraries[0],
                date = new Date(itinerary.startTime),
                m = "0" + date.getMinutes(),
                time = date.getHours() + ':' + m.substr(m.length-2),
                template = swig.compileFile(__dirname + '/assets/templates/index.html'),
                output = template({
                    route: itinerary.legs[1].route, // a 0. elem a WALK
                    time: time,
                    timestamp: itinerary.startTime
                });
            callback(output);
        });
    };

    return {
        getResponse: getResponse
    };
}
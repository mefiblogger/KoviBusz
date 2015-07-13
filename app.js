/*global require, __dirname, parseFloat, process */
/*jslint unparam: true, sloppy: true, vars: true */

var express = require("express"),
    app = express(),
    server,
    FutarRequest = require("./FutarRequest"),
    BKKStopIds = require("./BKKStopIds"),
    swig = require("swig"),
    request = new FutarRequest();


// header beallitasa minden requestnek
app.get('/*',function(req,res,next){
    res.header("X-Frame-Options", "ALLOWALL");
    next();
});

// kezdolap
app.get("/", function (req, res) {
    var tpl = swig.compileFile(__dirname + '/assets/templates/index.html');
    res.send(tpl());
});

// jaratvalaszto
app.get("/select-route/:stopId", function (req, res) {
    request.getRoutesInStop(req.params.stopId, function (error, data) {
        var template;

        if (error || null === data) {
            template = swig.compileFile(__dirname + '/assets/templates/popup-error.html');
            res.send(template());
        } else {
            template = swig.compileFile(__dirname + '/assets/templates/select-route.html');
            res.send(template({
                stopId : req.params.stopId,
                routes : data
            }));
        }
    });
});

// menetrend
app.get("/stop/:stopId/route/:routeId", function (req, res) {
    request.getNextArrival(req.params.stopId, req.params.routeId, function (error, data) {
        var template;

        if (error || null === data) {
            template = swig.compileFile(__dirname + '/assets/templates/error.html');
        } else {
            template = swig.compileFile(__dirname + '/assets/templates/stop.html');
        }

        res.send(template(data));
    })
});

// megallok
app.get("/stops/:minLon,:minLat,:maxLon,:maxLat", function (req, res) {
    var minLon = parseFloat(req.params.minLon),
        minLat = parseFloat(req.params.minLat),
        maxLon = parseFloat(req.params.maxLon),
        maxLat = parseFloat(req.params.maxLat),

        stops = new BKKStopIds();

    res.send(stops.getStopsInBoundingBox(minLon, minLat, maxLon, maxLat));
});

// arkon easter egg
app.get("/arkon", function (req, res) {
    var template = swig.compileFile(__dirname + '/assets/templates/arkon.html');
    res.send(template());
});

// error page
app.get("/error", function (req, res) {
    var template = swig.compileFile(__dirname + '/assets/templates/error.html');
    res.send(template());
});

// assetek
app.use("/images", express.static(__dirname + "/assets/images"));
app.use("/css", express.static(__dirname + "/assets/css"));
app.use("/js", express.static(__dirname + "/assets/js"));

// express szerver inditasa
server = app.listen(process.env.PORT || process.argv[2] || 3000, function () {
    console.log("[app] start - port:%s", server.address().port);
})

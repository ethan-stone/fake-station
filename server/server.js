"use strict";
exports.__esModule = true;
var ws_1 = require("ws");
var server = new ws_1.Server({
    port: 8080
});
var sockets = [];
server.on("connection", function (socket) {
    sockets.push(socket);
    console.debug("socket connected");
    socket.on("message", function (msg) {
        console.debug("Message received: ".concat(msg));
        // echo back message
        socket.send(msg);
    });
    socket.on("close", function () {
        console.debug("socket closed");
        sockets = sockets.filter(function (s) { return s !== socket; });
    });
});

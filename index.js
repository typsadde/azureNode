var http = require('http');
const https = require("https");
const express = require("express");
var router = express.Router();

var server = http.createServer(function(request, response) {
    const url =
    "https://api.fixer.io/latest";

  https.get(url, res => {
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
      body += data;
    });
    res.on("end", () => {
      //body = JSON.parse(body);
      //response.end(body);
    });
    });

    var app = express();

    router.get('/hello', (req, res) => {
        response.end({ response: 'a GET request for LOOKING at questions' });
      });
    response.writeHead(200, {"Content-Type": "application/json"});
});

var port = process.env.PORT || 1337;
server.listen(port); 

console.log("Server running at http://localhost:%d", port);



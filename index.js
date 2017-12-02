var http = require('http');
//var request = require('request');

const https = require("https");
const url =
  "https://maps.googleapis.com/maps/api/geocode/json?address=Florence";
https.get(url, res => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => {
    body += data;
  });
  res.on("end", () => {
    body = JSON.parse(body);
    console.log(
      `City: ${body.results[0].formatted_address} -`,
      `Latitude: ${body.results[0].geometry.location.lat} -`,
      `Longitude: ${body.results[0].geometry.location.lng}`
    );
  });
});

var server = http.createServer(function(request, response) {
    var temp = "This is text"
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(temp);
});

var port = process.env.PORT || 1337;
server.listen(port); 

console.log("Server running at http://localhost:%d", port);



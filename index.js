var http = require('http');
const https = require("https");

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
      response.end(JSON.stringify(body,undefined,"\t"));
    });
  });

    var temp = "This is text"
    response.writeHead(200, {"Content-Type": "application/json"});
});

var port = process.env.PORT || 1337;
server.listen(port); 

console.log("Server running at http://localhost:%d", port);



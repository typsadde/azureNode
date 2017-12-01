var http = require('http');

var options= {
    host: 'https://api.fixer.io',
    path: '/latest'    
}

var server = http.createServer(function(request, response) {
    //var req = http.get(options, function(response));
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello From Azure");

});

var port = process.env.PORT || 1337;
server.listen(port); 

console.log("Server running at http://localhost:%d", port);

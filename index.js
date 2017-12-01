var http = require('http');

var options= {
    host: 'https://api.fixer.io',
    path: '/latest'    
}

var server = http.createServer(function(request, response) {
    var jsonResponse = http.get('https://api.fixer.io/latest');
    var temp = "Hello from variable in code"
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(jsonResponse);

});

var port = process.env.PORT || 1337;
server.listen(port); 

console.log("Server running at http://localhost:%d", port);

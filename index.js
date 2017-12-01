var http = require('http');

var options= {
    host: 'https://api.fixer.io',
    path: '/latest'    
}

var server = http.createServer(function(request, response) {
    var req = {"Message" :"This is a message"};
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(req);

});

var port = process.env.PORT || 1337;
server.listen(port); 

console.log("Server running at http://localhost:%d", port);
